//로컬스트리지에 저장.
if(window.localStorage.getItem('dev') === null){
    const obj = {
        bomkyu : {
            id : '0',
            name : 'SEO BEOM KYU',
            keyword : '소통',
            introduce : '개인이 갖고 있는 능력도 중요하지만<br> 다른 사람과 상호작용하면서 자신의 한계를 파악하고 성장할 수 있는 발판이 되기 때문입니다. 그렇기에 저는 먼저 다가가는 걸 두려워하지 않으며, 질문하는 것을 망설이지 않습니다.',
            image_url : 'img_bk_01.png',
            status : 'false',
            orderDate : '',
            orderNumber : ''
        },
        hyemin : {
            id : '1',
            name : 'CHO HYE MIN',
            keyword : '성장',
            introduce : '내가 좋아하는 일을 배워가며 성장하는 것에 진심으로 행복함을 느낍니다.<br> 멀리 있는 지름길을 생각하며 빠르게만 나아가는 것이 아닌 당장 나의 눈 앞에 있는 계단을 한 단계씩 밟아가며 꾸준히 성장하여 기회가 왔을 때, 그것을 누구보다 멋지게 잡는 개발자가 되고싶습니다.',
            image_url : 'hm_profile.jpg',
            status : 'false',
            orderDate : '',
            orderNumber : ''
        },
        taeyoon : {
            id : '2',
            name : 'LEE TAE YOON',
            keyword : '스펀지',
            introduce : '세제와 한 번 작용하면 꿋꿋하게 맡은 바 임무를 다하는 스펀지 같은, 새것처럼 굳고 딱딱한 것이 아닌 사람의 온기가 느껴지는 부드러움과 흡수력으로 다른 사람과 잘 어우러지고 싶습니다. 이러한 모습으로 나의 길을 나아가고 싶은 저는 스펀지 같은 개발자입니다.',
            image_url : 'img_ty_small.png',
            status : 'false',
            orderDate : '',
            orderNumber : ''
        } 
    };
    const objString = JSON.stringify(obj);
    window.localStorage.setItem('dev', objString);
    //console.log('obj',objString);
    
    
}else{
    const personString = window.localStorage.getItem('dev');
    //console.log(personString);
}

document.addEventListener("DOMContentLoaded", function(){
    // 스크립트 취합 혜민님 작업
    const Elheader = document.querySelector('header');
    window.addEventListener('scroll',function(){
        if(window.scrollY > 0){
            Elheader.classList.add('scroll')
        }else{
            Elheader.classList.remove('scroll')
        }
    })

    //header 모바일 메뉴 오픈
    const mobile_header = document.querySelector('header.mobile');
    const gnbBtn = document.querySelectorAll('.gnb_btn');
    const body = document.querySelector('body');
    const mobile_logo = document.querySelector('.main_logo_mobile');
    gnbBtn.forEach((el)=>{
        el.addEventListener('click', ()=>{
            mobile_header.classList.toggle('active');
            console.log('click');

            if(mobile_header.classList.contains('active')){
                body.style.overflow = 'hidden';
            }else{
                body.style.overflow = 'auto';
            }
        })
    })
    mobile_logo.addEventListener('click', () => {
        window.location.replace('../index.html')
    });
});