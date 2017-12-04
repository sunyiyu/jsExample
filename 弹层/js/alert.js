let alet = ()=>{
    "use strict";
    let node = document.createElement('div');
    node.innerHTML = `
        <!-- 弹窗内容 -->
        <div class="modal-content">
            <span class="close">&times;</span>
            <input type="text" placeholder="请输入...">
        </div>
    `;
    node.id = 'myModal';
    node.setAttribute('class','modal');
    document.body.appendChild(node);
    node.setAttribute('opacity', '1');

    let colse = document.querySelector('.close');
    colse.addEventListener('click',function () {
        document.body.removeChild(node);
    });

    let myModal = document.querySelector('#myModal');
    window.onclick = function (e) {
        if(e.target == myModal){
            document.body.removeChild(node);
        }
    }
};

let btn = document.querySelector('#myBtn');
btn.addEventListener("click",alet);


