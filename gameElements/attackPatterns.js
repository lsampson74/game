//These are the enemy fighter attack patterns :
//set up as case statements : case n : enemyPattern = 'pattern';
//Cxxx - keep going forward xxx times
//Txxx - turn by angle xxx
//G00x - fire guns with x being 1 (single) to 4(quads)
//D000 - Attack sequence done. 
//MMMM - fire missile.

function fighterAttackPatterns(chosenPattern, patternPlace) {

	var enemyPattern;
	
		switch(chosenPattern) {
			
			case 1 : enemyPattern = "S000I045T045F040T090F020M000F400"; break;
			case 2 : enemyPattern = "S000I045T045F040T090F320"; break;
			case 3 : enemyPattern = "S000I135T135F020T090F010M000F400"; break;
			case 4 : enemyPattern = "S000I135T135F040T090F300"; break; 
			case 5 : enemyPattern = "S000I315T315F020M000T270F300"; break;
			case 6 : enemyPattern = "S000I315T315F020T270F300"; break;
			case 7 : enemyPattern = "S000I225T225F020M000T270F300"; break;
			case 8 : enemyPattern = "S000I225T225F020T270F300"; break;
			case 9 : enemyPattern = "S000I090T090F040M000T135F300"; break;
			case 10 : enemyPattern = "S000I090T090F040T135F300"; break;
			case 11 : enemyPattern = "S000I090T090F040M000T045F300"; break;
			case 12 : enemyPattern = "S000I090T090F040T045F300"; break;
			case 13 : enemyPattern = "S000I180T180F040M000T090F300"; break;
			case 14 : enemyPattern = "S000I180T180F040T090F300"; break;
			
			case 15 : enemyPattern = "S000I090T090F040M000F300"; break;
			case 16 : enemyPattern = "S000I090T090F400"; break;
			case 17 : enemyPattern = "S000I270T270F040M000F300"; break;
			case 18 : enemyPattern = "S000I270T270F400"; break;
			case 20 : enemyPattern = "S000I045T045F050M000F300"; break;
			case 21 : enemyPattern = "S000I045T045F400"; break;
			case 22 : enemyPattern = "S000I135T135F050M000F300"; break;
			case 23 : enemyPattern = "S000I135T135F400"; break;
			case 24 : enemyPattern = "S000I225T225F050M000F300"; break;
			case 25 : enemyPattern = "S000I225T225F400"; break;
			case 26 : enemyPattern = "S000I315T315F040M000F300"; break;
			case 27 : enemyPattern = "S000I315T315F400"; break;
			case 28 : enemyPattern = "S000I090T090F050M000T045F200"; break;
			
			case 29 : enemyPattern = "S000I090T090F050M000T135F200"; break;
			case 30 : enemyPattern = "S000I090T090F050T045F200"; break;
			case 31 : enemyPattern = "S000I090T090F050T135F200"; break;
			case 32 : enemyPattern = "S000I090T090F050M000F200"; break;
			case 32 : enemyPattern = "S000I090T090F400"; break;
			
			
		} //End of switch block.

	if ((patternPlace+4) > enemyPattern.length) return "D000";
	else return enemyPattern.substring(patternPlace, patternPlace+4);

} //End of function

//....................................................................................

function getStage(stageNum) {

	stageStringArray[0] = "E01;A01;L40L-100;T500&E01;A03;L800L-100;T1";

	stageAttacks(stageStringArray[stageNum]);
	
} //End of function.

function stageAttacks(stageString) { 

	var e = 0, //Enemy number
	a = 0, //Attack number
	xl = 0, yl = 0, //Enemy location
	t = 0; //Timing between attacks ( Sortie )
	
	attackSetString = stageString.split("&");	
	
	if (!stageDone) {	
	
		if (sortie > attackSetString.length-1) stageDone = true; 
		
		else {

			commandSet = attackSetString[sortie].split(";");
			
			//GET THE TIMING BETWEEN ATTACKS :	
			splitCommand = commandSet[3].split("T");	
			t = parseInt(splitCommand[1]);
			
			//TIME THE ATTACKS BASED ON t.
			if (mainGameTimer%t == 0) { 
			
				//GET THE ENEMY TYPE PARAMETER
				splitCommand = commandSet[0].split("E");
				e = parseInt(splitCommand[1]);
				
				
				//GET THE ENEMY ATTACK METHOD
				splitCommand = commandSet[1].split("A");
				a = parseInt(splitCommand[1]);
				
				//GET THE ENEMY'S FIRST LOCATION
				splitCommand = commandSet[2].split("L");
				xl = parseInt(splitCommand[1]); yl = parseInt(splitCommand[2]);
				
				//GENERATE ENEMY :
				enemyArray.push(new enemyFighter());
				enemyArray[enemyArray.length-1].setEnemyChoice(e);
				enemyArray[enemyArray.length-1].setAttackPattern(a);
				enemyArray[enemyArray.length-1].setXY(xl, yl);
			
				sortie++; 
				
			} //END OF IF BLOCK....
		
		} //END OF STAGE RUNNER....
		
	} //End of while....	

	
} //End of function stageAttacks....



