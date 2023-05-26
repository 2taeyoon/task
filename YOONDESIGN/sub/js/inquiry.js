function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var description = document.getElementById("description").value;

    if(!name || !phone || !email || !subject || !description){
        alert("모든 필드를 입력해주세요.");
        return false;
    }
}

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', () => {
    validateForm();
});

function stopSubmit(e){
    e.stopPropagation();
    e.preventDefault();
}