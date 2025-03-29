
console.log("Welcome to Tic Tac Toe Game ");

let backgroundmusic = new Audio("sounds/music.mp3");
let boxclick = new Audio("sounds/ting.mp3");
let gameoveraudio = new Audio("sounds/gameover.mp3");
let boxes = document.getElementsByClassName("box");
let turn = "X";
let gameover = false;


const changeTurn = () =>{

    return turn === "O"? "X":"O";

}

const checkWin = () =>{


    let boxtext = document.getElementsByClassName("box-text");
    
    let winpossibilities = [

        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    
    winpossibilities.forEach((e)=>{
        
        if((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML &&  boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML) && boxtext[e[0]].innerHTML !== ''){

            document.querySelector(".info").innerHTML = boxtext[e[0]].innerHTML + " Has Won The Game";
            gameover = true;
            
        }
        
    
    })
    
}


// console.log(boxes);


Array.from(boxes).forEach((element)=>{

    let boxtext = element.querySelector(".box-text");
    element.addEventListener("click", ()=>{

        if(boxtext.innerHTML === ""){

            boxtext.innerHTML = turn;
            turn = changeTurn();
            boxclick.play();
            checkWin();

            if(!gameover){

                document.getElementsByClassName("info")[0].innerHTML = "Turn For " + turn;

            
            }
            

        }
    })


})


// RESET BUTTON 

let c;


reset.addEventListener("click", ()=>{

    
    c = document.querySelectorAll(".box-text");

    Array.from(c).forEach((element)=>{

        element.innerHTML = "";


    })
    
    
    
})


console.log(c);

