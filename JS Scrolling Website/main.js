let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let hello = document.querySelector(".hello");

onscroll = function () {
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 4 + "px";
    mountains3.style.top = value * 2 + "px";
    mountains4.style.top = value * 1.5 + "px";
    river.style.top = value + "px";
    boat.style.top = value + "px";
    boat.style.left = value * 3 + "px";
    hello.style.fontSize = value + "px";
    if (scrollY >= 70) {
        hello.style.fontSize = 70 + "px";
        hello.style.position = "fixed";
        if (scrollY >= 478) {
            hello.style.display = "none";
        } else {
            hello.style.display = "block";
        }
    } if (scrollY >= 168) {
        document.querySelector(".main").style.background = "linear-gradient(#376281,#10001f)";
    } else {
        document.querySelector(".main").style.background = "linear-gradient(hsl(286, 89%, 11%),#10001f)";
    }
}