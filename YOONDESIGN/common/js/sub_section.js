const subLi = document.querySelectorAll('.sub_nav > ul > li');
const subContent = document.querySelectorAll('.sub_content > li');

subLi.forEach((lis, index)=>{
    lis.addEventListener('click', ()=>{        
        subLi.forEach((li)=>{
            li.classList.remove('active');
        });
        subContent.forEach((subCon)=>{
            subCon.classList.remove('active');
        });

        lis.classList.add('active');
        subContent[index].classList.add('active');
    });
});