terms1.onclick = () => {
    terms1.checked = terms1.checked;
    terms2.checked = terms1.checked;
    terms3.checked = terms1.checked;
};

terms2.onclick = () => {
    if (terms2.checked && terms3.checked) {
        terms1.checked = true;
    } else {
        terms1.checked = false;
    }
};

terms3.onclick = () => {
    if (terms2.checked && terms3.checked) {
        terms1.checked = true;
    } else {
        terms1.checked = false;
    }
};

function warning(massage){
    alert(massage);
}

btnSubmit.onclick = () => {
    if(!terms2.checked && !terms3.checked){
        warning('필수 약관에 동의해주세요.');
    } else if(!terms2.checked){
        warning('이용약관에 동의해주세요.');
    } else if(!terms3.checked){
        warning('개인정보 수집 및 이용에 동의해주세요');
    } else { 

    }
};