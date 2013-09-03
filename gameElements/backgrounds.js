//THIS SETS UP THE BACKGROUND MUSIC AND BACKGROUND SOUND....

backgroundMusicArray = new Array();
//Last 40 stage 
backgroundMusicArray[0] = new Audio("musicFolder/dangerZone.mp3");

//Last 39 stage
backgroundMusicArray[1] = new Audio("musicFolder/landOfConfusion.mp3");

//Last 39 stage boss
backgroundMusicArray[2] = new Audio("musicFolder/crazyTrain.mp3");

//Set the volume for all of the background music.
for (var counter = 0; counter == backgroundMusicArray.length-1; counter++) backgroundMusicArray[counter].volume = .9;