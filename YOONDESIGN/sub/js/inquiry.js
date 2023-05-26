const stopSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
}

const submitOk = () => {
    const yourName = document.getElementById('name');
    const phone1 = document.getElementById('phone1');
    const phone2 = document.getElementById('phone2');
    const phone3 = document.getElementById('phone3');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const description = document.getElementById('description');


    if(!yourName.value || !phone1.value || !phone2.value || !phone3.value || !email.value || !subject.value || !description.value){
        alert("모든 필드를 입력해주세요.");
        return;
    } else {

        yourName.value = "";
        phone1.value = "";
        phone2.value = "";
        phone3.value = "";
        email.value = "";
        subject.value = "";
        description.value = "";

        return alert("action 및 php 미구현");
    }
}