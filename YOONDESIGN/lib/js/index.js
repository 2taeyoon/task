// slider start!
const sliderLi = document.querySelectorAll('.slider > .slider_main > li');
const sliderDot = document.querySelectorAll('.slider > .slider_dot > li');
const textWrap = document.querySelectorAll('.text_wrap');
const prevBtn = document.querySelector('.prev_btn');
const next_btn = document.querySelector('.next_btn');

let count = 0;
let IntervalID = null;




const mainSlider = ()=>{
    if(count >= sliderLi.length) count = 0;

    sliderClass();

    count++;
}

const sliderClass = ()=>{
    sliderLi.forEach(slider => slider.classList.remove('active'));
    sliderDot.forEach(slider => slider.classList.remove('active'));
    textWrap.forEach(slider => slider.classList.remove('active'));

    sliderLi[count].classList.add('active');
    sliderDot[count].classList.add('active');
    textWrap[count].classList.add('active');

}




sliderDot.forEach((slider, index)=>{
    slider.addEventListener('click', ()=>{
        clearInterval(IntervalID);
        count = index;
        mainSlider();
        IntervalID = setInterval(mainSlider, 3000);
    });
});

prevBtn.addEventListener('click', ()=>{
    count--;
    if(count < 0) count = sliderLi.length -1;

    clearInterval(IntervalID);

    sliderClass();

    IntervalID = setInterval(mainSlider, 5000);
});

next_btn.addEventListener('click', ()=>{
    count++;
    if(count >= sliderLi.length) count = 0;

    clearInterval(IntervalID);

    sliderClass();

    IntervalID = setInterval(mainSlider, 5000);
});

//IntervalID = setInterval(mainSlider, 5000);
// slider end!