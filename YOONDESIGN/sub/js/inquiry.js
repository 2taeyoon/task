const agree = document.getElementById('agree');
const agreeSpan = document.querySelector('.agree_right > span');
const yourName = document.getElementById('name');
const phone1 = document.getElementById('phone1');
const phone2 = document.getElementById('phone2');
const phone3 = document.getElementById('phone3');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const description = document.getElementById('description');
//const recaptcha = document.querySelector('.g-recaptcha');
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

agree.addEventListener('change', () => {
    if (agree.checked) {
        agreeSpan.classList.add('active');
    } else {
        agreeSpan.classList.remove('active');
    }
});

const stopSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
}

let isCheck = false;
function captchaCheck(){
    isCheck = true;
}

function restrict(event) {
    const input = event.target;
    const removeValue = input.value.replace(/[^0-9]/g, '');
    if (removeValue !== input.value) {
        input.value = removeValue;
        alert('숫자만 입력할 수 있습니다.');
    }
}

phone1.addEventListener('input', restrict);
phone2.addEventListener('input', restrict);
phone3.addEventListener('input', restrict);

const submitOk = () => {
    if (!yourName.value || !phone1.value || !phone2.value || !phone3.value || !email.value || !subject.value || !description.value) {
        return alert("모든 필드를 입력해주세요.");
    } else if (agree.checked === false) {
        return alert('개인정보의 수집 및 이용목적에 동의해주세요.');
    } else if (!emailRegex.test(email.value)) {
        return alert('올바른 이메일 주소를 입력해주세요.');
    } else {
        //recaptcha.classList.add('on');
        alert("미구현");
    }
    

    // if(recaptcha && !isCheck){
    //     alert("'로봇이 아닙니다'를 체크해주세요.");
    //     return false;
    // } else {
    //     yourName.value = "";
    //     phone1.value = "";
    //     phone2.value = "";
    //     phone3.value = "";
    //     email.value = "";
    //     subject.value = "";
    //     description.value = "";
    //     agree.checked = false;
    //     //recaptcha.classList.remove('on');

    //     alert("미구현");
    //     return true;
    // }
}