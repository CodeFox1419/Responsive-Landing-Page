const menu = document.getElementById('menu');
const navlist = document.querySelector('.navlist')

menu.addEventListener('click',(e)=>{
    navlist.classList.toggle('open')
})

const header = document.querySelector('.header');

window.addEventListener('scroll',()=>{
    header.classList.toggle('sticky', window.scrollY > 80)
})
const sr = ScrollReveal({
    origin : 'top',
    distance : '85px',
    duration : 2500,
    reset : true
})


sr.reveal('.home-txt',{});
sr.reveal('.home-img',{delay : 500});
sr.reveal('.container',{});
sr.reveal('.more-img',{delay : 500});
sr.reveal('.more-txt',{});
sr.reveal('.about-txt',{});
sr.reveal('.about-img',{delay : 500});
sr.reveal('.col-1',{});
sr.reveal('.col-2',{});
sr.reveal('.col-3',{});

