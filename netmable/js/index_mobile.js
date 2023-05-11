if (window.innerWidth > 760) {
    // 현재 창의 너비가 760px 이상이고 높이가 768px 미만일 경우
    window.location.href = 'index.html'; // PC 페이지로 이동
}

// header_search_ico start!

const searchBtn = document.querySelector('.header_search_ico');
const headerSearch = document.querySelector('.header_search');

searchBtn.addEventListener('click',() => {
    headerSearch.classList.toggle('active'); // headerSearch에 active class 토글
    searchBtn.style.backgroundPosition = headerSearch.classList.contains('active') ? '0 -32px' : '0 0'; // 조건문 ? 참일 때 실행문 : 거짓일 때 실행문

    // 🔽🔽🔽🔽🔽🔽 풀어 쓰면 🔽🔽🔽🔽🔽🔽
    // if(headerSearch.classList.contains('active')){      // headerSearch에 active class가 있는지 검사
    //     searchBtn.style.backgroundPosition = '0 0';     // searchBtn의 style 변경
    // } else {
    //     searchBtn.style.backgroundPosition = '0 -32px'; // searchBtn의 style 변경
    // }
});

// header_search_ico end!



// swiper_main start!

const swiperMain = new Swiper('.swiper_main', {

    direction: 'horizontal',
    loop: true,

    pagination: {
        el: ".swiper_main_bullet",
    },

});

// swiper_main start!



// tab_game의 tab menu start!

const tabGame = document.querySelectorAll('.tab_game > li > div');
const tabBox = document.querySelectorAll('.tab_box');

const handleTabClick = (index) => {
    tabGame.forEach((tab, i) => { // querySelectorAll을 통해 가져온 div의 nodelist를 forEach로 돌림 
        tab.classList.toggle('active', index === i); // 전체 index와 선택된 i가 같게 처리하려 선택된 요소에만 추가
    });

    tabBox.forEach((content, i) => { // querySelectorAll을 통해 가져온 div의 nodelist를 forEach로 돌림 
        content.classList.toggle('active', index === i); // 전체 index와 선택된 i가 같게 처리하려 선택된 요소에만 추가
    });
};

tabGame.forEach((select, index) => {
    select.addEventListener('click', () => {
        handleTabClick(index); // handleTabClick 함수 실행
    });
});

// tab_game의 tab menu end!



// tab_box slider start!

const swiperContent = new Swiper('.swiper_content', {

    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper_btn_next',
        prevEl: '.swiper_btn_prev',
    },

    pagination: {
        el: ".swiper_nums",
        type: "fraction",
    },

});

// tab_box slider end!



// ui_link scroll start!
const ulLink = document.querySelector('.ui_link');

ulLink.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.top_btn').scrollIntoView( {behavior: 'smooth'} );
});
// ui_link scroll end!