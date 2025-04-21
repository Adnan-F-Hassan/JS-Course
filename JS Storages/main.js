let localtxt = document.getElementById('localtxt');
let sessiontxt = document.getElementById('sessiontxt');

if (localStorage.length > 0) {
    localtxt.value = localStorage.localtxt;
    document.body.style.background = localStorage.color;
}

if (sessionStorage.length > 0) {
    sessiontxt.value = sessionStorage.sessiontxt;
} else {
    sessiontxt.value = "session empty"
}


localtxt.onkeyup = function(){
    localStorage.setItem('localtxt', localtxt.value)
}

sessiontxt.onkeyup = function(){
    sessionStorage.setItem('sessiontxt', sessiontxt.value)
}

function setColor(color) {
    localStorage.setItem('color',  color);
    document.body.style.background = color;
}