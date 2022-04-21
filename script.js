console.log("Welcome to My TicTacToe!");

let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

// Function to change the player's turn

const changeTurn = () =>
{
    return turn ==="X"?"O": "X";
}


//  Function to check for Win
const checkWin = ()=>
{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2],
        [0,3,6],
        [3,4,5],
        [1,4,7],
        [6,7,8],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if(boxtext[e[0]].innerText===boxtext[e[1]].innerText && (boxtext[e[2]].innerText ===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText !==""))
        {
            document.querySelector(".info").innerText="Ankit the GOD has WON!!";
            isgameover = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
        }
    });
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
                if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; 
                }
            }
        })
    })

    // Add onclick listener to reset butotn

    reset.addEventListener("click", ()=>{
        let boxtexts = document.querySelectorAll(".boxtext")
        Array.from(boxtexts).forEach(element =>{
            element.innerText = ""
        })
        turn = "X"
        isgameover = false;
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
    })