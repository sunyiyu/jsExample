var input = document.querySelector('#myInput');
function myFunction(){
    // 声明变量
    var filter, ul, li, a, i;
    filter = input.value.toUpperCase();
    ul = document.querySelector("#myUL");
    li = ul.querySelectorAll('li');

    // 循环所有列表，查找匹配项
    for (i = 0; i < li.length; i++) {
        a = li[i].querySelectorAll("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1 && input.value != '') {
            ul.style.display = "block";
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
        li[i].onclick = function(){
            a = this.querySelectorAll("a")[0];
            input.value = a.innerHTML;
            ul.style.display = "";
        }
    }
}
input.onkeyup = myFunction;
