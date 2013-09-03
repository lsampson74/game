//THIS LOADS ALL OF THE SOUNDS FOR THE GAME....

var machineGunSoundPool = new Array(),	//Machine gun sounds
    missileSoundPool = new Array(),	//Missile sounds
	flipSoundPool = new Array(), //Barrel roll sounds	
	enemyExplosionSound = new Array(),
	
	explosionSound,
	jetFlightSound;
	
//BEGIN LOADING THE GAME SOUNDS :

//ENEMY EXPLOSION
for (var counter = 0; counter<10; counter++) {
	enemyExplosionSound[counter] = new Audio("soundFolder/explodingEnemies.mp3");
	enemyExplosionSound[counter].volume = .5;
	enemyExplosionSound[counter].load();

} //END OF LOOP.

//.............................................................................

for (var counter = 0; counter<10; counter++) {

	machineGunSoundPool[counter] = new Audio("soundFolder/F14FiringGuns.mp3");
	machineGunSoundPool[counter].volume = .5;
	machineGunSoundPool[counter].load();
	
} //END OF LOOP.

//............................................................

//SET UP MISSILE FIRE :
for (var counter = 0; counter<10; counter++) {

	missileSoundPool[counter] = new Audio("soundFolder/F14FiringMissiles.mp3");
	missileSoundPool[counter].volume = .5;
	missileSoundPool[counter].load();

} //END OF LOOP.

//..................................................

//F14 BARREL ROLL
for (var counter = 0; counter<10; counter++) {
	flipSoundPool[counter] = new Audio("soundFolder/f14barrelroll.mp3");
	flipSoundPool[counter].volume = .5;
	flipSoundPool[counter].load();
} //END OF LOOP.

//..................................................
//JET FLIGHT
	
jetFlightSound = new Audio("soundFolder/F14regularFlight3.mp3");
jetFlightSound.volume = .25;
jetFlightSound.load();	

//..................................................

//F14 EXPLOSION
explosionSound = new Audio("soundFolder/f14destroyed.mp3");
explosionSound.volume = .5;
explosionSound.load();

//..................................................


