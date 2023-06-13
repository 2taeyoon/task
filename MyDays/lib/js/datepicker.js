// CALENDAR D-DAY JQUERY CODE START!
const dDayTopTitle = document.querySelectorAll('.d_day_select_top_title');
const currentYear = new Date().getFullYear();
let selectedDayData; // 공통된 selectedDayData 값
let selectedDayData1;
let selectedDayData2;
let selectedDayData3;
let selectedDayData4;

$(function() {
    $("#date_d_day1").datepicker({
        yearRange: `2010:${currentYear}`,
        onSelect: function() {
            let selectedDate = $("#date_d_day1").datepicker('getDate');
            let selectedDatePrint = new Date($("#date_d_day1").datepicker('getDate'));
            
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
            selectedDayData = selectedDatePrint;
            selectedDayData1 = selectedDatePrint;
        }
    });
});

$(function() {
    $("#date_d_day2").datepicker({
        yearRange: `1900:${currentYear}`,
        onSelect: function() {
            let selectedDate = $("#date_d_day2").datepicker('getDate');
            let selectedDatePrint = new Date($("#date_d_day2").datepicker('getDate'));
            let currentDate = new Date();

            selectedDate.setHours(0, 0, 0, 0);
            currentDate.setHours(0, 0, 0, 0);
            
            let timeDifference = currentDate.getTime() - selectedDate.getTime();
            let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

            let yearsDifference = Math.floor(daysDifference / 365);
            
            // 현재 날짜의 달이 선택한 날짜의 달보다 크거나 같을 경우 && 현재 날짜의 일이 선택한 날짜의 일보다 크거나 같을 경우
            let isBirthdayPassed = (currentDate.getMonth() >= selectedDate.getMonth()) && (currentDate.getDate() >= selectedDate.getDate());
            if (!isBirthdayPassed) yearsDifference -= 1;

            if (yearsDifference < 0) {
                dDayTopTitle[1].innerHTML = '만 0살';
            } else {
                dDayTopTitle[1].innerHTML = `만 ${yearsDifference.toString()}살`;
            }
            selectedDayData = selectedDatePrint;
            selectedDayData2 = selectedDatePrint;
        }
    });
});

$(function() {
    $("#date_d_day3").datepicker({
        yearRange: `2020:${currentYear}`,
        onSelect: function() {
            let selectedDate = $("#date_d_day3").datepicker('getDate');
            let selectedDatePrint = new Date($("#date_d_day3").datepicker('getDate'));
            let currentDate = new Date();

            selectedDate.setHours(0, 0, 0, 0);
            currentDate.setHours(0, 0, 0, 0);
            
            let timeDifference = currentDate.getTime() - selectedDate.getTime();
            let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

            let monthsDifference = Math.floor(daysDifference / 30);
            
            if (monthsDifference < 0) {
                dDayTopTitle[2].innerHTML = '0개월';
            } else {
                dDayTopTitle[2].innerHTML = `${monthsDifference.toString()}개월`;
            }
            selectedDayData = selectedDatePrint;
            selectedDayData3 = selectedDatePrint;
        }
    });
});

$(function() {
    $("#date_d_day4").datepicker({
        yearRange: `1950:${currentYear}`,
        onSelect: function() {
            let selectedDate = $("#date_d_day4").datepicker('getDate');
            let selectedDatePrint = new Date($("#date_d_day4").datepicker('getDate'));
            let currentDate = new Date();

            selectedDate.setHours(0, 0, 0, 0);
            currentDate.setHours(0, 0, 0, 0);
            
            let timeDifference = currentDate.getTime() - selectedDate.getTime();
            let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

            let yearsDifference = Math.floor(daysDifference / 365);

            let isYearsdayPassed = (currentDate.getMonth() >= selectedDate.getMonth()) && (currentDate.getDate() >= selectedDate.getDate());
            if (!isYearsdayPassed) yearsDifference -= 1;

            if (yearsDifference < 1) {
                dDayTopTitle[3].innerHTML = `0주년`;
            } else {
                dDayTopTitle[3].innerHTML = `${yearsDifference}주년`;
            }
            selectedDayData = selectedDatePrint;
            selectedDayData4 = selectedDatePrint;
        }
    });
}); 
// CALENDAR D-DAY JQUERY CODE END!


// CALENDAR COMMON JQUERY CODE START!
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
// CALENDAR COMMON JQUERY CODE END!



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
const dDaySelectTop = document.querySelectorAll('.d_day_select_top');
const dDaySelectBottomTextCommon = document.querySelectorAll('.d_day_select_bottom_text_common');

whichDayContent.forEach((selectList, index)=>{
    selectList.addEventListener('click',() => {
        subDayList.forEach((dayList) => {
            dayList.classList.remove('active');
        });
        subDayList[index].classList.add('active');
    });
});


// SUBDAYLIST POPUP창에서 
closeBtn.forEach((dayBtn, index)=>{
    dayBtn.addEventListener('click',()=>{
        subDayList.forEach((dayList)=>{
            dayList.classList.remove('active');
        });
        // SUBDAYLIST POPUP창에서 closeBtn 클릭 시 입력 초기화
        initialDDay(index);
    });
});
// SUBDAYLIST POPUP END!



// ICON POPUP START!
const subDayListWraps = document.querySelectorAll('.sub_day_list_wrap');
const iconsBox = document.querySelectorAll('.icons_box');
const iconListWrap = document.querySelectorAll('.icon_list_wrap');
const dDaySave = document.querySelectorAll('.d_day_select_save_bth');


// VALIDATE ON SAVE START!
const validation = (index)=>{
    if(selectedDayData == undefined && dDaySelectBottomTextCommon[index].value == ''){
        return alert('날짜를 선택하고 디데이 제목을 입력해주세요.');
    } else if(selectedDayData == undefined) {
        return alert('날짜를 선택해주세요.');
    } else if(dDaySelectBottomTextCommon[index].value == '') {
        return alert('디데이 제목을 입력해주세요');
    } else {
        subDayList.forEach((dayList) => {
            dayList.classList.remove('active');
        });
        selectDay.classList.remove('active');
    }
}
// VALIDATE ON SAVE END!


//INITIALIZE THE D-DAY WINDOW START!
const initialDDay = (index)=>{
    dDaySelectTop[index].style.background = `url('./lib/img/d_day_con0${index + 1}.jpg') no-repeat center / cover`;
    dDaySelectBottomTextCommon[index].value = '';
    iconsBox[index].style.background = `url('./lib/img/d_day_icon01.png') no-repeat center / cover`;
    dDayTopTitle[0].innerHTML = 'D-day';
    dDayTopTitle[1].innerHTML = '만 0살';
    dDayTopTitle[2].innerHTML = '0 개월';
    dDayTopTitle[3].innerHTML = '0주년<span>(0개월)</span>';
    $(".date_common").datepicker('setDate', 'today');
}
//INITIALIZE THE D-DAY WINDOW END!


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


// ICON POPUP START!
subDayListWraps.forEach((subDayListWrap) => {
    const iconList = subDayListWrap.querySelector('.icon_list');
    const iconListLis = subDayListWrap.querySelectorAll('.icon_list_li');
    const wrapIconsBox = subDayListWrap.querySelector('.icons_box');
    const iconListWrap = subDayListWrap.querySelector('.icon_list_wrap');

    iconListLis.forEach((iconListLi) => {
        iconListLi.addEventListener('click', () => {
            const dataImage = iconListLi.getAttribute('data-image');
            wrapIconsBox.style.background = `url('./lib/img/${dataImage}') center center / cover no-repeat `;
            iconListWrap.classList.remove('active');
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


// CLICK THE SAVE BUTTON START!
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBCm61JzZJansIuyg35MWcqfrlqP8iQXvE",
    authDomain: "mydays-portfolio.firebaseapp.com",
    projectId: "mydays-portfolio",
    storageBucket: "mydays-portfolio.appspot.com",
    messagingSenderId: "825574572940",
    appId: "1:825574572940:web:f3383cf02cbb2e9526cca9"
};

const app = initializeApp(firebaseConfig); // Firebase 초기화
const auth = getAuth(); // 사용자 인증 정보 가져오기
const database = getDatabase(app, 'https://mydays-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/'); // FIREBASE REALTIME DATABASE


dDaySave.forEach((saveBtn, index) => {
    saveBtn.addEventListener('click', () => {

        validation(index);

        const dDayContent = document.querySelector('.d_day_content');
        const newDayLi = document.createElement('li');
        
        const backgroundImage = getComputedStyle(dDayTopImages[index]).backgroundImage;
        const imageUrl = backgroundImage.match(/url\(["']?([^"']+)["']?\)/)[1];

        const iconImage = getComputedStyle(iconsBox[index]).backgroundImage;
        const iconUrl = iconImage.match(/url\(["']?([^"']+)["']?\)/)[1];

        const year = selectedDayData.getFullYear();
        const month = selectedDayData.getMonth() + 1; // getMonth()는 0부터 시작해서 +1
        const day = selectedDayData.getDate();
        const formattedDate = `${year}년 ${month < 10 ? '0' + month : month}월 ${day < 10 ? '0' + day : day}일`;

        
        //console.log('selectedDayData1',selectedDayData1);
        if(index === 0){

            let currentDate = new Date();

            selectedDayData1.setHours(0, 0, 0, 0);
            currentDate.setHours(0, 0, 0, 0);
            
            let timeDifference = currentDate.getTime() - selectedDayData1.getTime();
            let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

            if (daysDifference == 0) {
                `D-Day`;
            } else if (daysDifference > 0) {
                daysDifference = `${daysDifference.toString()}일`;
            } else if (daysDifference < 0) {
                daysDifference = `D${daysDifference.toString()}`;
            }

            newDayLi.innerHTML = `
                <div class="d_day_content_bg" style="background: url(${imageUrl}) no-repeat center / cover;">
                    <div class="d_day_text">
                        <div class="d_day_text_icon" style="background: url(${iconUrl}) no-repeat center / 45px;"></div>
                        <div class="d_day_text_wrap">
                            <h4 class="d_day_text_title">${dDaySelectBottomTextCommon[0].value}</h4>
                            <div class="d_day_text_sub">
                                <div>${formattedDate}</div>
                            </div>
                        </div>
                    </div>
                    <h3 class="d_day_bottom">${daysDifference}</h3>
                </div>
            `;
            dDayContent.prepend(newDayLi);
            
        } else if(index === 1){

            let currentDate = new Date();

            selectedDayData2.setHours(0, 0, 0, 0);
            currentDate.setHours(0, 0, 0, 0);
            
            let timeDifference = currentDate.getTime() - selectedDayData2.getTime();
            let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

            let yearsDifference = Math.floor(daysDifference / 365);
            
            // 선택한 날짜의 달이 현재 날짜의 달보다 작거나 같을 경우 && 선택한 날짜의 일이 현재 날짜의 일보다 작거나 같을 경우
            let isBirthdayPassed = (selectedDayData2.getMonth() <= currentDate.getMonth()) && (selectedDayData2.getDate() <= currentDate.getDate());
            if (!isBirthdayPassed) yearsDifference -= 1;

            if (yearsDifference < 0) {
                yearsDifference = '만 0살';
            } else {
                yearsDifference = `만 ${yearsDifference.toString()}살`;
            }

            newDayLi.innerHTML = `
                <div class="d_day_content_bg" style="background: url(${imageUrl}) no-repeat center / cover;">
                    <div class="d_day_text">
                        <div class="d_day_text_icon" style="background: url(${iconUrl}) no-repeat center / 45px;"></div>
                        <div class="d_day_text_wrap">
                            <h4 class="d_day_text_title">${dDaySelectBottomTextCommon[1].value}</h4>
                            <div class="d_day_text_sub">
                                <div>${formattedDate}</div>
                            </div>
                        </div>
                    </div>
                    <h3 class="d_day_bottom">${yearsDifference}</h3>
                </div>
            `;
            dDayContent.prepend(newDayLi);

        } else if(index === 2){

            let currentDate = new Date();

            selectedDayData3.setHours(0, 0, 0, 0);
            currentDate.setHours(0, 0, 0, 0);
            
            let timeDifference = currentDate.getTime() - selectedDayData3.getTime();
            let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

            let monthsDifference = Math.floor(daysDifference / 30);
            
            if (monthsDifference < 0) {
                monthsDifference = '0개월';
            } else {
                monthsDifference = `${monthsDifference.toString()}개월`;
            }

            newDayLi.innerHTML = `
                <div class="d_day_content_bg" style="background: url(${imageUrl}) no-repeat center / cover;">
                    <div class="d_day_text">
                        <div class="d_day_text_icon" style="background: url(${iconUrl}) no-repeat center / 45px;"></div>
                        <div class="d_day_text_wrap">
                            <h4 class="d_day_text_title">${dDaySelectBottomTextCommon[2].value}</h4>
                            <div class="d_day_text_sub">
                                <div>${formattedDate}</div>
                            </div>
                        </div>
                    </div>
                    <h3 class="d_day_bottom">${monthsDifference}</h3>
                </div>
            `;
            dDayContent.prepend(newDayLi);
            
        } else if(index === 3){

            let currentDate = new Date();

            selectedDayData4.setHours(0, 0, 0, 0);
            currentDate.setHours(0, 0, 0, 0);
            
            let timeDifference = currentDate.getTime() - selectedDayData4.getTime();
            let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

            let yearsDifference = Math.floor(daysDifference / 365);

            let isYearsdayPassed = (currentDate.getMonth() >= selectedDayData4.getMonth()) && (currentDate.getDate() >= selectedDayData4.getDate());
            if (!isYearsdayPassed) yearsDifference -= 1;

            if (yearsDifference < 1) {
                yearsDifference = `0주년`;
            } else {
                yearsDifference = `${yearsDifference}주년`;
            }

            newDayLi.innerHTML = `
                <div class="d_day_content_bg" style="background: url(${imageUrl}) no-repeat center / cover;">
                    <div class="d_day_text">
                        <div class="d_day_text_icon" style="background: url(${iconUrl}) no-repeat center / 45px;"></div>
                        <div class="d_day_text_wrap">
                            <h4 class="d_day_text_title">${dDaySelectBottomTextCommon[3].value}</h4>
                            <div class="d_day_text_sub">
                                <div>${formattedDate}</div>
                            </div>
                        </div>
                    </div>
                    <h3 class="d_day_bottom">${yearsDifference}</h3>
                </div>
            `;
            dDayContent.prepend(newDayLi);
        }
        initialDDay(index);
    });
});
// CLICK THE SAVE BUTTON END!