// header background start!
const headerScroll = document.querySelector('header');

document.addEventListener('scroll', function(){
    let posY = window.scrollY; // pos.y 현재 스크롤 값 // scrollY : 스크롤 값을 픽셀로 표현하는 프로퍼티
    console.log(posY);
    if(posY == 0){
        headerScroll.classList.remove('active');
    } else {
        headerScroll.classList.add('active');
    }
});
// header background end!



// store slider start!

const mainSlider = document.querySelectorAll('.main_slider > li');
const slideDot = document.querySelectorAll('.slide_dot > li');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let count = 0; // 선택된 값으로 지정할 변수
let intervalID = null; // 초기화 해주기 위한 초기값


// 슬라이드 이미지를 구현하는 함수
function storeSlider() {

    if (count >= mainSlider.length) { // mainSlider의 배열의 길이가 count와 같아졌을 떄 처음으로 돌아가도록
        count = 0; // count를 0으로 초기화
    }

    mainSlider.forEach(slide => slide.classList.remove('active')); // nodelist를 forEach문으로 돌려서 class remove
    slideDot.forEach(dot => dot.classList.remove('active')); // nodelist를 forEach문으로 돌려서 class remove

    mainSlider[count].classList.add('active'); // 현재 활성화된 슬라이드에 class add
    slideDot[count].classList.add('active'); // 현재 활성화된 슬라이드에 class add

    count++;    // 다음 슬라이드를 나타내기 위해 count 값을 1 증가시킴
                // 마지막에 넣어야 다른 코드와 겹치지 않아서 코드가 제대로 작동함

}



// 도트를 클릭했을 때 발생하는 forEach문
slideDot.forEach((elDot, index) => {

    elDot.addEventListener('click', () => {
        clearInterval(intervalID); // 슬라이드 이미지의 자동재생 인터벌을 초기화
        count = index; // 선택된 도트의 인덱스가 슬라이드의 인덱스와 일치하도록 설정
        storeSlider(); // storeSlider 함수 호출

        intervalID = setInterval(storeSlider, 5000); // 초기화해준 인터벌을 재실행
    });
});



// 슬라이드 버튼을 구현하는 함수
function slideBtn() {

    clearInterval(intervalID); // 슬라이드 이미지의 자동재생 인터벌을 초기화

    mainSlider.forEach(slide => slide.classList.remove('active')); // nodelist를 forEach문으로 돌려서 class remove
    slideDot.forEach(dot => dot.classList.remove('active')); // nodelist를 forEach문으로 돌려서 class remove

    mainSlider[count].classList.add('active'); // 현재 활성화된 인덱스 슬라이드에 class add
    slideDot[count].classList.add('active'); // 현재 활성화된 인덱스 슬라이드에 class add

    intervalID = setInterval(storeSlider, 5000); // 초기화해준 인터벌을 재실행

}

// 이전 버튼을 클릭했을 때 발생하는 이벤트 리스너
prevBtn.addEventListener('click', () => {

    count--;
    if (count < 0) { // count가 0보다 작아졌을 때
        count = mainSlider.length - 1; // mainSlider 배열 길이에 -1 값으로 재설정
    }
    slideBtn(); // slideBtn 함수 호출

});

// 다음 버튼을 클릭했을 때 발생하는 이벤트 리스너
nextBtn.addEventListener('click', () => {

    count++;
    if (count >= mainSlider.length) { // mainSlider의 배열의 길이가 count와 같아졌을 떄 처음으로 돌아가도록
        count = 0; // count를 0으로 초기화
    }
    slideBtn(); // slideBtn 함수 호출

});

intervalID = setInterval(storeSlider, 5000); // 페이지 로딩 시, storeSlider() 함수를 5초 간격으로 계속 실행

// store slider end!



// swiper start!

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    autoplay: {
        delay: 5000,
    },

});

// swiper start!