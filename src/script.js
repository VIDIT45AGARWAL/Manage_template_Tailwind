const butn =document.getElementById('menu-btn');
const menu = document.getElementById('menu');

butn.addEventListener('click', ()=>{
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
})