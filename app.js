let gameSeq = [];
let userSeq = [];
let btns = ["green","yellow","blue","red"];
let level = 0;
let started = false;
let highScore = 0;
let h3 = document.querySelector("h3");
document.addEventListener("keypress",function () {
    if(started === false){
        console.log("game started");
        started = true;
        levelUp();
    }
})
function gameFlash(btn){
     btn.classList.add("flash");
     setTimeout(function(){
        btn.classList.remove("flash");
     },250)
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash");
    },250)
}
function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `level ${ level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    // console.log(gameSeq);
    gameFlash(randBtn)
}
function checkAns(idx){
    // let idx = level - 1;
    if(gameSeq[idx] === userSeq[idx]){
       if(gameSeq.length === userSeq.length){
               setTimeout(levelUp,1000)
       }
    }else{
        if(level > highScore){
            highScore = level;
        }
        h3.innerText = `your High Score is ${highScore} Game is Over your score is ${level}  Press any key to start`;

        let body = document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(() => {
            body.style.backgroundColor = "white";
        }, 150);
        
        reset();
    }
}
function btnPress(){
    userFlash(this);
    let userColor = this.getAttribute("id");
    
    userSeq.push(userColor);
     console.log(userSeq);
     checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click",btnPress);
    }
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}