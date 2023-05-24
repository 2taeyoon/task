fetch('../lib/js/data/data.json')
        .then(response => response.json())
        .then(data => {
            createTabs(data);
            showTabContent(data, 1);
            subPart(data);
        })
        .catch(error => console.error(error));

    const createTabs = (data) => {
        const tabButtons = document.querySelectorAll('.tab');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabNumber = parseInt(button.dataset.tab);
                showTabContent(data, tabNumber);
                tabButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
            });
        });
    };




const showTabContent = (data, tabNumber) => {
    const startIndex = (tabNumber - 1) * 8;
    const endIndex = startIndex + 8;
    const tabData = data.portfolio.slice(startIndex, endIndex);

    const portUl = document.querySelector('.sub_portfolio');
    portUl.innerHTML = '';

    tabData.forEach(portImg => {
        const portLi = document.createElement('li');
        portLi.innerHTML = `
        <a href="#" class="sub_port_img" style="background: url('../lib/js/data/img/${portImg.img}') no-repeat center / cover;"></a>
        <a href="#">
            <div class="sub_port_text">
                <div class="sub_port_category">${portImg.category}</div>
                <div class="sub_port_text_bt">${portImg.text}</div>
            </div>
        </a>
        `;

        portUl.append(portLi);

        const aTag = portLi.querySelectorAll('a');
        aTag.forEach(at => {
            at.addEventListener('click', (event) => {
                event.preventDefault();
                alert('포트폴리오 사이트는 구현되지 않았습니다.');
            });
        });
    });
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