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
			case 28 : enemyPattern = "S000I001T001F050M000T090F200"; break;
			
			case 29 : enemyPattern = "S000I001T001F050T090F200"; break;
			case 30 : enemyPattern = "S000I270T270F050M000T225F200"; break;
			case 31 : enemyPattern = "S000I270T270F050T225F200"; break;
			case 32 : enemyPattern = "S000I001T001F050M000T270F200"; break;
			case 33 : enemyPattern = "S000I001T001F050T270F200"; break;
			case 34 : enemyPattern = "S000I180T180F050M000T270F200"; break;
			case 35 : enemyPattern = "S000I180T180F050T270F200"; break;
			case 36 : enemyPattern = "S000I270T270F050M000T315F200"; break;
			case 37 : enemyPattern = "S000I270T270F050T315F200"; break;
			case 38 : enemyPattern = "S000I090T090F040M000T001F200"; break;
			case 39 : enemyPattern = "S000I090T090F040T001F200"; break;
			case 40 : enemyPattern = "S000I090T090F040M000T180F200"; break;
			case 41 : enemyPattern = "S000I090T090F040T180F200"; break;
			case 42 : enemyPattern = "S000I180T180F040M000F200"; break;
			case 43 : enemyPattern = "S000I180T180F300"; break;
			case 44 : enemyPattern = "S000I001T001F040M000F200"; break;
			case 45 : enemyPattern = "S000I001T001F300"; break;
			
			//POW PATTERNS :
			case 46 : enemyPattern = "S000I045T045F040T090F200S000I270T270F050T315F200S000I135T135F300S000I315T315F400"; break;
			case 47 : enemyPattern = "S000I135T135F040T090F200S000I270T270F050T225F200S000I045T045F300S000I225T225F400"; break;
			case 48 : enemyPattern = "S000I090T090F200S000I270T270F200S000I090T090F300S000I270T270F300"; break;
			
		} //End of switch block.

	if ((patternPlace+4) > enemyPattern.length) return "D000";
	else return enemyPattern.substring(patternPlace, patternPlace+4);

} //End of function

//....................................................................................

function getStage(stageNum) {

	//Stage 1 Attack patterns :
	stageStringArray[0] = "E01;A01;L40L-100;T500& E01;A03;L800L-100;T750& E01;A09;L200L-100;T1200& E01;A09;L700L-100;T1400&"+
						  "E01;A09;L250L-100;T1600& E01;A09;L500L-100;T1800& E01;A15;L200L-100;T2400& E01;A16;L250L-100;T2500&"+
						  "E01;A16;L700L-100;T3000& E01;A15;L400L-100;T3200& E01;A15;L700L-100;T3800& E01;A16;L500L-100;T4000&"+
						  "E01;A15;L450L-100;T4200& E01;A15;L550L-100;T4800& E01;A11;L400L-100;T5700& E01;A12;L470L-100;T5710&"+
						  "E01;A11;L540L-100;T5720& E01;A12;L610L-100;T5730& E01;A13;L820L70;T6400& E01;A13;L820L140;T6410&"+
						  
						  "E01;A14;L820L210;T6420& E01;A14;L820L280;T6430& E01;A24;L820L640;T7200& E01;A27;L-20L440;T7300&" +
						  "E01;A24;L820L570;T7400& E01;A27;L-20L400;T7800& E01;A7;L700L640;T8400& E01;A6;L80L640;T8800&"+
						  "E01;A20;L10L-100;T10000& E01;A22;L700L-100;T10200& E01;A42;L820L100;T10600& E01;A44;L-20L400;T10800&"+
						  "E01;A44;L-20L250;T11000& E01;A44;L-20L500;T11200& E01;A34;L820L500;T11400& E01;A32;L-20L200;T12000&"+
						  "E01;A37;L100L640;T12800& E01;A30;L500L640;T13200& E01;A31;L200L640;T14000& E01;A36;L450L640;T15000&"+
						  
						  "E01;A09;L280L-100;T16000& E01;A09;L380L-100;T16005& E01;A16;L480L-100;T16010& E01;A12;L580L-100;T16015&"+
						  "E01;A11;L680L-100;T16020& E02;A46;L80L-100;T18000& E02;A46;L240L-100;T18040& E02;A48;L400L-100;T18060&"+
						  "E02;A47;L560L-100;T18080& E02;A47;L700L-100;T18100& E01;A20;L40L-100;T20800& E01;A22;L700L-100;T20850";
						  
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

				console.log("sortie "+sortie);
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



