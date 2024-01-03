let buttons= document.querySelectorAll(".box");
let w=document.querySelector(".winner");
let msg=document.querySelector("#msgg");
let reset=document.querySelector(".reset");
let newgame=document.querySelector(".newgame");
let ps=document.querySelector(".ps");
let xx=document.querySelector(".xx");
let div1=document.createElement("div");
let c1=0;
let c2=0;
let c=0;
let player1=prompt("Player1!");
let player2=prompt("Player2!");
let turn0=true;
let winner=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
ps.innerText=`${player1} is requested to make a move`;
buttons.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0===true)
        {
            box.innerText="O";
            turn0=false;
            ps.innerText=`${player2} is requested to make a move`;
            c1++;
        }
        else
        {
            box.innerText="X";
            turn0=true;
            ps.innerText=`${player1} is requested to make a move`;
            c2++;
        }
        box.disabled=true;
        c++;
        let check=checkwinner();
        if(c===9 && check!=true){
        draw();}
    });
    
});

const draw=()=>
{
    msg.innerText="Match Draw!"
    w.classList.remove("hide");
    disable();
    xx.classList.add("hide");
    reset.style.marginBottom="2.5rem";
    moves();
}

const checkwinner=()=>{
    for(let i of winner)
    {
        let p1=buttons[i[0]].innerText;
        let p2=buttons[i[1]].innerText;
        let p3=buttons[i[2]].innerText;
        if(p1!="" && p2!="" && p3!="")
        {
            if(p1===p2 && p2===p3)
            {
            showwinner(p1);
            return true;
            }
            
        }
    }
}
const showwinner=(win)=>{
    if(win==="O")
    msg.innerText=`Congratulations! Winner is ${player1}`;
    else
    msg.innerText=`Congratulations! Winner is ${player2}`;
    w.classList.remove("hide");
    disable();
    xx.classList.add("hide");
    reset.style.marginBottom="2.5rem";
    moves();
}

const disable=()=>{
    for(let box of buttons)
    {
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of buttons)
    {
        box.disabled=false;
    }
}
let restart=()=>{
    turn0=true;
    c=0;
    buttons.forEach((box)=>{
        box.innerText="";
    });
    enable();
    w.classList.add("hide");
    xx.classList.remove("hide");
    reset.style.marginBottom="0rem";
    c1=c2=0;
    div1.remove();

}
reset.addEventListener("click",restart);
newgame.addEventListener("click",restart);

const moves=()=>{
    
    div1.setAttribute("class","move");
    newgame.before(div1);
    div1.innerText=`Number of moves of ${player1} =${c1} \nNumber of moves of ${player2} =${c2}`;
}