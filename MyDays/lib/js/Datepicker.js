// Calendar D-Day jquery code start!
const dDayTopTitle = document.querySelectorAll('.d_day_select_top_title');
const currentYear = new Date().getFullYear();
let selectedDayData; // Common selectedDayData value
let selectedDayData1; // Each selectedDayData value
let selectedDayData2; // Each selectedDayData value
let selectedDayData3; // Each selectedDayData value
let selectedDayData4; // Each selectedDayData value

$(function() {
    $("#date_d_day1").datepicker({
        yearRange: `2010:2025`,
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
// Calendar D-Day jquery code end!


// Calendar common jquery code start!
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
// Calendar common jquery code end!



// Select D-Day Popup start!
const dayAdd = document.getElementById('d_day_add');
const selectDay = document.getElementById('select_d_day');
const selectDayBtn = document.querySelector('.select_d_day_btn');

dayAdd.addEventListener('click', ()=>{
    selectDay.classList.add('active');
});

selectDayBtn.addEventListener('click', ()=>{
    selectDay.classList.remove('active');
})
// Select D-Day Popup end!



// SubDayList popup start!
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


// SubDayList popup window
closeBtn.forEach((dayBtn, index)=>{
    dayBtn.addEventListener('click',()=>{
        subDayList.forEach((dayList)=>{
            dayList.classList.remove('active');
        });
        initialDDay(index); // SubDayList Popup Window CloseBtn Click Input Initialize
    });
});
// SubDayList popup end!


// Validate on save start!
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
// Validate on save end!


//Initialize the D-Day window start!
const initialDDay = (index)=>{
    dDaySelectTop[index].style.background = `url('./lib/img/d_day_con0${index + 1}.jpg') no-repeat center / cover`;
    dDaySelectBottomTextCommon[index].value = '';
    iconsBox[index].style.background = `url('./lib/img/d_day_icon01.png') no-repeat center / cover`;
    dDayTopTitle[0].innerHTML = 'D-Day';
    dDayTopTitle[1].innerHTML = '만 0살';
    dDayTopTitle[2].innerHTML = '0 개월';
    dDayTopTitle[3].innerHTML = '0주년';
    $(".date_common").datepicker('setDate', 'today');
}
//Initialize the D-Day window end!


// Input file src import start!
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
// Input file src import end!


// Icon popup start!
const subDayListWraps = document.querySelectorAll('.sub_day_list_wrap');
const iconsBox = document.querySelectorAll('.icons_box');
const iconListWrap = document.querySelectorAll('.icon_list_wrap');
const dDaySave = document.querySelectorAll('.d_day_select_save_bth');

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
// Icon popup end!


// Click the firebase save button start!
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push, onValue, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBCm61JzZJansIuyg35MWcqfrlqP8iQXvE",
    authDomain: "mydays-portfolio.firebaseapp.com",
    projectId: "mydays-portfolio",
    storageBucket: "mydays-portfolio.appspot.com",
    messagingSenderId: "825574572940",
    appId: "1:825574572940:web:f3383cf02cbb2e9526cca9"
};

const app = initializeApp(firebaseConfig); // Firebase Initialize
const database = getDatabase(app, 'https://mydays-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/'); // Firebase Realtime Database

const uidUserJSON = localStorage.getItem('loginUserUid');
const uidUser = JSON.parse(uidUserJSON);
const dDayListRef = ref(database, `users/${uidUser}/DDayList`);


dDaySave.forEach((saveBtn, index) => {
    saveBtn.addEventListener('click', () => {

        validation(index); // 유효성 검사

        const backgroundImage = getComputedStyle(dDayTopImages[index]).backgroundImage;
        const imageUrl = backgroundImage.match(/url\(["']?([^"']+)["']?\)/)[1];

        const iconImage = getComputedStyle(iconsBox[index]).backgroundImage;
        const iconUrl = iconImage.match(/url\(["']?([^"']+)["']?\)/)[1];

        const year = selectedDayData.getFullYear();
        const month = selectedDayData.getMonth() + 1; // getMonth()는 0에서 시작하므로 + 1
        const day = selectedDayData.getDate();
        const formattedDate = `${year}년 ${month < 10 ? '0' + month : month}월 ${day < 10 ? '0' + day : day}일`;
        const value = dDaySelectBottomTextCommon[index].value;

        if(index === 0){

            selectedDayData1.setHours(0, 0, 0, 0);
            let saveDDay1 = selectedDayData1.toString(); // 나중에 랜더링시 현재 데이트와 값을 비교해서 날짜를 다시 출력하기 위한 변수
            push(dDayListRef, { imageUrl, iconUrl, formattedDate, value, saveDDay1 }); // key와 value가 같으면 하나로 생략 가능

        } else if(index === 1){

            selectedDayData2.setHours(0, 0, 0, 0);
            let saveDDay2 = selectedDayData2.toString(); // 나중에 랜더링시 현재 데이트와 값을 비교해서 날짜를 다시 출력하기 위한 변수
            push(dDayListRef, { imageUrl, iconUrl, formattedDate, value, saveDDay2 }); // key와 value가 같으면 하나로 생략 가능

        } else if(index === 2){

            selectedDayData3.setHours(0, 0, 0, 0);
            let saveDDay3 = selectedDayData3.toString();; // 나중에 랜더링시 현재 데이트와 값을 비교해서 날짜를 다시 출력하기 위한 변수
            push(dDayListRef, { imageUrl, iconUrl, formattedDate, value, saveDDay3 }); // key와 value가 같으면 하나로 생략 가능
            
        } else if(index === 3){

            selectedDayData4.setHours(0, 0, 0, 0);
            let saveDDay4 = selectedDayData4.toString(); // 나중에 랜더링시 현재 데이트와 값을 비교해서 날짜를 다시 출력하기 위한 변수
            push(dDayListRef, { imageUrl, iconUrl, formattedDate, value, saveDDay4 }); // key와 value가 같으면 하나로 생략 가능

        }
        initialDDay(index);
    });
});
// Click the firebase save button end!


// Firebase d-day rendering start!
const dDayContent = document.querySelector('.d_day_content');
const scrollInitial = document.querySelector('.wrap main .content_swiper .swiper-wrapper .main_content01');


const reRendering = () => {
    onValue(dDayListRef, (snapshot) => {
        const dDayDataList = snapshot.val(); // dDayListRef에 존재하는 모든 데이터에 접근

        dDayContent.innerHTML = ''; // 처음에 초기화를 해주고 랜더링해야 중복 추가가 이루어지지 않음

        if (dDayDataList) { // 데이터가 존재하는 경우에만 실행 되도록
            Object.keys(dDayDataList).forEach((key) => {
                const dDayData = dDayDataList[key]; // 각각의 리스트

                const imageUrl = dDayData.imageUrl;
                const iconUrl = dDayData.iconUrl;
                const formattedDate = dDayData.formattedDate;
                const value = dDayData.value;

                const saveCompairing1 = dDayData.saveDDay1; // 1번째 디데이 만들 때 선택한 날짜 값
                const saveCompairing2 = dDayData.saveDDay2; // 2번째 디데이 만들 때 선택한 날짜 값
                const saveCompairing3 = dDayData.saveDDay3; // 3번째 디데이 만들 때 선택한 날짜 값
                const saveCompairing4 = dDayData.saveDDay4; // 4번째 디데이 만들 때 선택한 날짜 값

                let printDayDifference; // 실제로 출력할 변수
                let currentDate = new Date(); // 로컬 현재 날짜
                currentDate.setHours(0, 0, 0, 0); // 로컬 시간 초기화

                if(saveCompairing1){

                    let printDDay1 = new Date(saveCompairing1); // 선택 날짜를 계산할 변수
                    printDDay1.setHours(0, 0, 0, 0);

                    let timeDifference = currentDate.getTime() - printDDay1.getTime();
                    let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
        
                    if (daysDifference == 0) {
                        daysDifference = `D-Day`;
                    } else if (daysDifference > 0) {
                        daysDifference = `${daysDifference.toString()}일`;
                    } else if (daysDifference < 0) {
                        daysDifference = `D${daysDifference.toString()}`;
                    }
                    printDayDifference = daysDifference; // 실제 출력될 값

                } else if(saveCompairing2){

                    let printDDay2 = new Date(saveCompairing2); // 선택 날짜를 계산할 변수
                    printDDay2.setHours(0, 0, 0, 0);

                    let timeDifference = currentDate.getTime() - printDDay2.getTime();
                    let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

                    let yearsDifference = Math.floor(daysDifference / 365);
                    
                    // 선택한 날짜의 달이 현재 날짜의 달보다 작거나 같을 경우 && 선택한 날짜의 일이 현재 날짜의 일보다 작거나 같을 경우
                    let isBirthdayPassed = (printDDay2.getMonth() <= currentDate.getMonth()) && (printDDay2.getDate() <= currentDate.getDate());

                    if (!isBirthdayPassed) yearsDifference -= 1;

                    if (yearsDifference < 0) {
                        yearsDifference = '만 0살';
                    } else {
                        yearsDifference = `만 ${yearsDifference.toString()}살`;
                    }
                    printDayDifference = yearsDifference; // 실제 출력될 값

                } else if(saveCompairing3){

                    let printDDay3 = new Date(saveCompairing3); // 선택 날짜를 계산할 변수
                    printDDay3.setHours(0, 0, 0, 0);

                    let timeDifference = currentDate.getTime() - printDDay3.getTime();
                    let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
        
                    let monthsDifference = Math.floor(daysDifference / 30);
                    
                    if (monthsDifference < 0) {
                        monthsDifference = '0개월';
                    } else {
                        monthsDifference = `${monthsDifference.toString()}개월`;
                    }
                    printDayDifference = monthsDifference; // 실제 출력될 값

                } else if(saveCompairing4){

                    let printDDay4 = new Date(saveCompairing4); // 선택 날짜를 계산할 변수
                    printDDay4.setHours(0, 0, 0, 0);

                    let timeDifference = currentDate.getTime() - printDDay4.getTime();
                    let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

                    let yearsDifference = Math.floor(daysDifference / 365);

                    let isYearsdayPassed = (currentDate.getMonth() >= printDDay4.getMonth()) && (currentDate.getDate() >= printDDay4.getDate());
                    if (!isYearsdayPassed) yearsDifference -= 1;

                    if (yearsDifference < 1) {
                        yearsDifference = `0주년`;
                    } else {
                        yearsDifference = `${yearsDifference}주년`;
                    }
                    printDayDifference = yearsDifference; // 실제 출력될 값
                }

                const newDayLi = document.createElement('li');
                newDayLi.innerHTML = `
                    <div class="d_day_content_bg" style="background: url(${imageUrl}) no-repeat center / cover;">
                        <div class="d_day_text">
                            <div class="d_day_text_icon" style="background: url(${iconUrl}) no-repeat center / 45px;"></div>
                            <div class="d_day_text_wrap">
                                <h4 class="d_day_text_title">${value}</h4>
                                <div class="d_day_text_sub">
                                    <div>${formattedDate}</div>
                                </div>
                            </div>
                        </div>
                        <div class="d_day_remove_btn"></div>
                        <h3 class="d_day_bottom">${printDayDifference}</h3>
                    </div>
                `;
                dDayContent.prepend(newDayLi);
                scrollInitial.scrollTop = 0;

                const removeBtn = newDayLi.querySelector('.d_day_remove_btn');
                removeBtn.addEventListener('click', () => {
                    // 데이터 베이스에 저장된 선택된 Realtime Database 삭제
                    const dataRef = ref(database, `users/${uidUser}/DDayList/${key}`);
                    set(dataRef, null)
                        .then(() => {
                            reRendering(); // 데이터가 존재할 때 아이템이 삭제되면 reRendering 실행
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                });

                dDayContent.prepend(newDayLi);
                scrollInitial.scrollTop = 0;
                
            });
        } else { // 데이터가 없을 경우에도 삭제 버튼 이벤트 등록(이걸 안하면 데이터가 1개 남았을 때 삭제하면 reRendering 되지 않음)
            const removeBtn = document.createElement('div');
            removeBtn.classList.add('d_day_remove_btn');
            removeBtn.addEventListener('click', () => {
                // 데이터 베이스에 저장된 선택된 Realtime Database 삭제
                const dataRef = ref(database, `users/${uidUser}/DDayList/${key}`);
                set(dataRef, null)
                    .then(() => {
                        reRendering(); // 데이터가 없을 경우에도 reRendering 실행
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            });
        }
    });
};

reRendering(); // 최초에 Firebase Realtime Database 랜더링
// // Firebase d-day rendering end!