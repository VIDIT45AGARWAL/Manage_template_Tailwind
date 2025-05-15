const butn =document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const hamburger = document.getElementById('ham');
const cross = document.getElementById('cross');

butn.addEventListener('click', ()=>{
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    cross.classList.toggle('hidden');
})