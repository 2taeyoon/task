fetch('../lib/js/data/data.json')
    .then(response => response.json())
    .then(data => {
        createTabs(data);
        subPart(data);
    })
    .catch(error => console.error(error));



const createTabs = (tabBtn) => {
    const portfolioTab = document.querySelectorAll('.portfolio_tab');
    const portUl = document.querySelector('.sub_portfolio');

    const showTabContent = (num) => {
        const startIndex = (num - 1) * 8;
        const endIndex = startIndex + 8;
        const tabData = tabBtn.portfolio.slice(startIndex, endIndex);

        portUl.innerHTML = '';

        tabData.forEach( portImg => {
            const portLi = document.createElement('li');
            portLi.innerHTML = `
            <a href="#" class="sub_port_img" style="background: url('../lib/js/data/img/${ portImg.img }') no-repeat center / cover;"></a>
            <a href="#">
                <div class="sub_port_text">
                <div class="sub_port_category">${ portImg.category }</div>
                <div class="sub_port_text_bt">${ portImg.text }</div>
                </div>
            </a>
            `;

            portUl.append(portLi);

            const aTags = portLi.querySelectorAll('a');
            aTags.forEach( aTag => {
                aTag.addEventListener('click',  event  => {
                    event.preventDefault();
                    alert('포트폴리오 사이트는 구현되지 않았습니다.');
                });
            });
        });
    };

    portfolioTab.forEach(( button ) => {
        button.addEventListener('click', (event) => {
            const tabNum = parseInt(event.target.dataset.tab);
            showTabContent(tabNum);

            portfolioTab.forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
    });

    showTabContent(1);
};


















const subPart = (part)=>{
    const partUl = document.querySelector('.sub_partner');
    part.partner.forEach((partImg)=>{
        const partLi = document.createElement('li');
        partLi.classList.add('sub_partner_li');
        partLi.innerHTML = `
        <span style="background: url('../lib/js/data/img/${partImg.img}') no-repeat center / cover;"></span>
        `;
        partUl.append(partLi);
    });
}