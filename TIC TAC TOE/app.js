const clickSound=new Audio("./sounds/click.mp3");
const winSound=new Audio("./sounds/win.mp3");


let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector('#new-game-btn');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('.msg');
let currentTurnElement=document.getElementById("current-turn");

let turn0=true;

const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const showWinner = (winner,winningBoxes) => {
   
    msg.innerText=`Congratulations!🎉 ${winner} won the game!`;
    msg.style.fontWeight="bold";
    msgContainer.classList.remove("hide");
    disabledBoxes();
    winSound.play();

    for(let box of winningBoxes){
        box.classList.add("winning-box");

    }
};
const showDraw=()=>{
    
    msg.innerText="It's a draw!🤝";
    msgContainer.classList.remove("hide");
    disabledBoxes();

};

const resetGame=()=>{
    turn0 = true;
    currentTurnElement.innerText='O';
    enableBoxes();
    msgContainer.classList.add("hide");
    
    


};

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;

    }
    
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.classList.remove("x","o","winning-box");

    }
    
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!='' && pos2!='' && pos3!=''){
            if(pos1===pos2 && pos3===pos1){
                console.log("Winner");
                showWinner(pos1,[boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]]);
                return true;
            }

        }
        
       

    }
    return false;

};

const checkDraw=()=>{
    return Array.from(boxes).every((box)=>box.innerText !=="");
};
const toggleTurn=()=>{
    turn0=!turn0;
    currentTurnElement.innerText=turn0 ?'O':'X';
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        clickSound.currentTime=0;
        clickSound.play();
        if(box.innerText === ""){

        
            if(turn0){
                box.innerText='O';
                box.classList.add('o');
                
        
            }
            else{
                box.innerText='X';
                box.classList.add('x');
                
        
            }
            box.disabled=true;
            if(!checkWinner() && checkDraw()){
                showDraw();
            }
            toggleTurn();
        }

    });
    
    
});




newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

