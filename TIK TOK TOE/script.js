let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#newgame-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;

const winPattern= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        // console.log("box was clicked")
        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
    })
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`congratualtion winner is ${winner}`
    msgcontainer.classList.remove("hide");
}




const checkwinner=()=>{
    for(pattern of winPattern){
        
            let pos1val=  boxes[pattern[0]].innerText;
            let pos1val2=  boxes[pattern[1]].innerText;
            let pos1val3=  boxes[pattern[2]].innerText;

            if(pos1val!="" &&pos1val2!="" &&pos1val3!=""){
                if(pos1val==pos1val2 &&pos1val2==pos1val3){
                    console.log("winner",pos1val);
                    showWinner(pos1val);
                }
            }

        }
}


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
