let btn = document.querySelector('button');
let myUl = document.querySelector('#id01');
let myLi = myUl.querySelectorAll('li');


let sortList = ()=>{
    "use strict";
    let Arr = [];
    for(let i=0; i<myLi.length; i++){
        Arr.push(myLi[i].innerHTML);
    }
    Arr.sort();
    for(let i=0; i<myLi.length; i++){
        myLi[i].innerHTML = Arr[i];
    }
    console.log(Arr);
};
btn.addEventListener('click', sortList);
// btn.onclick = sortList;