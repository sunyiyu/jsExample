function move() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 100);

    function frame() {
        var radom = Math.floor(Math.random()*10);
        if (width >= 100) {
            clearInterval(id);
            elem.innerHTML = '100%';
        } else {
            width += radom;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1  + '%';
        }
    }
}