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

		bulletImage = new Image(),
		missileImage = new Image(),
		missileImage2 = new Image(),

		missileSpeed = 5;	//Speed of the missile.

	//Function declaration :	
	this.move = move;		
	this.launch = launch;
	this.getStatus = getStatus;

	//Match Images
	bulletImage.src = 'spriteFolder/bullet.png';
	missileImage.src = 'spriteFolder/F14missile.png';

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
				ctx.drawImage(bulletImage, loc_x+F14LeftBulletCalib, loc_y);			
				ctx.drawImage(bulletImage, loc_x+F14RightBulletCalib, loc_y); }	//END OF CONDITION BLOCK

			else if (numberOfGuns == 'DOB') {
				ctx.drawImage(bulletImage, loc_x+F14LeftBulletCalib+7, loc_y);			
				ctx.drawImage(bulletImage, loc_x+F14RightBulletCalib, loc_y);
				ctx.drawImage(bulletImage, loc_x+F14LeftBulletCalib, loc_y);			
				ctx.drawImage(bulletImage, loc_x+F14RightBulletCalib-7, loc_y);

			}	//END OF CONDITION BLOCK.

			else if (numberOfGuns == 'TRI') {
				ctx.drawImage(bulletImage, loc_x+F14LeftBulletCalib-7, loc_y);			
				ctx.drawImage(bulletImage, loc_x+F14LeftBulletCalib-14, loc_y);			
				ctx.drawImage(bulletImage, loc_x+F14LeftBulletCalib-21, loc_y);	

				ctx.drawImage(bulletImage, loc_x+F14RightBulletCalib+21, loc_y);
				ctx.drawImage(bulletImage, loc_x+F14RightBulletCalib+14, loc_y);
				ctx.drawImage(bulletImage, loc_x+F14RightBulletCalib+7, loc_y);

			} //END OF CONDITION BLOCK.

			else if (numberOfGuns == 'QUA') {
				ctx.drawImage(bulletImage, loc_x+F14LeftBulletCalib-7, loc_y);			
				ctx.drawImage(bulletImage, loc_x+F14LeftBulletCalib-14, loc_y);			
				ctx.drawImage(bulletImage, loc_x+F14LeftBulletCalib-21, loc_y);	
				ctx.drawImage(bulletImage, loc_x+F14LeftBulletCalib+7, loc_y);	

				ctx.drawImage(bulletImage, loc_x+F14RightBulletCalib+21, loc_y);
				ctx.drawImage(bulletImage, loc_x+F14RightBulletCalib+14, loc_y);
				ctx.drawImage(bulletImage, loc_x+F14RightBulletCalib+7, loc_y);
				ctx.drawImage(bulletImage, loc_x+F14RightBulletCalib-7, loc_y);

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

				   if (differenceX > 0) loc_x -= missileSpeed; 
				   else loc_x += missileSpeed;

				   if (differenceY > 0) loc_y -= missileSpeed;
				   else loc_y += missileSpeed;

			} //END OF ELSE block.

			if (missileFiringSide == 'L') { ctx.drawImage(missileImage, loc_x+F14LeftBulletCalib, loc_y); }

			else if (missileFiringSide == 'R') { ctx.drawImage(missileImage, loc_x+F14RightBulletCalib, loc_y); }


		} //End of if block.

	} //end of move.

//.........................................................................

	function getStatus() { return status; }

} //End of object.