function setTime () {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeText");

    timeText.innerText = currentTime;
}

setInterval(setTime, 1000);
setDrag(document.getElementById("about"));

function setDrag(element) {
    var iniX = 0;
    var iniY = 0;
    var curX = 0;
    var curY = 0;

    if (document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    }

    function startDragging(e) {
        e = e || window.event;
        e.preventDefault();

        iniX = e.clientX;
        iniY = e.clientY;

        document.onmouseup = stopDragging;
        document.onmousemove = dragElement;
    }

    function dragElement(e) {
        e = e || window.event;
        e.preventDefault();

        curX = iniX - e.clientX;
        curY = iniY - e.clientY;

        iniX = e.clientX;
        iniY = e.clientY;

        element.style.top = (element.offsetTop - curY) + "px";
        element.style.left = (element.offsetLeft - curX) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }


}

