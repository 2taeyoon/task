//FAQ 타이핑 효과//
let i = 0;
let txt = 'Ask Your Developers'; 
let speed = 100;
let type = document.querySelector('.typing');
if(type){
  function typing() {
    if (i < txt.length) {
      type.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}


//FAQ 답변 펼치기//
const faqBar = document.querySelectorAll('.faq_bar > li');
const faqAnswer = document.querySelectorAll('.faq_answer > li');


faqBar.forEach(function(item,index){
  item.addEventListener('click',function(){
    if(faqAnswer[index].classList.contains('active')){
      faqAnswer[index].classList.remove('active');
    }else{
      faqAnswer.forEach(function(answer){
        answer.classList.remove('active');
      })
      faqAnswer[index].classList.add('active');
    }
  })
})

faqAnswer.forEach(function(item,index){
  item.addEventListener('click', function(){
    item.classList.remove('active');
  })
})

//section02,03 스크롤 시 애니메이션 작동//
const scrollSect = document.querySelector('.scroll');
const scrollImg = document.querySelector('.sect02_bg');
const scrollSect2 = document.querySelector('.scroll2');
const skillBar = document.querySelectorAll('.bar_container');

window.addEventListener('scroll',function(){
  if(this.window.scrollY > scrollSect.offsetTop){
    scrollImg.classList.add('scale');
  } else {
    scrollImg.classList.remove('scale');
  }
})

window.addEventListener('scroll',function(){
  if(this.window.scrollY > scrollSect2.offsetTop){
    skillBar.forEach(function(item){
      item.classList.add('on');
    })
  } else {
    skillBar.forEach(function(item){
      item.classList.remove('on');
    })
  }
})
//section04 스크롤 시 클라스 추가
const scrollsect3 = document.querySelector('.scroll3');
const line = document.querySelector('.sect04_txt span');

window.addEventListener('scroll',function(){
  if(this.window.scrollY > scrollsect3.offsetTop){
  line.classList.add('line');
  }else {
    line.classList.remove('line');
  }
})

//section04 클릭 시 클라스 추가
const clickBtn = document.querySelector('.sect04_btn');
const bubbleImg = document.querySelector('.img_contact');

if(clickBtn)
{clickBtn.addEventListener('click',()=>{
  bubbleImg.classList.add('on')
})}







