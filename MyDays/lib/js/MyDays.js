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


// LOGOUT START!
const userNickname = document.getElementById('user_nickname');
const logout = document.querySelector('.logout');
const logoutBg = document.querySelector('.logout_bg');
const logoutWrap = document.querySelector('.logout_wrap');
const logoutCancel = document.querySelector('.logout_cancel');

logout.addEventListener('click', ()=>{
    localStorage.removeItem('loginUserUid');
    location.replace('./index.html');
});

userNickname.addEventListener('click', ()=>{
    logoutBg.classList.add('active');
});

logoutBg.addEventListener('click', ()=>{
    logoutBg.classList.remove('active');
});

logoutCancel.addEventListener('click', ()=>{
    logoutBg.classList.remove('active');
});

logoutWrap.addEventListener('click', (event)=>{
    event.stopPropagation();
});
// LOGOUT END!


// NO UNIQUE UID VALUE START!
const uidLocalStorage = localStorage.getItem('loginUserUid');
if(uidLocalStorage === null){
    alert('로그인 후에 이용해주세요.');
    location.replace('./index.html');
}
// NO UNIQUE UID VALUE END!