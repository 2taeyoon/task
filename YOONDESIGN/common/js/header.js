// header start!
const header = document.querySelector('header');

document.addEventListener('scroll', ()=>{
    if(window.scrollY == 0){
        header.classList.remove('active');
    } else {
        header.classList.add('active');
    }
});

const hamBtn = document.querySelector('.ham_btn');
const hamWrap = document.querySelector('.ham_wrap');
const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const hamBar = document.querySelectorAll('.ham_btn > span');

hamBtn.addEventListener('click', ()=>{
    hamBtn.classList.toggle('active');
    hamWrap.classList.toggle('active');
    logo.classList.toggle('active');
    body.classList.toggle('active');
    header.classList.toggle('on');
    
    hamBar.forEach((bar)=>{
        bar.classList.toggle('active');
    });
});
// header end!


AOS.init();