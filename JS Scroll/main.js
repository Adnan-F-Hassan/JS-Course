let btn = document.getElementById('btn');


window.onscroll = function ( ){
    if ( scrollY >= 400 ){
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }

}

btn.onclick = function () {
    scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    });
}
