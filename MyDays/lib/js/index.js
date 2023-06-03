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