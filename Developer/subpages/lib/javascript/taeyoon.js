/* developer_taeyoon page start! */

AOS.init();

const allPage = document.querySelectorAll('.all_page > li > a');
allPage.forEach((page, index)=>{
    page.addEventListener('click', (aTag)=>{
            aTag.preventDefault();
            document.querySelector(`#s${index + 1}`).scrollIntoView({ behavior: 'smooth', block: 'center'});
    });
});

/* developer_taeyoon page end! */




/* contact page start! */
const tabs = document.querySelectorAll('.tab > li');
const cardFronts = document.querySelectorAll('.card_front');
const cardBacks = document.querySelectorAll('.card_back');
const cardWraps = document.querySelectorAll('.card_wrap');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });
        cardFronts.forEach((cardFront) => {
            cardFront.classList.remove('active');
        });
        cardBacks.forEach((cardBack) => {
            cardBack.classList.remove('active');
        });
        cardWraps.forEach((cardWrap) => {
            cardWrap.classList.remove('active');
        });

        tab.classList.add('active');
        cardFronts[index].classList.add('active');
        cardBacks[index].classList.add('active');
        cardWraps[index].classList.add('active');
    });
});
/* contact page end! */




/* review start! */
const review = document.querySelector('.review_space');
const jsonSel = document.querySelector('.json_sel');
const reviewAdd = document.querySelector('.review_add');
const reviewName = document.querySelector('.review_name');
const reviewText = document.querySelector('.review_text');
const reviewWrap = document.querySelector('.review_wrap');

let reviewItem = JSON.parse(localStorage.getItem('reviewItem')) || [];

const save = () => {
    localStorage.setItem('reviewItem', JSON.stringify(reviewItem));

    let json_sel_child = document.querySelectorAll('.json_sel > .review_sel');
    if(json_sel_child != null){
        json_sel_child.forEach((el)=>{
            el.remove();
        })
    }
}


function Validation(){

    if(reviewName.value.trim() === '' && reviewText.value.trim() === '') {
        alert('닉네임과 리뷰 내용을 작성해주세요.');
    } else if(reviewName.value.length < 5 && reviewText.value.length < 5){
        alert('닉네임과 리뷰 내용을 5글자 이상으로 작성해주세요');
    } else if(reviewName.value.trim() === ''){
        alert('닉네임을 작성해주세요.');
    } else if(reviewName.value.length < 5){
        alert('닉네임을 5글자 이상으로 작성해주세요.');
    } else if(reviewText.value.trim() === ''){
        alert('리뷰 내용을 작성해주세요.');
    } else if(reviewText.value.length < 5){
        alert('리뷰 내용을 5글자 이상으로 작성해주세요.');
    } else {
        const profileRandom = Math.floor(Math.random() * 8);
        const reviewObj = {
            nickname: reviewName.value,
            comment: reviewText.value,
            profile: profileRandom
        };

        reviewItem.push(reviewObj);
        save();

        reviewName.value = '';
        reviewText.value = '';

        renderReview();
    }
}


function renderReview(){

        reviewItem.forEach(item => {

            const newDiv = document.createElement('div');
            newDiv.classList.add('review', 'review_sel');

            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes();
            const ampm = hour >= 12 ? '오후' : '오전';
            const hour12 = hour % 12 || 12;

            const dateTimeString = now.toLocaleString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            const timeString = `${ampm} ${hour12.toString()}시 ${minute.toString().padStart(2, '0')}분`;
            
            newDiv.innerHTML = `
                <div class="review_content">
                    <div class="profile" style="background-image: url('./lib/images/img_noProfile${item.profile}.png')"></div>
                    <div class="reviwe_box">
                        <div class="nickname">${item.nickname}</div>
                        <div class="coment">${item.comment}</div>
                        <div class="date">
                            <div class="date_p">${dateTimeString +" "+ timeString}</div>
                            <div class="remove_btn"></div>
                        </div>
                    </div>
                </div>
            `;
            jsonSel.prepend(newDiv);
            const newRemoveBtn = newDiv.querySelector('.remove_btn');
            newRemoveBtn.addEventListener('click', ()=>{
                newDiv.remove();
                // 로컬 스토리지에서 삭제하기
                reviewItem = reviewItem.filter(obj => obj.comment !== item.comment);
                save();
            });
        });
};



if(review){
    review.addEventListener('click', ()=>{
        review.classList.toggle('active');
        reviewWrap.classList.toggle('active');
    });
}


if(reviewText){
    reviewText.addEventListener('input', ()=>{
        reviewText.style.height = 'auto';
        reviewText.style.height = `${reviewText.scrollHeight}px`;
    });
}


if(reviewName){
    reviewName.addEventListener('input', function() {
        if (/[^0-9a-zA-Z_]/g.test(this.value)) { // test()는 정규표현식을 검사하는 메소드이다, 정규 표현식 : /[^0-9a-zA-Z_]/
            alert('닉네임은 영문, 숫자, 언더바 이외의 문자는 입력할 수 없습니다.');
            this.value = this.value.replace(/[^0-9a-zA-Z_]/g, ''); // 영문, 숫자, 언더바 이외의 문자열 제거
        };
    });


    reviewName.addEventListener('keypress', event => {
        if (event.key === "Enter") {
            event.preventDefault();
            Validation();
            reviewAdd.focus();
        }
    });
}


if(reviewText){
    reviewText.addEventListener('keypress', event => {
        if (event.key === "Enter") {
            event.preventDefault();
            Validation();
            reviewAdd.focus();
        }
    });
}


if(reviewAdd){
    reviewAdd.addEventListener('click', Validation);
}

renderReview();
/* review end! */