// MAIN SWIPER START!
const tabList = ['디데이', '더보기'];

let swiper = new Swiper(".content_swiper", {
    direction: 'horizontal',
    loop: true,
    touchRatio: 0,
    
    pagination: {
        el: '.swiper-d-day',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}">${ tabList[0 + index] }</span>`;
        }
    },
});
// MAIN SWIPER END!


// SELECT D-DAY POPUP START!
const dayAdd = document.getElementById('d_day_add');
const selectDay = document.getElementById('select_d_day');
const selectDayBtn = document.querySelector('.select_d_day_btn');

dayAdd.addEventListener('click', ()=>{
    selectDay.classList.add('active');
});

selectDayBtn.addEventListener('click', ()=>{
    selectDay.classList.remove('active');
})
// SELECT D-DAY POPUP END!


// SUBDAYLIST POPUP START!
const whichDayContent = document.querySelectorAll('.which_day_content > li');
const subDayList = document.querySelectorAll('.sub_day_list .sub_day_list_li');
const closeBtn = document.querySelectorAll('.sub_day_list .close_btn');

whichDayContent.forEach((selectList, index)=>{
    selectList.addEventListener('click',() => {
        subDayList.forEach((dayList) => {
            dayList.classList.remove('active');
        });
        subDayList[index].classList.add('active');
    });
});

closeBtn.forEach((dayBtn)=>{
    dayBtn.addEventListener('click',()=>{
        subDayList.forEach((dayList)=>{
            dayList.classList.remove('active');
        });
    });
});
// SUBDAYLIST POPUP END!


// INPUT FILE SRC IMPORT START!
const dDdayUpload = document.getElementById('upload_img');
const dDayTopImage = document.querySelectorAll('.d_day_select_top');

dDdayUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
        const imageUrl = e.target.result;
        dDayTopImage[0].style.background = `url(${imageUrl}) no-repeat center / cover`;
    };

    fileReader.readAsDataURL(file);
});
// INPUT FILE SRC IMPORT END!


// ICON POPUP START!

const iconsBox = document.querySelectorAll('.icons_box');
const iconListWrap = document.querySelectorAll('.icon_list_wrap');
//const iconListWrap = .querySelectorAll('.icon_list_wrap');

iconsBox.forEach((boxList, index)=>{
    boxList.addEventListener('click',() => {
        iconListWrap.forEach((iconList) => {
            iconList.classList.remove('active');
        });
        iconListWrap[index].classList.add('active');
    });
});

iconListWrap.forEach((iconWrap)=>{
    iconWrap.addEventListener('click',()=>{
        iconWrap.classList.remove('active');
    });
});

// ICON POPUP END!