//DEFINE THE ENEMY CLASS
//---------------------------------------------------------------------------


function enemyFighter() {

	var xLoc = 0, yLoc = 0,					//X and Y location of the enemy.
		enemySpeed = 2,						//Speed of the enemy fighter.
		enemyType,							//Enemy fighter type.
		enemyState = 'NRM',					//Enemy state. NRM = Normal, DST = Destroyed, EXP = Exploding, FLP = Barrel roll
		armor = 0,							//Defence against guns only.  Missile hits results in immediate destruction.
		movementType,						//Movement type.  STA = stationary, NST = Non-stationary.
		enemyPointValue,					//Points from destroying enemies.
		seriesEnemyPointValue,				//Points from destroying a series of enemies.
		POWdrop,							//Type of POW drop.  (GUN - Gun upgrades, MIS - Missile upgrade,
											// DSA - Destroy all enemies on the screen, FLP - Additional flip.
											// FRI - 2 "friends" to fight alongside of F14.)
		enemyFighterImage,                  //Sprite of the enemy fighter.
		missileSoundCounter = 0,			//Stores enemy missile attributes.
		machineGunSoundCounter = 0,
		enemyChoice = 1,                    //Choice of enemy used in this attack.
		attackInstr = 'S',					//ONE LETTER ATTACK INSTRUCTION. Defaults to 'S' which starts the 
											//attack sequence.
		iterationEnd = 0,					//End of attack step.
		iterationCounter = 0,
		attackPattern = 0,						//JET ATTACK PATTERN.
		patternPlace = 0,					//Place in attack pattern.
		attackPatternChoice,				//chosen attack pattern.
		
		endAngle = 0,						//Chosen end angle.
		jetAngle = 0,                       //Current angle of the jet.
		rads = 0,							//Radians ( used in the move section of this object. Initialize to zero. )
		
		placeCounter = 0,					//Number of iterations for enemy move.
		arrayLimit = 0,                     //For barrel rolling the enemy.
		axisCounter = 8;
		
	//---------------------------------------------------
	
		//Method declaration :
		//this.animateEnemy = animateEnemy;

		this.soundProcessor = soundProcessor;	
		this.move = move;
		this.rotateAndRedrawEnemy = rotateAndRedrawEnemy;

		//GETTERS / SETTERS
		this.getState = getState;
		this.getArmor = getArmor;
		this.getPointValue = getPointValue;
		this.getSeriesPointValue = getSeriesPointValue;
		this.getPOWDropType = getPOWDropType;		
		this.getEnemy = getEnemy;


		this.setArmor = setArmor;
		this.setMovementType = setMovementType;
		this.setPointValue = setPointValue;
		this.setSeriesPointValue = setSeriesPointValue;
		this.setPOWdrop = setPOWdrop;
		this.setState = setState;
		this.setXY = setXY;
		this.setAttackPattern = setAttackPattern;
		this.setEnemyChoice = setEnemyChoice;

		//-------------------------------------------------------------------

	function programAttackPattern(chosenAttackPattern) {

		//Breakdown the instructions for the attack :
		attackPattern = fighterAttackPatterns(chosenAttackPattern, patternPlace);

		attackInstr = attackPattern.substring(0, 1);

		iterationEnd = parseInt(attackPattern.substring(1, 4));

	} //End of getAttackPattern.		

		//-------------------------------------------------------------------

	function move() { 	
	
		//Interpret the attack pattern instructions :
		
		//If the enemy went forward by x iterations, then get the next instruction :
		if (attackInstr == 'F' && iterationCounter >= iterationEnd) {
		
			patternPlace += 4;
			iterationCounter = 0;
			programAttackPattern(attackPatternChoice);
		
		} //End of if....

		//Keep enemy on this path until the end of the iteration :	
		else if (attackInstr == 'F' && iterationCounter < iterationEnd) { 
		
			iterationCounter++; 
			
			//THIS BLOCK NOT ONLY TURNS THE JET, BUT ANIMATES THE TURNS AS WELL....
			//IT UTILIZES THE ITERATION TIMINGS....
			
			if (iterationCounter%10 == 0) { 
				
				//BANK LEFT
				if (endAngle > jetAngle) { 
					if (axisCounter == 12) axisCounter = 12; else axisCounter++; 	
					jetAngle += 5; //TURN THE JET COUNTER CLOCKWISE
					rads = (Math.PI/180)*jetAngle;
				} //End of inner if....
				
				//BANK RIGHT
				if (endAngle < jetAngle) {
					if (axisCounter == 4) axisCounter = 4; else axisCounter--;
					jetAngle -= 5; //TURN THE JET CLOCKWISE
					rads = (Math.PI/180)*jetAngle;
				} //End of inner if....

				//STRAIGHT AHEAD
				if (endAngle == jetAngle) {
					if (axisCounter > 8) axisCounter--;
					if (axisCounter < 8) axisCounter++;
					

					
				} //End of inner if....
			
			} //End of outer if....
			
			//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
			
		} //End of else block....
		
		//............................................................................................
		
		else if (attackInstr == 'M') { //Fire missile then get next instruction :
		
			weaponsArray.push(new weaponsObject());
			weaponsArray[weaponsArray.length-1].launch('EMS','', xLoc, yLoc);		
			soundProcessor('MSL');
			
			patternPlace += 4;
			programAttackPattern(attackPatternChoice);
		
		} //End of if....
		
		//.............................................................................................
		
		//Turn or Bank to a specific angle.		
		else if (attackInstr == 'T') { //Turn the enemy by x degrees then get next instruction :

			//In this case, we use iterationEnd as a place to specify the degree amount :
			endAngle = iterationEnd;
			
			//jetAngle = iterationEnd;
			patternPlace += 4;
			programAttackPattern(attackPatternChoice);			
		
		} //End of if....
		
		//...................................................................................................
		
		//Initial attack angle. Also turns the enemy by x degrees.
		else if (attackInstr == 'I') { //Turn the enemy by x degrees then get next instruction :

			//In this case, we use iterationEnd as a place to specify the degree amount :
			rads = (Math.PI/180)*iterationEnd;
			patternPlace += 4;
			jetAngle = iterationEnd; //Make sure that jetAngle knows what iterationEnd is doing here....
			programAttackPattern(attackPatternChoice);			
			
		} //End of if....
		
		//.................................................................................................
		//Flip fighter. Also makes the enemy temporarily invulnerable to bullets or missiles.
		
		else if (attackInstr == 'R') { //Enemy fighter barrel roll :
			
			enemyState = 'FLP'; 
			
			//ITERATION THROUGH THE FLIP.  SOMETHING LIKE 40 WILL BE A COMPLETE ROLL.
			if (iterationCounter%4 == 0) { if (axisCounter == arrayLimit-1) axisCounter = 0; else axisCounter++; }
			iterationCounter++;
		
			if (iterationCounter >= iterationEnd) { patternPlace += 4; enemyState = 'NRM'; programAttackPattern(attackPatternChoice); }
		
		} //End of else....

		//.................................................................................................
		
		//Begin the attack sequence :
		//else if (attackInstr == 'S') { programAttackPattern(attackPatternChoice, patternPlace); }
		else if (attackInstr == 'S') { patternPlace += 4; endAngle = 0; jetAngle = 0; 
									   programAttackPattern(attackPatternChoice, patternPlace); }
		
		//End attack sequence if not already destroyed and remove the the array :
		else if (attackInstr == 'D') { enemyState = 'DST'; }
		
		xLoc += Math.cos(rads)*enemySpeed;
		yLoc += Math.sin(rads)*enemySpeed;
		
		//Retrieve whatever enemy is going to be used in the attack :
		getEnemy(enemyChoice);
		
		//Rotate and redraw the enemy :
		rotateAndRedrawEnemy(rads);		

	} //End of function.

		//-------------------------------------------------------------------

	

	function soundProcessor(typeOfSound) {

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


	} //End of method soundProcessor.

//--------------------------------------------------------------------------

	function rotateAndRedrawEnemy(radians) {

	// Will have to (very) temporarily rotate the entire canvas and then restore it.
		
		ctx.save();

		xLoc += Math.cos(radians)*enemySpeed;
		yLoc += Math.sin(radians)*enemySpeed;
		
		ctx.translate(xLoc, yLoc);
		ctx.rotate(radians);
		ctx.drawImage(enemyFighterImage, 0, 0);		
			
		ctx.restore();
	
	
	} //End of function....
	
//Retrieve enemy : Here are the available enemies :

	function getEnemy(enemy) {
	
		switch (enemy) {
		
			case 1 : { enemyFighterImage = enemyMig01Sprites[axisCounter]; arrayLimit = enemyMig01Sprites.length; break; }
			case 2 : { enemyFighterImage = enemyMigPowSprites[axisCounter]; arrayLimit = enemyMigPowSprites.length; break; }
		
		} //End of case block....
		
	} //End of function....
//--------------------------------------------------------------------------
//Getter and setter methods.

	//GETTER FUNCTIONS :
	function getState() { return enemyState; }
	function getArmor() { return armor; }
	function getPointValue() { return enemyPointValue; }
	function getSeriesPointValue() { return seriesEnemyPointValue; }
	function getPOWDropType() { return POWDrop; }
	
	//SETTER FUNCTIONS :
	function setXY(locationX, locationY) { xLoc = locationX; yLoc = locationY; }
	function setState(state) { enemyState = state; }
	function setArmor(armorValue) { armor = armorValue; }
	function setMovementType(moveType) { movementType = moveType; }
	function setPointValue(points) { enemyPointValue = points; }
	function setSeriesPointValue(seriesPV) { seriesEnemyPointValue = seriesPV; }
	function setPOWdrop(POWDropType) { POWDrop = powDropType; }
	function setAttackPattern(pattern) { attackPatternChoice = pattern; }
	function setEnemyChoice(selection) { enemyChoice = selection; }

} //End of enemyFighter.

