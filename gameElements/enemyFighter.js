//DEFINE THE ENEMY CLASS
//---------------------------------------------------------------------------


function enemyFighter() {

	var xLoc = 0, yLoc = 0,					//X and Y location of the enemy.
		enemySpeed = 5,						//Speed of the enemy fighter.
		enemyType,							//Enemy fighter type.
		enemyState = 'NRM',					//Enemy state. NRM = Normal, DST = Destroyed, EXP = Exploding
		armor = 0,							//Defence against guns only.  Missile hits results in immediate destruction.
		movementType,						//Movement type.  STA = stationary, NST = Non-stationary.
		enemyPointValue,					//Points from destroying enemies.
		seriesEnemyPointValue,				//Points from destroying a series of enemies.
		POWdrop,							//Type of POW drop.  (GUN - Gun upgrades, MIS - Missile upgrade,
											// DSA - Destroy all enemies on the screen, FLP - Additional flip.
											// FRI - 2 "friends" to fight alongside of F14.)
		soundPool = new Array(),			//SOUND POOL ARRAY(1)
		soundCounterB = 0,					//Machine guns.
		soundCounterC = 8,					//Missiles.
		missile,
		machineGuns,
		explosion,
		attackInstr = 'N',					//ONE LETTER ATTACK INSTRUCTION.
		iterationEnd = 0,					//End of attack step.
		attackPattern,						//JET ATTACK PATTERN.
		patternPlace = 0,					//Place in attack pattern.
		attackPatternChoice,				//chosen attack pattern.
		rads,								//Radians ( used in the move section of this object.
		placeCounter = 0;					//Number of iterations for enemy move.

	var enemyFighterImage = new Image();
	enemyFighterImage.src = 'spriteFolder/testEnemy.png';

		
		//Method declaration :
		//this.animateEnemy = animateEnemy;
		
		this.setupSounds = setupSounds;
		this.soundProcessor = soundProcessor;	
		this.move = move;
		
		//GETTERS / SETTERS
		this.getState = getState;
		this.getArmor = getArmor;
		this.getPointValue = getPointValue;
		this.getSeriesPointValue = getSeriesPointValue;
		this.getPOWDropType = getPOWDropType;
				
		
		this.setArmor = setArmor;
		this.setMovementType = setMovementType;
		this.setPointValue = setPointValue;
		this.setSeriesPointValue = setSeriesPointValue;
		this.setPOWdrop = setPOWdrop;
		this.setState = setState;
		this.setXY = setXY;
		this.setAttackPattern = setAttackPattern;
		
		
		
		//-------------------------------------------------------------------
		
	function programAttackPattern(chosenAttackPattern) {
	
		//Breakdown the instructions for the attack :
		attackPattern = fighterAttackPatterns(chosenAttackPattern, patternPlace);
		
		attackInstr = attackPattern.substring(0, 1);
		
		iterationEnd = parseInt(attackPattern.substring(1, 4));
		
		console.log("ATTACK INSTR = "+attackInstr + " iterationEnd = "+iterationEnd);

					
	} //End of getAttackPattern.		

		//-------------------------------------------------------------------
		
	function move() { 	
		var tempX, tempY;
		
		xLoc += enemySpeed;
		yLoc += enemySpeed;
		
		tempX = xLoc; tempY = yLoc;
		
		console.log("xLoc = " + xLoc + " yLoc = " + yLoc);		
		
		//MOVE ENEMIES ACCORDINGLY.
		
		rads = (Math.PI/180)*45;
			
		xLoc = Math.round(Math.cos(rads)*tempX);
		yLoc = Math.round(Math.sin(rads)*tempY);		
	
		ctx.drawImage(enemyFighterImage, xLoc, yLoc);		
	
	} //End of function.
	
		//-------------------------------------------------------------------
		
	function setupSounds() {
	
//		(1)	SOUND POOL ARRAY IS ARRANGED AS FOLLOWS :

		//SET UP MACHINE GUN FIRE :
		for (var i = 0; i<6; i++) {
	
			machineGun = new Audio("soundFolder/F14FiringGuns.mp3");
			machineGun.volume = .7;
			machineGun.load();
			soundPool[i] = machineGun;
	
		} //END OF LOOP.

		//SET UP MISSILE FIRE :
		for (var i = 8; i<15; i++) {
	
			missile = new Audio("soundFolder/F14FiringMissiles.mp3");
			missile.volume = .7;
			missile.load();
			soundPool[i] = missile;
	
		} //END OF LOOP.
		
		//SET UP EXPLOSION SOUND :
		
		explosion = new Audio("");
		explosion.volume = .7;
		explosion.load();
		soundPool[16] = explosion;
	
	} //End of function.
	
	//---------------------------------------------------------
	//Process the sounds :
	//MIS = missile firing.
	//GUN = machine gun firing.
	//EXP = explosion	
	
	function soundProcessor(typeOfSound) {
	
		//GUNS FIRING		  
		if (typeOfSound == 'GUN') {
			soundCounterB++;
			
			if (soundCounterB == 7) { soundCounterB = 0; }
			soundPool[soundCounterB].play();
		
		} //END OF IF....
		
		//MISSILE FIRING
		if (typeOfSound == 'MSL') {
			soundCounterC++;
			
			if (soundCounterC == 15) { soundCounterC = 8; }
			soundPool[soundCounterC].play();
			
		} //END OF IF....		
		
		//F14 EXPLODING
		if (typeOfSound == 'EXP') {
		
			soundPool[16].volume = 0;
		    soundPool[16].currentTime = 0;
			
			soundPool[16].play();
			
		} //END OF IF....
		
	} //End of method soundProcessor.
	

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
		
} //End of enemyFighter.


