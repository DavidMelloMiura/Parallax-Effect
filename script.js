let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let mountains_front = document.getElementById('mountains_front');
let btn = document.getElementById('btn');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    moon.style.top = value * .8 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 0.2 + 'px';
    btn.style.marginTop = value * 0.5 + 'px';
    mountains_behind.style.marginTop = value * 0.4 + 'px';
});




// Muda nome da classe do menu - de toggle para toggle active
let toggleMenu = document.getElementById('toggle');

let navigation = document.getElementById('navigation');

toggleMenu.onclick = function(){
    toggleMenu.classList.toggle('active');

    navigation.classList.toggle('active');


}
