function setTime () {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeText");

    timeText.innerText = currentTime;
}

var aboutWindow = document.getElementById("about");
var infoWindow = document.getElementById("info");
var notesWindow = document.getElementById("notes");
var paidWindow = document.getElementById("paid");
var dontWindow = document.getElementById("dont");

setInterval(setTime, 1000);
setDrag(aboutWindow);
setDrag(infoWindow);
setDrag(notesWindow);
setDrag(paidWindow);


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

var aboutClose = document.querySelector("#close");
var aboutApp = document.querySelector(".app-1");

var infoClose = document.querySelector("#close-i");
var infoApp = document.querySelector(".app-2");

var notesClose = document.querySelector("#close-n");
var notesApp = document.querySelector(".app-3");

var paidClose = document.querySelector("#close-p");
var paidApp = document.querySelector(".icon-n");

var dontClose = document.querySelector("#close-d");
var dontApp = document.querySelector(".icon-n1");

function openWindow(element) {
    element.style.display = "block";
}

function closeWindow(element) {
    element.style.display = "none";
}

aboutClose.addEventListener("click", function() {
    closeWindow(aboutWindow);
});

aboutApp.addEventListener("click", function() {
    openWindow(aboutWindow);
});

infoClose.addEventListener("click", function() {
    closeWindow(infoWindow);
});

infoApp.addEventListener("click", function() {
    openWindow(infoWindow);
});

notesClose.addEventListener("click", function() {
    closeWindow(notesWindow);
});

notesApp.addEventListener("click", function() {
    openWindow(notesWindow);
});

paidClose.addEventListener("click", function() {
    closeWindow(paidWindow);
});

paidApp.addEventListener("click", function() {
    openWindow(paidWindow);
});

dontClose.addEventListener("click", function() {
    closeWindow(dontWindow);
});

dontApp.addEventListener("click", function() {
    openWindow(dontWindow);
});

var linkE = document.querySelector(".link");
var text = document.querySelector(".sorry");
var rickRolled = false;

linkE.addEventListener("click", function() {
    if (rickRolled == false) {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ");
        text.style.display = "block";
        rickRolled = true;
    } else {
        window.open("https://www.instagram.com/serwin.dev/");
    }
});

var dontHeader = document.querySelector("#dontheader");
var text1 = document.querySelector(".text-");

dontHeader.addEventListener("click", function() {
    text1.style.display = "block";
});