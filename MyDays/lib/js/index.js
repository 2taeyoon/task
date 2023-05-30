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