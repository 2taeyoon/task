// slider start!
const slider = document.querySelector('.slider');
const sliderLi = document.querySelectorAll('.slider > .slider_main > li');
const sliderDot = document.querySelectorAll('.slider > .slider_dot > li');
const textWrap = document.querySelectorAll('.text_wrap');
const prevBtn = document.querySelector('.prev_btn');
const next_btn = document.querySelector('.next_btn');

let count = 0;
let IntervalID = null;
let dragStartX, dragEndX = 0;
let touchStartX, touchEndX = 0;


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

        IntervalID = setInterval(mainSlider, 5000);
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


slider.addEventListener('mousedown', (event)=>{
    dragStartX = event.clientX;
});

slider.addEventListener('mouseup', (event)=>{
    dragEndX = event.clientX;
    
    if (dragStartX - dragEndX > 300) {
        count++;
        if(count >= sliderLi.length) count = 0;
        clearInterval(IntervalID);
        sliderClass();
    
        IntervalID = setInterval(mainSlider, 5000);

    } else if (dragStartX - dragEndX < -300) {
        count--;
        if(count < 0) count = sliderLi.length -1;
        clearInterval(IntervalID);
        sliderClass();

        IntervalID = setInterval(mainSlider, 5000);
    }
});


slider.addEventListener('touchstart', (event)=>{
    touchStartX = event.touches[0].clientX;
});

slider.addEventListener('touchend', (event)=>{
    touchEndX = event.changedTouches[0].clientX;
    
    if (touchStartX - touchEndX > 100) {
        console.log('100보다 크다 즉 다음 버튼', touchStartX - touchEndX);
        count++;
        if(count >= sliderLi.length) count = 0;
        clearInterval(IntervalID);
        sliderClass();
    
        IntervalID = setInterval(mainSlider, 5000);

    } else if (touchStartX - touchEndX < -100) {
        count--;
        if(count < 0) count = sliderLi.length -1;
        clearInterval(IntervalID);
        sliderClass();

        IntervalID = setInterval(mainSlider, 5000);
    }
});

/*
slider.addEventListener('touchmove', (event) => {
    event.preventDefault();
});
*/
IntervalID = setInterval(mainSlider, 5000);
// slider end!




fetch('./lib/js/data/data.json')
    .then(response => response.json())
    .then(data => {
        indexPort(data);
        indexPart(data);
    })
    .catch(error => console.error(error));


const indexPort = (port)=>{
    const portUl = document.querySelector('.port_ul');
    port.portfolio.slice(0, 8).forEach((portImg)=>{
        const portLi = document.createElement('li');
        portLi.innerHTML = `
            <a href="#" style="background: url('./lib/js/data/img/${portImg.img}') no-repeat center center / cover;"></a>
        `;
        portUl.append(portLi);
    });
}

const indexPart = (part)=>{
    const partUl = document.querySelector('.partner_wrap > ul');
    part.partner.forEach((partImg)=>{
        const partLi = document.createElement('li');
        partLi.innerHTML = `
            <span style="background: url('./lib/js/data/img/${partImg.img}') no-repeat center center / contain;"></span>
        `;
        partUl.append(partLi);
    });
}