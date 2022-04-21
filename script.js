console.log("Welcome to My TicTacToe!");
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";

// Function to change the player's turn

const changeTurn = () =>
{
    return turn ==="X"?"O": "X";
}


//  Function to check for Win
const checkWin = ()=>{

}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>
    {
        let boxtext = element.querySelector(".boxtext");
        element.addEventListener("click", ()=>{
            if (boxtext.innerText==="")
            {
                boxtext.innerText = turn;
                turn =  changeTurn();
                ting.play();
                checkWin();
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; 
            }
        })
    })