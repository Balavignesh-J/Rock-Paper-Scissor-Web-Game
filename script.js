const rock=document.getElementById("r");
const paper=document.getElementById("p");
const scissor=document.getElementById("s");
const opponent=document.getElementById("op");
const opbtn=document.getElementById("opbtn");
const result=document.getElementById("result");
const pscore=document.getElementById("p-score");
const opscore=document.getElementById("op-score");
const container=document.getElementById("container");
const quitbtn=document.getElementById("last");
const popup=document.getElementById("popup");

const array= ["🪨","📄","✂️"]

rock.addEventListener("click",()=>eval("🪨"));

paper.addEventListener("click",()=>eval("📄"));

scissor.addEventListener("click",()=>eval("✂️"));

function eval(playerchoice){
    const opchoice = array[Math.floor(Math.random()*3)];
    opbtn.textContent = opchoice;

    if  ((playerchoice==="🪨"&&opchoice=="✂️")||
        (playerchoice==="📄"&&opchoice=="🪨")||
        (playerchoice==="✂️"&&opchoice=="📄"))
    {
        result.textContent = "Player Wins!";
    }
    else if(playerchoice===opchoice){
        result.textContent = "It's a Tie";
    }
    else{
        result.textContent = "Opponent Wins!";
    }
    if (result.textContent==="Player Wins!") {
        const p = parseInt(pscore.textContent,10);
        pscore.textContent = p + 1;
    }
    else{
        const p = parseInt(opscore.textContent,10);
        opscore.textContent = p + 1;
    }
    
};

quitbtn.addEventListener("click",()=>{    
    const a = parseInt(pscore.textContent)
    console.log(a);
    const b = parseInt(opscore.textContent)
    console.log(b);

    if (a>b) {
        popup.textContent="Player Wins!";
    } else if(b>a) {
        popup.textContent="Opponent Wins!";
    } else if(a===b){
        popup.textContent="It's a Tie";
    }
    
    popup.classList.remove("d-none");
    container.classList.add("d-none");
});

quitbtn.addEventListener("dblclick",()=>{
    location.reload();
});

