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
		
			case 1 : { enemyPattern = "T090F200T045MMMM"; }
		
		} //End of switch block.
		
	if ((patternPlace+4) >= enemyPattern.length) return "D000";
	else return enemyPattern.substring(patternPlace, patternPlace+4);

} //End of function