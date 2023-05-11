// header hover start!

const menuLi = document.querySelectorAll('.menu_area li'); // class .menu_area의 자식인 모든 li 선택
const listHover = document.querySelectorAll('.listHover'); // .listHover를 class로 가지고 있는 모든 태그 선택
const headerBg = document.querySelector('.header_bg');

menuLi.forEach((list) => {
    list.addEventListener('mouseover', () => {
        listHover.forEach((item) => {
            if (list.contains(item)) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        headerBg.classList.add('active');
    });


    list.addEventListener('mouseout', () => {
        listHover.forEach((item) => {
            item.classList.remove('active');
        });
        headerBg.classList.remove('active');
    });
});

// header hover end!



// header search start!

const searchView = document.querySelector('.search_view');
const dimmBg = document.querySelector('.dimm_bg');
const searchClose = document.querySelector('.search_close');

searchView.addEventListener('click', ()=>{
    dimmBg.classList.add('active');
});
searchClose.addEventListener('click', ()=>{
    dimmBg.classList.remove('active');
});

// header search end!



// main swiper slider start!

let swiper = new Swiper(".mySwiper", {

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,

    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

// main swiper slider end!


// video select start!

const videoList = document.querySelectorAll('.video_scroll > ul > li > a');
const videoText = document.querySelectorAll('.video_text');
const videoBg = document.querySelectorAll('.play_bg');

const videoTrans = document.querySelector('.video_trans');
const iframes = [ // 배열 리터럴로 배열 생성
    { src: 'https://www.youtube.com/embed/be5KqT4IW_E', title: '넷마블 사옥에 크리에이터들이 모인 EU는?👀' }, // 배열 0번째, 객체의 속성은 src와 alt로 2개
    { src: 'https://www.youtube.com/embed/DiRLfS_jAsA', title: '🎨7대죄 메게르다 스피드페인팅 (7ds Megellda Speed Painting) | 넷마블 x 람다람' }, // 배열 1번째, 객체의 속성은 src와 alt로 2개
    { src: 'https://www.youtube.com/embed/M70PAR53Jc0', title: '[넷마블X짤툰] 갓겜컴퍼니 시즌3 2화 - MZ' },  // 배열 2번째, 객체의 속성은 src와 alt로 2개
    { src: 'https://www.youtube.com/embed/c6PBC-Fvwvc', title: '[Playlist] 봄날 산들바람을 느끼며 듣는 노래 | 🌸spring with 제2의 나라: Cross Worlds' }, // 배열 3번째, 객체의 속성은 src와 alt로 2개
    { src: 'https://www.youtube.com/embed/oWi_raGVdms', title: '일곱 개의 대죄 오리진 플레이영상 최초공개 | GDC2023' }, // 배열 4번째, 객체의 속성은 src와 alt로 2개
    { src: 'https://www.youtube.com/embed/R2mZbXZgrME', title: '[마구마구2023 모바일]  23 시즌 업데이트 기념 개발PD 인터뷰' }, // 배열 5번째, 객체의 속성은 src와 alt로 2개
    { src: 'https://www.youtube.com/embed/nFeWGKYJ-s0', title: '[Behind] MAVE: (메이브) 모두의마블 콜라보 캐릭터 제작 스토리!' }, // 배열 6번째, 객체의 속성은 src와 alt로 2개
    { src: 'https://www.youtube.com/embed/fDxL42WI5sM', title: '행운을 팝니다! &#39;쿵야 레스토랑즈 행운상점’ 팝업스토어 탐방기' } // 배열 7번째, 객체의 속성은 src와 alt로 2개
];


function playVideo(index) {

    videoTrans.src = iframes[index].src;
    videoTrans.title = iframes[index].title;

    videoText.forEach((text, i) => {
        if (index === i) {
            text.style.fontFamily = 'NotoSansKR_Bold';
            text.style.color = '#000';
        } else {
            text.style.fontFamily = 'NotoSansKR_Medium';
            text.style.color = '#828282';
        }
    });

    videoBg.forEach((bg, i) => {
        if (index === i) {
            bg.classList.add('active');
        } else {
            bg.classList.remove('active');
        }
    });

}


videoList.forEach((item, index) => {

    item.addEventListener('click', (event) => {
        event.preventDefault(); // a tag의 기본 동작 제거
        playVideo(index); // playVideo 함수 실행, (index)를 적어야 videoList의 index를 일치하게 한다
    });

});

// video select end!



// btnMore start!

const liContents = [ // 배열 안에 객체로 생성
    {
        imgSrc: './img/sub_img/main_con13.png',
        altText: 'main_con13',
        yellowText1: '넷마블 인사이드',
        yellowText2: '',
        mainText: '갓생 직장인이 되고 싶다면? 넷마블스토어 회사생활 필수템을 소개합니다!',
        dayText: '2023.03.30'
    },
    {
        imgSrc: './img/sub_img/main_con14.jpg',
        altText: 'main_con14',
        yellowText1: '뉴스룸',
        yellowText2: '·보도자료',
        mainText: '넷마블 ‘넷마블 프로야구 2023’, 1주년 및 시즌 개막 기념 업데이트 실시',
        dayText: '2023.03.30'
    },
    {
        imgSrc: './img/sub_img/main_con15.jpg',
        altText: 'main_con15',
        yellowText1: '뉴스룸',
        yellowText2: '·보도자료',
        mainText: '넷마블 <세븐나이츠 레볼루션>, 신규·복귀 이용자 위한 초대형 혜택 증정 업데이트 실시',
        dayText: '2023.03.29'
    },
    {
        imgSrc: './img/sub_img/main_con16.jpg',
        altText: 'main_con16',
        yellowText1: '뉴스룸',
        yellowText2: '·보도자료',
        mainText: '넷마블 공식 온라인 스토어 ‘넷마블스토어’, 텐바이텐 온라인몰 입점',
        dayText: '2023.03.29'
    },
    {
        imgSrc: './img/sub_img/main_con17.jpg',
        altText: 'main_con17',
        yellowText1: '뉴스룸',
        yellowText2: '·보도자료',
        mainText: '넷마블, <킹 오브 파이터 올스타>에 ‘XV 시라누이 마이’ 등 신규 파이터 업데이트 실시',
        dayText: '2023.03.29'
    },
    {
        imgSrc: './img/sub_img/main_con18.jpg',
        altText: 'main_con18',
        yellowText1: '뉴스룸',
        yellowText2: '·보도자료',
        mainText: '넷마블, 제 12기 정기 주주총회 개최',
        dayText: '2023.03.29'
    },
    {
        imgSrc: './img/sub_img/main_con19.png',
        altText: 'main_con19',
        yellowText1: '넷마블 인사이드',
        yellowText2: '·피플&라이프',
        mainText: '주말, 넷마블 지타워가 북적였다? 넷마블 파트너 크리에이터 MEET & GREET',
        dayText: '2023.03.28'
    },
    {
        imgSrc: './img/sub_img/main_con20.jpg',
        altText: 'main_con20',
        yellowText1: '뉴스룸',
        yellowText2: '·보도자료',
        mainText: "넷마블 '블레이드 & 소울 레볼루션', 신규 오리지널 직업 등 대규모 업데이트 실시",
        dayText: '2023.03.28'
    }
];

const btnMore = document.querySelector('.btn_more_area');
let startIndex = 0; // 시작 인덱스 변수 생성
const ul = document.querySelector('.newest_con > ul');

btnMore.addEventListener('click', function() {
    const fragment = document.createDocumentFragment(); // createDocumentFragment 이거를 사용해서 최적화를 시켜줌
    // DOM에 추가할 때, for문만 돌려서 출력하면 순서대로 출력되는데, createDocumentFragment로 한번 감싸주면
    // createDocumentFragment의 요소에 모든 요소들이 담겨서 한번에 DOM에 추가되어 최적화에 필수.

    // 현재 생성된 <li> 요소들의 개수를 세어 다음 인덱스부터 liContents 배열을 참조하여 <li> 요소를 생성
        // startIndex를 i에 대입, ("i < startIndex + 4"까지의 범위에서 반복, 결국 출력할 li 갯수를 의미)
        // (&& i < liContents.length 동시에 배열의 길이를 넘지 않도록 함)
        // 'startIndex' 변수를 기준으로 liContents 배열 길이만큼 범위의 요소만 생성하여 추가
    for(let i = startIndex; i < startIndex + 4 && i < liContents.length; i++){
        let newLi = document.createElement('li'); // li tag 생성, " newLi.innerHTML = `` " 생성한 li 태그 안에 들어갈 요소를 `` 안에 생성

        // liContents[i]는 생성한 배열을 for문의 i 값과 일치시켜서 순서대로 출력
        newLi.innerHTML = `
        <a href="#">
            <img src="${liContents[i].imgSrc}" alt="${liContents[i].altText}">
        </a>
        <div class="newest_bottom">
            <div class="yellow_text">
                <a href="#">${liContents[i].yellowText1}</a>
                <a href="#">${liContents[i].yellowText2}</a>
            </div>
            <p class="main_text"><a href="#">${liContents[i].mainText}</a></p>
            <p class="day_text">${liContents[i].dayText}</p>
        </div>`;

        fragment.append(newLi); // newLi 요소를 fragment의 내부 제일 끝부분에 넣어줌
    }

    // <ul> 요소에 새로운 <li> 요소를 추가
    ul.append(fragment); // fragment 요소를 ul의 내부 제일 끝부분에 넣어줌

    startIndex += 4; // 시작 인덱스를 4만큼 증가, 증가 시켜야지 다음 클릭시에는 4만큼 증가된 값을 가져옴 ( startIndex = startIndex + 4 와 같은 의미 )

    // 더이상 출력할 내용이 없을 경우 btnMore에 'more_end' 클래스를 추가
    if (startIndex >= liContents.length) { // 시작 인덱스가 배열의 길이보다 크거나 같다면 즉, 출력할 내용이 없다면
        btnMore.classList.add('more_end');
    }
});

// btnMore end!