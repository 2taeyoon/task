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
const body = document.querySelector('body');
hamBtn.addEventListener('click', ()=>{
    hamBtn.classList.toggle('active');
    hamWrap.classList.toggle('active');
    body.classList.toggle('active');
});
// header end!