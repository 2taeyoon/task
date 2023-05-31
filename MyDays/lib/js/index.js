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
const closeBtn = document.querySelector('.close_btn');

dayAdd.addEventListener('click', ()=>{
    selectDay.classList.add('active');
});

closeBtn.addEventListener('click', ()=>{
    selectDay.classList.remove('active');
})