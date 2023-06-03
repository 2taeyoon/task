// Calendar D-Day Jquery Code Start! 
const dDayTopTitle = document.querySelectorAll('.d_day_select_top_title');
const currentYear = new Date().getFullYear();

$(function() {
    $("#date_d_day1").datepicker({
        yearRange: `2000:${currentYear}`,
        onSelect: function() {
            let selectedDate = $("#date_d_day1").datepicker('getDate');
            let currentDate = new Date();

            selectedDate.setHours(0, 0, 0, 0);
            currentDate.setHours(0, 0, 0, 0);
            
            let timeDifference = currentDate.getTime() - selectedDate.getTime();
            let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

            if (daysDifference == 0) {
                dDayTopTitle[0].innerHTML = 'D-Day';
            } else if (daysDifference > 0) {
                dDayTopTitle[0].innerHTML = `${daysDifference.toString()}일`;
            } else if (daysDifference < 0) {
                dDayTopTitle[0].innerHTML = `D${daysDifference.toString()}`;
            }
        }
    });
});

$(function() {
    $("#date_d_day2").datepicker({
        yearRange: `1900:${currentYear}`,
        onSelect: function() {
            let selectedDate = $("#date_d_day2").datepicker('getDate');
            let currentDate = new Date();

            selectedDate.setHours(0, 0, 0, 0);
            currentDate.setHours(0, 0, 0, 0);
            
            let timeDifference = currentDate.getTime() - selectedDate.getTime();
            let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

            let yearsDifference = Math.floor(daysDifference / 365);
            
            // 선택한 날짜의 달이 현재 날짜의 달보다 작거나 같을 경우 && 선택한 날짜의 일이 현재 날짜의 일보다 작거나 같을 경우
            let isBirthdayPassed = (selectedDate.getMonth() <= currentDate.getMonth()) && (selectedDate.getDate() <= currentDate.getDate());
            if (!isBirthdayPassed) yearsDifference -= 1;

            if (yearsDifference < 0) {
                dDayTopTitle[1].innerHTML = '만 0살';
            } else {
                dDayTopTitle[1].innerHTML = `만 ${yearsDifference}살`;
            }
        }
    });
});
// Calendar D-Day Jquery Code End!


// Calendar Common Jquery Code Start!
$(function() {
    $(".date_common").on("focus", function() {
        $(this).datepicker("widget").css({
            display: "block",
            position: "absolute",
            top: "unset",
            left: "0",
            bottom: "0",
        });
    });

    $(".date_common").prop("readOnly", true);
    $(".date_common").datepicker('setDate', 'today');
});

$.datepicker.setDefaults({
    dateFormat: 'yy년 mm월 dd일',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년',
    changeYear: true,
    changeMonth: true,
});
// Calendar Common Jquery Code End!







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

// ICON POPUP START!
const subDayListWraps = document.querySelectorAll('.sub_day_list_wrap');
const iconsBox = document.querySelectorAll('.icons_box');
const iconListWrap = document.querySelectorAll('.icon_list_wrap');
const iconListLi = document.querySelectorAll('.icon_list_li');
const dDaySave = document.querySelectorAll('.d_day_select_save_bth');

dDaySave.forEach((saveBtn) => {
    saveBtn.addEventListener('click', () => {
        subDayList.forEach((dayList) => {
            dayList.classList.remove('active');
        });
        selectDay.classList.remove('active');
    });
});

subDayListWraps.forEach((subDayListWrap) => {
    const iconList = subDayListWrap.querySelector('.icon_list');
    const iconListLis = subDayListWrap.querySelectorAll('.icon_list_li');
    const iconsBox = subDayListWrap.querySelector('.icons_box');

    iconListLis.forEach((iconListLi) => {
        iconListLi.addEventListener('click', () => {
            const dataImage = iconListLi.getAttribute('data-image');
            iconsBox.style.background = `url('./lib/img/${dataImage}') center center / cover no-repeat `;
        });
    });

    iconList.addEventListener('click', (event)=>{
        event.stopPropagation();
    });
});

iconsBox.forEach((boxList, index) => {
    boxList.addEventListener('click', () => {
        iconListWrap.forEach((iconList) => {
            iconList.classList.remove('active');
        });
        iconListWrap[index].classList.add('active');
    });
});

iconListWrap.forEach((iconWrap) => {
    iconWrap.addEventListener('click', () => {
        iconWrap.classList.remove('active');
    });
});
// ICON POPUP END!


// INPUT FILE SRC IMPORT START!
const dDdayUploads = document.querySelectorAll('.upload_img_common');
const dDayTopImages = document.querySelectorAll('.d_day_select_top');

dDdayUploads.forEach((upload, index)=>{
    upload.addEventListener('change', (event)=>{
        const file = event.target.files[0]; // 내가 선택한 첫번째 파일을 객체 형태로 가져옴
        const fileReader = new FileReader(); // 파일 리더기 객체 생성

        fileReader.onload = (load) => { // 파일 리더기가 로드되었을 때 실행되는 함수
            const imageUrl = load.target.result; // 로드된 파일의 Url
            dDayTopImages[index].style.background = `url(${imageUrl}) no-repeat center / cover`;
        };
        fileReader.readAsDataURL(file); // 내가 선택한 첫번째 파일의 객체의 Url을 문자열로 읽어라
    });
});
// INPUT FILE SRC IMPORT END!