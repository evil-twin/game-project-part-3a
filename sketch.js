    /*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;

}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon


	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
        charDrawSideJumping(gameChar_x, gameChar_y, false)

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        charDrawSideJumping(gameChar_x, gameChar_y, true)

	}
	else if(isLeft)
	{
		// add your walking left code
        charDrawSide(gameChar_x, gameChar_y, false)

	}
	else if(isRight)
	{
		// add your walking right code
        charDrawSide(gameChar_x, gameChar_y, true)

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        charDrawFrontJump(gameChar_x, gameChar_y)

	}
	else
	{
		// add your standing front facing code
        charDrawFront(gameChar_x, gameChar_y)

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    if (isLeft)
    {
        gameChar_x -= 4
    }
    
    if (isRight)
    {
        gameChar_x += 4
    }

    if (gameChar_y < floorPos_y)
    {
        isFalling = true
        gameChar_y += 3
    } else {
        isFalling = false
    }

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
//	console.log("keyPressed: " + key);
//	console.log("keyPressed: " + keyCode);
  
    if (keyCode == 65) {
        isLeft = true
    }
    
    if (keyCode == 68) {
        isRight = true
    }
    
    if (keyCode == 87 && !isFalling) {
        gameChar_y -=100
    }
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

//	console.log("keyReleased: " + key);
//	console.log("keyReleased: " + keyCode);
    if (keyCode == 65) {
        isLeft = false
    }
    
    if (keyCode == 68) {
        isRight = false
    }
}
