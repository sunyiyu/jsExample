let btn = document.querySelector('#btn');
let myContainer = document.querySelector('#myContainer');
let myBall = document.querySelector('#myBall');
let pos = 0;
let left = 0;
let speed1 = 2;
let speed2 =5;


function move() {

    pos += speed1;
    left += speed2;
    myBall.style.top = pos + 'px';
    myBall.style.left = left + 'px';
    if(parseInt(myBall.style.left) >= 350){
        speed2 = -speed2;
    }
    if(parseInt(myBall.style.top) >= 350){
        speed1 = -speed1;
    }
    if(parseInt(myBall.style.left) <= 0){
        speed2 = -speed2;
    }
    if(parseInt(myBall.style.top) <= 0){
        speed1 = -speed1;
    }
}

let myMove = ()=>{
    // clearInterval(nnn);
    nnn= setInterval(move,10);
};




btn.addEventListener('click',myMove, true);