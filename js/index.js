const direction = { x:0,y : 0};
const foodsound =  new Audio('eat-a-cracker-95783.mp3');
const gameOverSound = new Audio('game-over-38511.mp3');
const moveSound = new Audio('rattle-snake-sound-long-240677.mp3');
const musicSound = new Audio('cartoon-music-81920.mp3');
let speed = 5;
let = lastPaintTime = 0;
let snakeArr = [{x:13,y:15}]
let food = {x:6,y:7}
let inputDir ={x:0,y:0}

let score = 0;
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000<1/speed) {
        
        return;
    }
   lastPaintTime = ctime;
   gameEngine();
}
function iscollide(snake){
    // if snake bump into itself
    for (let i = 1; i < snakeArr.length; i++) {
        
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
   return true;
        }
    }
        if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
            return true;
        }
 return false;
}



 function gameEngine(){
     if(iscollide(snakeArr)){
        gameOverSound.play();
        // musicSound.pause(); // If you want to pause music, you can keep this line
        inputDir = {x: 0, y: 0};
        alert("Game over press key to continue");
        
        // Reset the snake array and set score to 0
        snakeArr = [{x: 13, y: 15}];
        score = 0;  // Reset score to 0

        // Reset the score display on the screen
        scoreBox.innerHTML = "Score: " + score;


        // musicSound.play(); // If you want to resume music, you can keep this line
     }


// increment the score an regenrate the food
if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
    foodsound.play();
    score += 1;
   scoreBox.innerHTML= "Score : " + score;
    snakeArr.unshift({x:snakeArr[0].x + inputDir.x, y:snakeArr[0].y + inputDir.y});
    let a= 2;
    let b= 16;
    food = {x: Math.round(a + (b-a)*Math.random()),y: Math.round(a + (b-a)*Math.random())}
}


//Moving the snake
for (let i = snakeArr.length - 2; i>=0; i--) {
    const element = snakeArr[i];
    snakeArr[i+1] = {...snakeArr[i]};
}
snakeArr[0].x += inputDir.x;
snakeArr[0].y += inputDir.y;


    let board = document.getElementsByClassName("board")[0];
    //display snake

    // Clear the board's content
    board.innerHTML = "";
    
    // Loop through the snakeArr to create snake elements
    snakeArr.forEach((e, index) => {
        // Create a new div for each snake segment
        let snakeElement = document.createElement('div');
        
        // Position the snake element using gridRowStart and gridColumnStart
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        
        // Add the 'food' class to the snake element
        snakeElement.classList.add('snake');
        if(index==0){
            snakeElement.classList.add('head');
        }else{
            snakeElement.classList.add('snake');
        }
        
        // Append the snake element to the board
        board.appendChild(snakeElement);

    });
        //Display food
        let FoodElement = document.createElement('div');
        
        // Position the snake element using gridRowStart and gridColumnStart
    FoodElement.style.gridRowStart = food.y;
    FoodElement.style.gridColumnStart = food.x;
        
        // Add the 'food' class to the snake element
    FoodElement.classList.add('food');
        
        // Append the snake element to the board
        board.appendChild(FoodElement);
 }



 window.requestAnimationFrame(main);
 window.addEventListener('keydown',e=>{
inputDir = {x:0,y:1}// start the game
moveSound.play();
switch(e.key){
    case"ArrowUp":
    console.log("ArrowUp")
    inputDir.x = 0;
    inputDir.y = -1;
    break;
    case"ArrowDown":
    console.log("ArrowDown")
    inputDir.x = 0;
    inputDir.y = 1;
    break;
    case"ArrowRight":
    console.log("ArrowRight")
    inputDir.x = 1;
    inputDir.y = 0;
    break;
    case"ArrowLeft":
    console.log("ArrowLeft")
    inputDir.x = -1;
    inputDir.y = 0;
    break;
    default:
        break;
}
 });