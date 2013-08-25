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

		soundPool = new Array(),	//SOUND POOL ARRAY(1)
        soundCounterA = 0,          //KEEPS TRACK OF ITEMS IN SOUND ARRAY.
		soundCounterB = 0,			//Machine guns.
		soundCounterC = 5,			//Missiles.
		soundCounterD = 10,			//Barrel Roll.
		
		F14ImageCounter = 0,		//Keeps track of the stages in the F14 animation.
		explosionImageCounter = 0,	//Keeps track of the stages in the explosion animation.
		
		animationTimingA = 0,		//TIMING BETWEEN FRAMES OF ANIMATION :
		
		numberMissiles = 0,			//Number of missiles fired at one time.
		numberBullets = 0,			//Number of bullets fired at one time.
		gunDamageValue,				//Amount of damage caused by guns.
	
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
	this.setupSounds = setupSounds;
	this.getState = getState;
	this.setState = setState;
	this.getGunStatus = getGunStatus;
	this.setGunStatus = setGunStatus;
	
	this.getX = getX;
	this.getY = getY;
	

	//..........................................................................	
	
	//ANIMATION ARRAYS :
	//NORMAL FLIGHT.  ALSO SHARED WITH THE BARREL ROLL ROUTINE.
		animationNRM = new Array(); 
		animationNRM[0] = new Image();
		animationNRM[0].src = 'spriteFolder/F14Sprite1A.png';
		
		animationNRM[1] = new Image();
		animationNRM[1].src = 'spriteFolder/F14Sprite2A.png';

		animationNRM[2] = new Image();
		animationNRM[2].src = 'spriteFolder/F14Sprite3A.png';

		animationNRM[3] = new Image();
		animationNRM[3].src = 'spriteFolder/F14Sprite4A.png';

		animationNRM[4] = new Image();
		animationNRM[4].src = 'spriteFolder/F14Sprite5A.png';

		animationNRM[5] = new Image();
		animationNRM[5].src = 'spriteFolder/F14Sprite6A.png';

		animationNRM[6] = new Image();
		animationNRM[6].src = 'spriteFolder/F14Sprite7A.png';

		animationNRM[7] = new Image();
		animationNRM[7].src = 'spriteFolder/F14Sprite8A.png';

		animationNRM[8] = new Image();
		animationNRM[8].src = 'spriteFolder/F14Sprite9A.png';
		
		animationNRM[9] = new Image(); //FIGHTER DESTROYED. NOTHING THERE !!
		animationNRM[9].src = '';

	//........................................................................	
	//EXPLOSION		
		animationEXP = new Array();
		
		
			animationEXP[0] = new Image();
			animationEXP[0].src = 'spriteFolder/explosion1.png'; 
			
			animationEXP[1] = new Image();
			animationEXP[1].src = 'spriteFolder/explosion2.png'; 
			
			
			animationEXP[2] = new Image();
			animationEXP[2].src = 'spriteFolder/explosion3.png'; 
		
			animationEXP[3] = new Image();
			animationEXP[3].src = 'spriteFolder/explosion4.png'; 
			
		animationEXP[4] = new Image();
		animationEXP[4].src = '';
		
		animationEXP[5] = new Image();
		animationEXP[5].src = '';
		
		
	
	//Method definitions :
	
	//Move the F14 based on user interaction.
	//--------------------------------------------------------------------------------------
	
	function flightControlsDown(evnt) {

		//LEFT, RIGHT CONTROLS
		if (evnt.keyCode == 39 && F14State != 'FLP') { rightKey = true;  F14ImageCounter = 1; }
		else if (evnt.keyCode == 37 && F14State != 'FLP') { leftKey = true;  F14ImageCounter = 8; } 
	
		//UP, DOWN CONTROLS
		if (evnt.keyCode == 38) upKey = true;
		else if (evnt.keyCode == 40) downKey = true;
  
		//FIRE CONTROLS
		if (evnt.keyCode == 32) { fireGuns(); } //<SPACE> Primary weapons, 9mm guns.
		if (evnt.keyCode == 90) fireMissiles(); //<Z> Secondary weapons. Guided missles.
		
		//FLIP CONTROL
		if (evnt.keyCode == 67) barrelRoll(); //<C> Barrel roll maneuver.
		
		F14Animation('NRM');
		
	} //End of function.
	
	function flightControlsUp(evnt) {
	
		//LEFT, RIGHT CONTROLS
		if (evnt.keyCode == 39) rightKey = false;
		else if (evnt.keyCode == 37) leftKey = false;
	
		//UP, DOWN CONTROLS
		if (evnt.keyCode == 38) upKey = false;
		else if (evnt.keyCode == 40) downKey = false; 	
		
		if (F14State != 'FLP') F14ImageCounter = 0;
	
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

		
			ctx.drawImage(animationNRM[F14ImageCounter], F14_x, F14_y);
		
			soundProcessor('REG');
		
		} //End of condition.
		
		//...........................................................................
		
		//EXPLOSION ANIMATION :		
		if (animationType == 'EXP') {
			
			F14ImageCounter = 9;
			ctx.drawImage(animationNRM[F14ImageCounter],F14_x, F14_y);
			
			if (explosionImageCounter < animationEXP.length-1) { 			
				animationTimingA++; 				
				if (animationTimingA > animationTimingMax) { explosionImageCounter++; animationTimingA = 0; }				
			}
						
			ctx.drawImage(animationEXP[explosionImageCounter], F14_x, F14_y);
			
		} //End of condition.
		
		//................................................................................
		
		//BARREL ROLL ANIMATION
		
		if (animationType == 'FLP') {		
			
			if (F14ImageCounter < animationNRM.length-1) {

				animationTimingA++;
				
				if (animationTimingA > animationTimingMax) { F14ImageCounter++; animationTimingA = 0; }

			} else { F14ImageCounter = 0; F14State = 'NRM';	}		

			ctx.drawImage(animationNRM[F14ImageCounter], F14_x, F14_y);			
		
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
	
	function explodeF14() { soundProcessor('EXP'); F14State = 'DST'; }
	
	function barrelRoll() { soundProcessor('BAR');  F14State = 'FLP'; }
	
	function fireMissiles() { soundProcessor('MSL'); 
	
		if (F14State != 'DST' && F14State != 'FLP') {
							
			weaponsArray.push(new weaponsObject());
			weaponsArray[weaponsArray.length-1].launch('F14M', '', F14_x, F14_y);
		
		} //END OF IF....
	
	} //END OF fireMissiles().	
	
	
//---------------------------------------------------------------	
	
	//Set up the array of sounds :
	
	function setupSounds() {
	
/*		(1)	SOUND POOL ARRAY IS ARRANGED AS FOLLOWS :

0	 	= Normal flight sound.
1-4		= Machine Gun fire
5-8 	= Missile fire
9		= F14 Explosion
10-14	= Barrel roll

*/

		//---------------------------------------------------------
		//SET UP THE FLIGHT SOUND :
	
			regularFlight = new Audio("soundFolder/F14regularFlight3.mp3");
			regularFlight.volume = .25;
			regularFlight.load();	
			soundPool[0] = regularFlight;
	
		//SET UP MACHINE GUN FIRE :
		for (var i = 1; i<5; i++) {
	
			machineGun = new Audio("soundFolder/F14FiringGuns.mp3");
			machineGun.volume = .7;
			machineGun.load();
			soundPool[i] = machineGun;
	
		} //END OF LOOP.

		//SET UP MISSILE FIRE :
		for (var i = 5; i<9; i++) {
	
			missile = new Audio("soundFolder/F14FiringMissiles.mp3");
			missile.volume = .7;
			missile.load();
			soundPool[i] = missile;
	
		} //END OF LOOP.
	
		//F14 EXPLOSION
		explosion = new Audio("soundFolder/f14destroyed.mp3");
		explosion.volume = .8;
		explosion.load();
		soundPool[9] = explosion;

		//F14 BARREL ROLL
		for (var i = 10; i<14; i++) {
			roll = new Audio("soundFolder/f14barrelroll.mp3");
			roll.volume = .8;
			roll.load();
			soundPool[i] = roll;
		} //END OF LOOP.
	
	} //End of function.
	
	//---------------------------------------------------------
	//Process the sounds :
	//REG = regular flight.
	//MIS = missile firing.
	//BAR = barrel roll.
	//GUN = machine gun firing.
	//EXP = explosion
	
	
	function soundProcessor(typeOfSound) {
	
		//REGULAR FLIGHT	
		if (typeOfSound != 'EXP') {
		
			//RESET JET SOUND TRACK.
			soundPool[0].play();	
			
		} //END OF IF BLOCK....
		
		//GUNS FIRING		  
		if (typeOfSound == 'GUN') {
			soundCounterB++;
			
			if (soundCounterB == 5) { soundCounterB = 1; }
			soundPool[soundCounterB].play();
		
		} //END OF IF....
		
		//MISSILE FIRING
		if (typeOfSound == 'MSL') {
			soundCounterC++;
			
			if (soundCounterC == 8) { soundCounterC = 5; }
			soundPool[soundCounterC].play();
			
		} //END OF IF....		
		
		//F14 EXPLODING
		if (typeOfSound == 'EXP') {
		
			soundPool[0].volume = 0;
		    soundPool[0].currentTime = 0;
			
			soundPool[9].play();
			
		} //END OF IF....
		
		//F14 BARREL ROLL
		if (typeOfSound == 'BAR') {
			soundCounterD++;
			
			if (soundCounterD == 13) { soundCounterD = 10; }
			soundPool[soundCounterD].play();
		
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
		
} //End of f14Fighter object.