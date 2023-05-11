if (window.innerWidth < 760) {
    // 현재 창의 너비가 760px 미만이고 높이가 768px 미만일 경우
    window.location.href = 'index_mobile.html'; // 모바일 페이지로 이동
}

// main slider start!

const mainSlider = document.querySelectorAll('.main_slide > div > a');
const progress = document.querySelectorAll('.progress');
const bar = document.querySelectorAll('.bar');
const mainNav = document.querySelectorAll('.main_nav > ul > li');

let count = 0; // 선택된 값으로 지정할 변수
let intervalID = null; // 초기화 해주기 위한 초기값


// 슬라이드 이미지를 구현하는 함수
function slider() {

    if (count >= mainSlider.length) { // mainSlider의 배열의 길이가 count와 같아졌을 떄 처음으로 돌아가도록
        count = 0; // count를 0으로 초기화
    }

    mainSlider.forEach(slide => slide.classList.remove('active')); // nodelist를 forEach문으로 돌려서 class remove
    bar.forEach(bar => bar.classList.remove('active')); // nodelist를 forEach문으로 돌려서 class remove
    progress.forEach(pro => pro.classList.remove('active'));

    mainSlider[count].classList.add('active'); // 현재 활성화된 슬라이드에 class add
    bar[count].classList.add('active'); // 현재 활성화된 슬라이드에 class add
    progress[count].classList.add('active'); // 현재 활성화된 슬라이드에 class add

    // if (progress[count].classList.contains('active')) { // progress 요소에 active 클래스가 추가되어 있으면
    //     progress[count].style.width = '0%'; // width를 0%로 초기화
    //     console.log('sliderLogic----if문------',count);
    //     let width = 0; // width 값 초기화
    //     const intervalID = setInterval(() => { // setInterval을 이용하여 width 값을 0%에서 100%로 변경
    //         if (width >= 100) { // 100% 이상이 되면 clearInterval을 호출하여 setInterval 종료
    //             clearInterval(intervalID);
    //         } else { // 100% 미만이면 width 값을 증가시키면서 progress 요소의 width를 변경
    //             width += 1;
    //             progress[count].style.width = width + '%';
    //         }
    //     }, 30); // 30ms 간격으로 실행
    // }

    count++;    // 다음 슬라이드를 나타내기 위해 count 값을 1 증가시킴
    // 마지막에 넣어야 다른 코드와 겹치지 않아서 코드가 제대로 작동함

}


// li list를 클릭했을 때 발생하는 forEach문
mainNav.forEach((elLi, index) => {

    elLi.addEventListener('click', () => {
        clearInterval(intervalID); // 슬라이드 이미지의 자동재생 인터벌을 초기화
        count = index; // 선택된 도트의 인덱스가 슬라이드의 인덱스와 일치하도록 설정
        slider(); // slider 함수 호출

        intervalID = setInterval(slider, 3000); // 초기화해준 인터벌을 재실행
    });
});


intervalID = setInterval(slider, 3000); // 페이지 로딩 시, slider() 함수를 5초 간격으로 계속 실행

// main slider end!



// bottom_banner random img start!

const bannerImg = document.querySelector('.bottom_banner img');

const imgs = [ // 배열 리터럴로 배열 생성
    { src: 'img/sectiongame1.jpg', alt: 'section_game1' }, // 배열 0번째, 객체의 속성은 src와 alt로 2개
    { src: 'img/sectiongame2.jpg', alt: 'section_game2' }, // 배열 1번째, 객체의 속성은 src와 alt로 2개
    { src: 'img/sectiongame3.jpg', alt: 'section_game3' }  // 배열 2번째, 객체의 속성은 src와 alt로 2개
];

// floor로 소수점 이하를 무조건 내림, imgs.length로 배열의 길이를 곱하여 배열의 길이만큼 숫자가 나오게 만듦
const imgsRandom = Math.floor(Math.random() * imgs.length);
bannerImg.src = imgs[imgsRandom].src; // bannerImg의 src가 imgs의 src로 변경
bannerImg.alt = imgs[imgsRandom].alt; // bannerImg의 alt가 imgs의 alt로 변경

// bottom_banner random img end!



// Family_box start!

const familyBox = document.querySelector('.family_box');
const languageBox = document.querySelector('.language_box');
familyBox.addEventListener('click',()=>{
    languageBox.classList.toggle('active');
});

// Family_box end!