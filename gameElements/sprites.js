//THIS IS THE SPRITE COLLECTION AREA :
//CALLED ONLY ONCE IN THIS PROGRAM :

//EXPLOSION AND WEAPONS SPRITES :
var explosionImageLocs = ["spriteFolder/explosion/explosion1.png","spriteFolder/explosion/explosion2.png",
					  "spriteFolder/explosion/explosion3.png","spriteFolder/explosion/explosion4.png",""],
					  
F14BulletImageLocs = "spriteFolder/weapons/bullet.png",

enemyBulletImageLocs = "spriteFolder/weapons/enemyBullet.png",

F14MissileImageLocs = "spriteFolder/weapons/F14missile.png",

enemyMissileImageLocs = "spriteFolder/weapons/enemyMissile.png",


//F14 SPRITE FILES :

 F14ImageLocs = ["spriteFolder/F14Sprites/F14SpritePN8.png","spriteFolder/F14Sprites/F14SpritePN7.png",
				  "spriteFolder/F14Sprites/F14SpritePN6.png","spriteFolder/F14Sprites/F14SpritePN5.png",
				  "spriteFolder/F14Sprites/F14SpritePN4.png","spriteFolder/F14Sprites/F14SpritePN3.png",
				  "spriteFolder/F14Sprites/F14SpritePN2.png","spriteFolder/F14Sprites/F14SpritePN1.png",
				  "spriteFolder/F14Sprites/F14SpriteP00.png","spriteFolder/F14Sprites/F14SpritePP1.png",
				  "spriteFolder/F14Sprites/F14SpritePP2.png","spriteFolder/F14Sprites/F14SpritePP3.png",
				  "spriteFolder/F14Sprites/F14SpritePP4.png","spriteFolder/F14Sprites/F14SpritePP5.png",
				  "spriteFolder/F14Sprites/F14SpritePP6.png","spriteFolder/F14Sprites/F14SpritePP7.png",
				  "spriteFolder/F14Sprites/F14SpriteU00.png"], 
				  
//ENEMY 01 SPRITE FILES :

 enemyImageLocs01 = ["spriteFolder/enemySprites/mig01/EnemyMigSpriteN08.png","spriteFolder/enemySprites/mig01/EnemyMigSpriteN07.png",
					  "spriteFolder/enemySprites/mig01/EnemyMigSpriteN06.png","spriteFolder/enemySprites/mig01/EnemyMigSpriteN05.png",
					  "spriteFolder/enemySprites/mig01/EnemyMigSpriteN04.png","spriteFolder/enemySprites/mig01/EnemyMigSpriteN03.png",
					  "spriteFolder/enemySprites/mig01/EnemyMigSpriteN02.png","spriteFolder/enemySprites/mig01/EnemyMigSpriteN01.png",
					  "spriteFolder/enemySprites/mig01/EnemyMigSprite00.png","spriteFolder/enemySprites/mig01/EnemyMigSpriteP01.png",
					  "spriteFolder/enemySprites/mig01/EnemyMigSpriteP02.png","spriteFolder/enemySprites/mig01/EnemyMigSpriteP03.png",
					  "spriteFolder/enemySprites/mig01/EnemyMigSpriteP04.png","spriteFolder/enemySprites/mig01/EnemyMigSpriteP05.png",
					  "spriteFolder/enemySprites/mig01/EnemyMigSpriteP06.png","spriteFolder/enemySprites/mig01/EnemyMigSpriteP07.png",
					  "spriteFolder/enemySprites/mig01/EnemyMigSpriteP08.png","spriteFolder/enemySprites/mig01/EnemyMigSpriteP09.png",
					  "spriteFolder/enemySprites/mig01/EnemyMigSpriteU00.png"],
					  
					  
					  
//ENEMY 02 SPRITE FILES :

 enemyImageLocs02 = ["spriteFolder/enemySprites/mig02powerUp/enemyMigBlue01.png","spriteFolder/enemySprites/mig02powerUp/enemyMigBlue02.png",
					  "spriteFolder/enemySprites/mig02powerUp/enemyMigBlue03.png","spriteFolder/enemySprites/mig02powerUp/enemyMigBlue04.png",
					  "spriteFolder/enemySprites/mig02powerUp/enemyMigBlue05.png","spriteFolder/enemySprites/mig02powerUp/enemyMigBlue06.png",
					  "spriteFolder/enemySprites/mig02powerUp/enemyMigBlue07.png","spriteFolder/enemySprites/mig02powerUp/enemyMigBlue08.png",
					  "spriteFolder/enemySprites/mig02powerUp/enemyMigBlue09.png","spriteFolder/enemySprites/mig02powerUp/enemyMigBlue10.png",
					  "spriteFolder/enemySprites/mig02powerUp/enemyMigBlue11.png","spriteFolder/enemySprites/mig02powerUp/enemyMigBlue12.png",
					  "spriteFolder/enemySprites/mig02powerUp/enemyMigBlue13.png","spriteFolder/enemySprites/mig02powerUp/enemyMigBlue14.png",
					  "spriteFolder/enemySprites/mig02powerUp/enemyMigBlue15.png","spriteFolder/enemySprites/mig02powerUp/enemyMigBlue16.png",
					  "spriteFolder/enemySprites/mig02powerUp/enemyMigBlue17.png","spriteFolder/enemySprites/mig02powerUp/enemyMigBlue18.png",
					  "spriteFolder/enemySprites/mig02powerUp/enemyMigBlue19.png"],
					  
//ENEMY 03 SPRITE FILES :

 enemyImageLocs03 = ["spriteFolder/enemySprites/mig03/enemyMigGreen00.png","spriteFolder/enemySprites/mig03/enemyMigGreen01.png",
					  "spriteFolder/enemySprites/mig03/enemyMigGreen02.png","spriteFolder/enemySprites/mig03/enemyMigGreen03.png",
					  "spriteFolder/enemySprites/mig03/enemyMigGreen04.png","spriteFolder/enemySprites/mig03/enemyMigGreen05.png",
					  "spriteFolder/enemySprites/mig03/enemyMigGreen06.png","spriteFolder/enemySprites/mig03/enemyMigGreen07.png",
					  "spriteFolder/enemySprites/mig03/enemyMigGreen08.png","spriteFolder/enemySprites/mig03/enemyMigGreen09.png",
					  "spriteFolder/enemySprites/mig03/enemyMigGreen10.png","spriteFolder/enemySprites/mig03/enemyMigGreen11.png",
					  "spriteFolder/enemySprites/mig03/enemyMigGreen12.png","spriteFolder/enemySprites/mig03/enemyMigGreen13.png",
					  "spriteFolder/enemySprites/mig03/enemyMigGreen14.png","spriteFolder/enemySprites/mig03/enemyMigGreen15.png",
					  "spriteFolder/enemySprites/mig03/enemyMigGreen16.png","spriteFolder/enemySprites/mig03/enemyMigGreen17.png",
					  "spriteFolder/enemySprites/mig03/enemyMigGreen18.png","spriteFolder/enemySprites/mig03/enemyMigGreen17.png"],
					  
//ENEMY 04 SPRITE FILES :
					  
 enemyImageLocs04 = ["spriteFolder/enemySprites/mig04/enemyMigLimeGreen01.png","spriteFolder/enemySprites/mig04/enemyMigLimeGreen02.png",
					  "spriteFolder/enemySprites/mig04/enemyMigLimeGreen03.png","spriteFolder/enemySprites/mig04/enemyMigLimeGreen04.png",
					  "spriteFolder/enemySprites/mig04/enemyMigLimeGreen05.png","spriteFolder/enemySprites/mig04/enemyMigLimeGreen06.png",
					  "spriteFolder/enemySprites/mig04/enemyMigLimeGreen07.png","spriteFolder/enemySprites/mig04/enemyMigLimeGreen08.png",
					  "spriteFolder/enemySprites/mig04/enemyMigLimeGreen09.png","spriteFolder/enemySprites/mig04/enemyMigLimeGreen10.png",
					  "spriteFolder/enemySprites/mig04/enemyMigLimeGreen11.png","spriteFolder/enemySprites/mig04/enemyMigLimeGreen12.png",
					  "spriteFolder/enemySprites/mig04/enemyMigLimeGreen13.png","spriteFolder/enemySprites/mig04/enemyMigLimeGreen14.png",
					  "spriteFolder/enemySprites/mig04/enemyMigLimeGreen15.png","spriteFolder/enemySprites/mig04/enemyMigLimeGreen16.png",
					  "spriteFolder/enemySprites/mig04/enemyMigLimeGreen17.png","spriteFolder/enemySprites/mig04/enemyMigLimeGreen18.png",
					  "spriteFolder/enemySprites/mig04/enemyMigLimeGreen19.png","spriteFolder/enemySprites/mig04/enemyMigLimeGreen20.png"],
					  
//********************************************************* BOSS SPRITES **************************************************************************

//STAGE 1 BOSS SPRITE FILES :

 stage01BossImageLocs = ["spriteFolder/enemySprites/stage1boss/stage1BossSprite00.png","spriteFolder/enemySprites/stage1boss/stage1BossSprite01.png",
						  "spriteFolder/enemySprites/stage1boss/stage1BossSprite02.png","spriteFolder/enemySprites/stage1boss/stage1BossSprite03.png",
						  "spriteFolder/enemySprites/stage1boss/stage1BossSprite04.png","spriteFolder/enemySprites/stage1boss/stage1BossSprite05.png",		
						  "spriteFolder/enemySprites/stage1boss/stage1BossSprite06.png","spriteFolder/enemySprites/stage1boss/stage1BossSprite07.png",
						  "spriteFolder/enemySprites/stage1boss/stage1BossSprite08.png","spriteFolder/enemySprites/stage1boss/stage1BossSprite09.png",
						  "spriteFolder/enemySprites/stage1boss/stage1BossSprite10.png","spriteFolder/enemySprites/stage1boss/stage1BossSprite11.png",
						  "spriteFolder/enemySprites/stage1boss/stage1BossSprite12.png","spriteFolder/enemySprites/stage1boss/stage1BossSprite13.png",
						  "spriteFolder/enemySprites/stage1boss/stage1BossSprite14.png","spriteFolder/enemySprites/stage1boss/stage1BossSprite15.png",
						  "spriteFolder/enemySprites/stage1boss/stage1BossSprite16.png","spriteFolder/enemySprites/stage1boss/stage1BossSprite17.png",
						  "spriteFolder/enemySprites/stage1boss/stage1BossSprite18.png","spriteFolder/enemySprites/stage1boss/stage1BossSprite19.png"],

//****************************************************** TITLE SCREEN SPRITES ********************************************************

	titleNumberLocs = ["titleScreen/computer0.png","titleScreen/computer1.png",
					   "titleScreen/computer2.png","titleScreen/computer3.png",
					   "titleScreen/computer4.png","titleScreen/computer5.png",
					   "titleScreen/computer6.png","titleScreen/computer7.png",
					   "titleScreen/computer8.png","titleScreen/computer9.png"];	
						  
//************************************************* END OF SPRITES ( AT LEAST FOR NOW ) ***********************************************

//Now load each and every one of these into the game.... 

//Start with our hero....

F14Sprites = new Array();
enemyMig01Sprites = new Array();
stage1BossSprites = new Array();


for (var counter = 0; counter < F14ImageLocs.length-1; counter++) {

	F14Sprites[counter] = new Image();
	F14Sprites[counter].src=F14ImageLocs[counter];
} //END OF F14 IMAGE INITIALIZER....

//Now our enemies....
for (var counter = 0; counter <= enemyImageLocs01.length-1; counter++) {

	enemyMig01Sprites[counter] = new Image();
	enemyMig01Sprites[counter].src = enemyImageLocs01[counter];

} //END OF ENEMY MIG 01 INITIALIZER....

for (var counter = 0; counter < stage01BossImageLocs.length-1; counter++) {

	stage1BossSprites[counter] = new Image();
	stage1BossSprites[counter].src = stage01BossImageLocs[counter];
	
} //END OF BOSS INITIALIZER


//SET UP OTHER GAME ELEMENTS :

explosionSprites = new Array();
for (var counter = 0; counter < explosionImageLocs.length-1; counter++) {

	explosionSprites[counter] = new Image();
	explosionSprites[counter].src = explosionImageLocs[counter];
	
} //END OF EXPLOSION INITIALIZER...

//SET UP NUMBERS FOR GAME TITLE INTRO.

titleNumberSprites = new Array();
for (var counter = 0; counter <= titleNumberLocs.length-1; counter++) {

	titleNumberSprites[counter] = new Image();
	titleNumberSprites[counter].src = titleNumberLocs[counter];

} //END OF TITLE LOOP.

F14BulletImage = new Image();
F14BulletImage.src = F14BulletImageLocs;

F14MissileImage = new Image();
F14MissileImage.src = F14MissileImageLocs;
	
enemyMissileImage = new Image();
enemyMissileImage.src = enemyMissileImageLocs;					  