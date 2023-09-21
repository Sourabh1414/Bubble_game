var timer = 60;
var hitrn = 0;
var score = 0;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score; 
}
function bubbleMaker() {
    var clutter = "";

    for (var i = 1; i <= 133; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bub">${rn}</div>`
    }
    document.querySelector(".bbtm").innerHTML = clutter;
}

function runTime() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector(".bbtm").innerHTML = `<h1>GAME OVER</h1>`
        }
    }, 1000);
}

function newHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#Hhit").textContent = hitrn;
}

document.querySelector(".bbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        bubbleMaker();
        newHit();
    }
})

newHit();
runTime();
bubbleMaker();