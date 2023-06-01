const tabList = ['디데이', '더보기'];

let swiper = new Swiper(".content_swiper", {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}">${ tabList[0 + index] }</span>`;
        }
    },
});


const dayAdd = document.getElementById('d_day_add');
const selectDay = document.getElementById('select_d_day');
const selectDayBtn = document.querySelector('.select_d_day_btn');

dayAdd.addEventListener('click', ()=>{
    selectDay.classList.add('active');
});

selectDayBtn.addEventListener('click', ()=>{
    selectDay.classList.remove('active');
})


const whichDayContent = document.querySelectorAll('.which_day_content > li');
const subDayList = document.querySelectorAll('.sub_day_list > li');
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