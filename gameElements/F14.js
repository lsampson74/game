//DEFINE THE F14 CLASS :
function f14Fighter() { 

//FIGHTER PROPERTIES :
		var numberOfLives = 3,		//Number of tries before Game Over.
		numberOfBarrelRolls = 3,	//Number of rolls to dodge enemy fire.
	    numberOfMissles = 0,		//Number of guided missiles.

		gunStatus = 'SIN',			//SIN = single guns(default), DOB = double guns, QUA = quad guns

		F14State = 'NRM',			//Normal flight of F14.  DST = Destroyed. FLP = Barrel Roll									
	    animationNRM,				//Animation for the normal flight.
	    animationEXP,				//Exploding F14 animation.
	    controlState,				//F14 Controls.
	    weaponType,					//Type of weapon.
	    armor = 100,				//Amount of protection against machine gun fire ONLY!!
									//Absolutely NO protection against missiles.
		F14Speed = 4,				//Movement speed of the F14.

									//       SOUNDS :
		explosion,					//F14 Explosion
		machineGun,					//F14 Machine gun firing
		missile,					//F14 Missile firing
		roll,						//F14 Barrel roll
		regularFlight,				//F14 Regular flight

        machineGunSoundCounter = 0,         //Machine Guns.
		missileSoundCounter = 0,			//Missiles.
		flipSoundCounter = 0,				//Barrel roll.

		explosionImageCounter = 0,	//Keeps track of the stages in the explosion animation.

		animationTimingA = 0,		//TIMING BETWEEN FRAMES OF ANIMATION :

		numberMissiles = 0,			//Number of missiles fired at one time.
		numberBullets = 0,			//Number of bullets fired at one time.
		gunDamageValue,				//Amount of damage caused by guns.
		
		objectCounter = 0,			//Counter for explosion and barrel roll animation....
		axisCounter = 8,			//9 is normal level flight..... Used for the left and right animations.
		
		F14_x = (width/2)-25, F14_y = height-150;	//Start F14 off at bottom middle of the screen.
		
	//.........................................................................

	//Method declarations :
	this.flightControlsDown = flightControlsDown;
	this.flightControlsUp = flightControlsUp;
	this.F14Animation = F14Animation;
	this.fireGuns = fireGuns;
	this.fireMissiles = fireMissiles;
	this.barrelRoll = barrelRoll;
	this.explodeF14 = explodeF14;
    this.soundProcessor = soundProcessor; 
	
	this.getState = getState;
	this.setState = setState;
	this.getGunStatus = getGunStatus;
	this.setGunStatus = setGunStatus;

	this.getX = getX;
	this.getY = getY;

	//Method definitions :
	//Move the F14 based on user interaction.
	//--------------------------------------------------------------------------------------

	function flightControlsDown(evnt) {

		//If no key was pressed, reset the animation timer.
		if (rightKey == false && leftKey == false && upKey == false && downKey == false) animationTimingA = 0;
	
	
		//LEFT, RIGHT CONTROLS
		if (evnt.keyCode == 39 && F14State != 'FLP') { 
			rightKey = true;  
			
			if ((animationTimingA%5) == 0) { if (axisCounter == 12) axisCounter = 12; else axisCounter++; }
	
	
		} //end of if....
		
		
		else if (evnt.keyCode == 37 && F14State != 'FLP') { 
			leftKey = true;  
			
			if ((animationTimingA%5) == 0) { if (axisCounter == 5) axisCounter = 5; else axisCounter--; }
			
			
		} //end of if.... 

		//UP, DOWN CONTROLS
		if (evnt.keyCode == 38) upKey = true;
		else if (evnt.keyCode == 40) downKey = true;
  
		//FIRE CONTROLS
		if (evnt.keyCode == 32) { fireGuns(); } //<SPACE> Primary weapons, 9mm guns.
		if (evnt.keyCode == 90) fireMissiles(); //<Z> Secondary weapons. Guided missles.

		//FLIP CONTROL
		if (evnt.keyCode == 67) { barrelRoll(); animationTimingA = 0; objectCounter = 9; } //<C> Barrel roll maneuver.

		if (animationTimingA > 1200) { animationTimingA = 0; }
		else animationTimingA++;
		
		F14Animation('NRM');

	} //End of function.

	function flightControlsUp(evnt) {

		//If keys were previously pressed, reset the animation timer.
		if (rightKey == true && leftKey == true && upKey == true && downKey == true) animationTimingA = 0;
	
		//LEFT, RIGHT CONTROLS
		if (evnt.keyCode == 39)  rightKey = false; 
		else if (evnt.keyCode == 37) leftKey = false; 

		//UP, DOWN CONTROLS
		if (evnt.keyCode == 38) upKey = false; 
		else if (evnt.keyCode == 40) downKey = false;  	
		
		if (F14State != 'FLP' || F14State != 'DST') { F14Animation('NRM'); }


	} //End of function.

	//----------------------------------------------------------------

	function F14Animation(animationType) { 	

		//NORMAL FLIGHT :
		if (animationType == 'NRM') {

			if (rightKey) F14_x += F14Speed;
			else if (leftKey) F14_x -= F14Speed;

			if (upKey) F14_y -= F14Speed;
			else if (downKey) F14_y += F14Speed;

			if (F14_x <= 0) F14_x = 0;
			if ((F14_x + 50) >= width) F14_x = width - 50;

			if (F14_y <= 0) F14_y = 0;
			if ((F14_y + 50) >= height) F14_y = height - 50;
			

			if (animationTimingA > 1200) { animationTimingA = 0; }
			else animationTimingA++;			
		
			//Turn the F14 back to a neutral position.
			if ((animationTimingA%70) == 0) { if (axisCounter > 8) axisCounter--; else if (axisCounter < 8) axisCounter++; }
			
			if (gameState == 'INPLAY') { 
				ctx.drawImage(F14Sprites[axisCounter], F14_x*widthRatio, F14_y*heightRatio, 
								adjustSize(F14Sprites[axisCounter],'w'), adjustSize(F14Sprites[axisCounter],'h'));
				soundProcessor('REG');
			} //End of if....
			
		} //End of condition.

		//...........................................................................

		//EXPLOSION ANIMATION :		
		if (animationType == 'EXP') {

			if (animationTimingA > 1200) { animationTimingA = 0; }
			else animationTimingA++;				
			
			if (objectCounter != explosionSprites.length-1) objectCounter++;			
			
			ctx.drawImage(explosionSprites[objectCounter], F14_x*widthRatio, F14_y*heightRatio,
						adjustSize(explosionSprites[objectCounter],'w'), adjustSize(explosionSprites[objectCounter],'h'));

		} //End of condition.

		//................................................................................

		//BARREL ROLL ANIMATION

		if (animationType == 'FLP') {	

			if ((animationTimingA%10) == 0) { objectCounter++; }
		
			if (objectCounter == F14Sprites.length-1) objectCounter = 0;
			
			if (objectCounter == 8) { F14State = 'NRM'; }
			
			if (animationTimingA > 1200) { animationTimingA = 0; }
			else animationTimingA++;		
			
			ctx.drawImage(F14Sprites[objectCounter], F14_x*widthRatio, F14_y*heightRatio,
						adjustSize(F14Sprites[objectCounter],'w'), adjustSize(F14Sprites[objectCounter],'h'));			
			

		} //End of condition.		

	} //End of method F14Animation.

	//----------------------------------------------------------------	

	function fireGuns() { 	

		//Check to make sure the F14 isn't doing a barrel roll or it didn't blow up before firing the gun !!
		if (F14State != 'DST' && F14State != 'FLP') {

			soundProcessor('GUN');
			
    		//Push the weaponsObj object in the array and then call the "launch" method.
			weaponsArray.push(new weaponsObject());
			weaponsArray[weaponsArray.length-1].launch('F14B', gunStatus, F14_x, F14_y);			

		} //END OF IF....

	} //END OF fireGuns().

	function explodeF14() { soundProcessor('EXP'); F14State = 'DST'; objectCounter = 0; }

	function barrelRoll() { soundProcessor('BAR');  F14State = 'FLP'; objectCounter = 8; }

	function fireMissiles() { soundProcessor('MSL'); 

		if (F14State != 'DST' && F14State != 'FLP') {

			weaponsArray.push(new weaponsObject());
			weaponsArray[weaponsArray.length-1].launch('F14M', '', F14_x, F14_y);

		} //END OF IF....

	} //END OF fireMissiles().	

//---------------------------------------------------------------	

	function soundProcessor(typeOfSound) {

		//REGULAR FLIGHT	
		if (typeOfSound != 'EXP') {

			//PLAY JET SOUND TRACK. (approx. 10 min in length)
			if (gameState == 'INPLAY') jetFlightSound.play();	

		} //END OF IF BLOCK....

		//GUNS FIRING		  
		if (typeOfSound == 'GUN') {
		
			machineGunSoundPool[machineGunSoundCounter].play();
			
			if (machineGunSoundCounter == 6) { machineGunSoundCounter = 0; }
			else machineGunSoundCounter++;			

		} //END OF IF....

		//MISSILE FIRING
		if (typeOfSound == 'MSL') {
		
			if (missileSoundCounter == 9) { missileSoundCounter = 0; }
			else missileSoundCounter++;		
			
			missileSoundPool[missileSoundCounter].play();
			

		} //END OF IF....		

		//F14 EXPLODING
		if (typeOfSound == 'EXP') {

			explosionSound.play();

		} //END OF IF....

		//F14 BARREL ROLL
		if (typeOfSound == 'BAR') {
		
			flipSoundPool[flipSoundCounter].play();
		
			if (flipSoundCounter == 6) { flipSoundCounter = 0; }
			else flipSoundCounter++;	

		} //END OF IF....

	} //End of method soundProcessor.

	//-------------------------------------------------
	//GETTER AND SETTER ROUTINES :

	//F14 state :
	function getState() { return F14State; }
	function setState(state) { F14State = state; }

	//F14 gun state :
	function getGunStatus() { return gunStatus; }
	function setGunStatus(status) { gunStatus = status; }

	//F14 x, y location :
	function getX() { return F14_x; }
	function getY() { return F14_y; }
	
	//THESE FUNCTIONS ARE TO BE USED AT THE BEGINNING AND END OF LEVELS AND STAGES ONLY !!
	function setX(xSet) { F14_x = xSet; }
	function setY(ySet) { F14_y = ySet; }
	function setAxis(axisSet) { axisCounter = axisSet; }
	
} //End of f14Fighter object.