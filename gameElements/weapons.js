//=======================================================================================================
//=======================================================================================================

function weaponsObject() {

	var type,		  //F14M = F14 missile, F14B = F14 bullet, EMS = Enemy missiles, EBU = Enemy bullet.

		loc_x = 0, loc_y = 0, //Ordinance location.		
		target_x = -1, target_y = -1, //THESE VARIABLES ARE FOR THE GUIDED MISSILES SHOT FROM THE F14 OR ENEMIES.

		numberOfGuns;	//Singles, Doubles, Triples, Quads.

	var status = 'AVAIL',	//Status of fired weapon.  AVAIL = Available, INUSE = Weapon fired.
		bulletSpeed = 10,	//Speed of the bullet.
		missileSpeed = 5,   //Speed of the missile.
		
		enemyMissileStatus = 'ACTIVAT', // ACTIVAT = activated, SHOTOFF = shot off
		
/*		bulletImage = new Image(),
		missileImage = new Image(),
		missileImage2 = new Image(),*/
		F14MissileSpeed = 5, //F14 Missile speed.
		
		//FOR ENEMY WEAPONS ONLY
		radians = 0, diffX = 0, diffY = 0,
		
		enemyMissileSpeed = 4;	//Speed of the missile.

	//Function declaration :	
	this.move = move;		
	this.launch = launch;
	this.getStatus = getStatus;


	//Launches the weapon based on type and location :
	function launch(weaponType, numGuns, x, y) { 
		type = weaponType; loc_x = x; loc_y = y; numberOfGuns = numGuns;
		target_x = x; //NO TARGET UNTIL ENEMIES ARE SITED WHERE AS A "TARGET LOCK" CAN BE MADE.
		status = 'INUSE'; }

	//Function definition
	function move() {

		//FIRE GUNS :		
		if (type == 'F14B') { 

			if (loc_y <= 5) { status = 'AVAIL'; type = ''; }
			else loc_y -= bulletSpeed;	

			if (numberOfGuns == 'SIN') {			
				ctx.drawImage(F14BulletImage, loc_x+F14LeftBulletCalib, loc_y);			
				ctx.drawImage(F14BulletImage, loc_x+F14RightBulletCalib, loc_y); }	//END OF CONDITION BLOCK

			else if (numberOfGuns == 'DOB') {
				ctx.drawImage(F14BulletImage, loc_x+F14LeftBulletCalib+7, loc_y);			
				ctx.drawImage(F14BulletImage, loc_x+F14RightBulletCalib, loc_y);
				ctx.drawImage(F14BulletImage, loc_x+F14LeftBulletCalib, loc_y);			
				ctx.drawImage(F14BulletImage, loc_x+F14RightBulletCalib-7, loc_y);

			}	//END OF CONDITION BLOCK.

			else if (numberOfGuns == 'TRI') {
				ctx.drawImage(F14BulletImage, loc_x+F14LeftBulletCalib-7, loc_y);			
				ctx.drawImage(F14BulletImage, loc_x+F14LeftBulletCalib-14, loc_y);			
				ctx.drawImage(F14BulletImage, loc_x+F14LeftBulletCalib-21, loc_y);	

				ctx.drawImage(F14BulletImage, loc_x+F14RightBulletCalib+21, loc_y);
				ctx.drawImage(F14BulletImage, loc_x+F14RightBulletCalib+14, loc_y);
				ctx.drawImage(F14BulletImage, loc_x+F14RightBulletCalib+7, loc_y);

			} //END OF CONDITION BLOCK.

			else if (numberOfGuns == 'QUA') {
				ctx.drawImage(F14BulletImage, loc_x+F14LeftBulletCalib-7, loc_y);			
				ctx.drawImage(F14BulletImage, loc_x+F14LeftBulletCalib-14, loc_y);			
				ctx.drawImage(F14BulletImage, loc_x+F14LeftBulletCalib-21, loc_y);	
				ctx.drawImage(F14BulletImage, loc_x+F14LeftBulletCalib+7, loc_y);	

				ctx.drawImage(F14BulletImage, loc_x+F14RightBulletCalib+21, loc_y);
				ctx.drawImage(F14BulletImage, loc_x+F14RightBulletCalib+14, loc_y);
				ctx.drawImage(F14BulletImage, loc_x+F14RightBulletCalib+7, loc_y);
				ctx.drawImage(F14BulletImage, loc_x+F14RightBulletCalib-7, loc_y);

			} //END OF CONDITION BLOCK.


		} //End of if block.


//......................................................................	

		//FIRE GUIDED MISSILE
		if (type == 'F14M') {

			var differenceX = 0, differenceY = 0; //Difference in relation to x,y position of the chosen target :


			if (loc_y > height || loc_y < 0 || loc_x > width || loc_x < 0) { if (missileFiringSide == 'L') missileFiringSide = 'R';
																			 else missileFiringSide = 'L';
																			 status = 'AVAIL'; type = ''; }

			else if (loc_x <= (target_x+20) && loc_x > (target_x-20) && 
					 loc_y <= (target_y+20) && loc_y > (target_y-20)) { if (missileFiringSide == 'L') missileFiringSide = 'R';
																		else missileFiringSide = 'L';
																		status = 'AVAIL'; type = ''; } 

			else { differenceX = (loc_x-target_x); differenceY = (loc_y-target_y);			      

				   if (differenceX > 0) loc_x -= F14MissileSpeed; 
				   else loc_x += F14MissileSpeed;

				   if (differenceY > 0) loc_y -= F14MissileSpeed;
				   else loc_y += F14MissileSpeed;

			} //END OF ELSE block.

			if (missileFiringSide == 'L') { ctx.drawImage(F14MissileImage, loc_x+F14LeftBulletCalib, loc_y); }

			else if (missileFiringSide == 'R') { ctx.drawImage(F14MissileImage, loc_x+F14RightBulletCalib, loc_y); }


		} //End of if block.
		
//.........................................................................................................

		if (type == 'EMS') {

			//Rotate the missile to aim at where it has to go....
			// Will have to (very) temporarily rotate the entire canvas and then restore it.
			//Calculate the angle at which the F14 is and aim the missile in that direction :
			//Calculation based on angle = tan-1((diff Y)/(diff X)).  We only do this once :
		
			if (enemyMissileStatus == 'ACTIVAT') {
			
				enemyMissileStatus = 'SHOTOFF';
				diffX = F14.getX() - loc_x;
				diffY = F14.getY() - loc_y;
				
				radians = Math.atan((diffY/diffX));
				
				target_x = F14.getX();
				target_y = F14.getY();				
				
				if (diffX < 0) 	radians -= (3.14);
				
			} //End of if.			
		
			ctx.save();
			
			loc_x += Math.cos(radians)*enemyMissileSpeed;
			loc_y += Math.sin(radians)*enemyMissileSpeed;
		
			ctx.translate(loc_x, loc_y);
			ctx.rotate(radians);
			ctx.drawImage(enemyMissileImage, 0, 0);		
			
			ctx.restore();
			
			if (loc_y > height || loc_y < 0 || loc_x > width || loc_x < 0) { status = 'AVAIL'; }
			

		} //End of if.	
			
	} //end of move.

//.........................................................................

	function getStatus() { return status; }

} //End of object.