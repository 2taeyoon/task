fetch('../lib/js/data/data.json')
    .then(response => response.json())
    .then(data => {
        //indexPort(data);
        //indexPart(data);
    })
    .catch(error => console.error(error));


/*

const indexPort2 = (port)=>{
    const portUl = document.querySelector('.test');
    port.portfolio.slice(0, 8).forEach((portImg)=>{
        const portLi = document.createElement('li');
        portLi.innerHTML = `
            <a href="#" style="background: url('./lib/js/data/img/${portImg.img}') no-repeat center center / cover;"></a>
        `;
        portUl.append(portLi);
    });
}

*/