AOS.init();
let get_storage = { //객체로 스토리지 관리.
	'get_parse_data' : function(name) { //받아오는 데이터 로직
		return  JSON.parse(window.localStorage.getItem(name));
	},
	'set_parse_data' : function(name,data) { //추가하는 데이터 로직
		let json_string = JSON.stringify(data);
		window.localStorage.setItem(name, json_string);
	}
}

//로컬스토리지에서 get,set 함수 사용하는 변수들
const dev_arr = Object.values(get_storage.get_parse_data('dev'));

let buy_ul = document.querySelector('.buy_list');
let buy_btn = document.querySelector('.buy_btn');
let order_btn = document.querySelector('.order_btn');

let selected_dev_arr = new Array();

if(buy_ul){
	//리스트 생성 함수
	let create_list = () => {
		dev_arr.forEach(key => {
			let create_li = document.createElement('li');
			create_li.setAttribute('data-id',`${key.id}`);
			create_li.setAttribute('data-status',`${key.status}`);
			
			create_li.innerHTML = `
									<div class="buy_inner">
										<div class="face_wrap">
											<div class="face_thumb">
	
											</div>
										</div>
										<h2 class="name txt_c">${key.name}</h2>
										<p class="keyword txt_c">‘${key.keyword}’</p>
										<p class="introduce txt_l">
											${key.introduce}
										</p>
										<div class="cover">
											<span></span>
										</div>
									</div>
								`	
			buy_ul.appendChild(create_li);
		});

		event_handler();
	}

	create_list();

	// 아이템들의 이벤트 생성 핸들러
	function event_handler(){
		Array.from(buy_ul.children).forEach((el)=>{
			if(el.dataset.status === 'true'){
				el.classList.add('active');
			}

			el.addEventListener('click', (event) => {
				let select_id = el.getAttribute('data-id');
				if(el.dataset.status === 'true'){
					event.stopPropagation(); // 이벤트 버블링 중지
					return
				}

				el.classList.toggle('active');

				if(el.classList.contains('active')){
					selected_dev_arr.push(dev_arr[select_id]); //selected_dev_arr 배열에 값을 집어넣음.
				}else{
					selected_dev_arr = selected_dev_arr.filter(obj => obj.id !== select_id); //id값으로 배열의 요소를 지움.
				}
			});	
		});
	}
	
	//예외처리
	function exception_handler(buy_list) {
		
		const statusLengths = Array.from(buy_list)
				.filter(buy_list => buy_list.dataset.status === 'true')
				.map(buy_list => buy_list.dataset.status.length);

		if(buy_list.length == statusLengths.length){
			alert('모든 개발자가 선택되었습니다.');
			return true;
		}

		if(selected_dev_arr.length == 0 ){
			alert('개발자를 선택해 주세요');
			return true;
		}
		return false;
	}

	const body = document.querySelector('body');
	/*function bodyScrollStop () {
		body.style.overflow = 'hidden'
	};
	function bodyScrollPlay (){
		body.style.overflow = 'auto'
	};*/

	buy_btn.addEventListener('click', ()=> {
		const buy_list = buy_ul.querySelectorAll('li');
		
		if (exception_handler(buy_list) !== true) {  //예외처리
			modal();
		}

		//data-value인 data-status를 true로 바꿔줌(element)
		selected_dev_arr.forEach(element => {
			element.status = 'true';
			const idx = dev_arr.findIndex(obj => obj.id === element.id);
			dev_arr[idx].status = 'true';
			buy_list[idx].setAttribute('data-status', 'true');
		});

		//로컬스토리지 dev_selected에 값 넣는 부분
		if(get_storage.get_parse_data('dev_selected') == null){
			get_storage.set_parse_data('dev_selected',selected_dev_arr);
			//console.log('selected_dev_arr', selected_dev_arr);

		}else{
			const new_selected_dev_arr = Object.values(get_storage.get_parse_data('dev_selected'));
			new_selected_dev_arr.push(...selected_dev_arr)
			get_storage.set_parse_data('dev_selected',new_selected_dev_arr);
			//console.log('selected_dev_arr', selected_dev_arr);
		}
		get_storage.set_parse_data('dev',dev_arr);

		selected_dev_arr = []; //배열 초기화
	
	});

	order_btn.addEventListener('click', ()=> {
		let selectedItem = get_storage.get_parse_data('dev_selected'); //selectedItem 배열로 dev_selected 값 가져옴
		//bodyScrollStop();
		if(selectedItem != null){
			const orderList = document.querySelector('.order_list');
			orderList.style.display = 'block';
	
			let orderImg = selectedItem.map(el=>el.image_url);
			let orderId = selectedItem.map(el => el.id);
			let orderName = selectedItem.map(el => el.name);
			let orderKeyword = selectedItem.map(el => el.keyword); 
			let orderDate = selectedItem.map(el => el.orderDate);
			let orderNumber = selectedItem.map(el => el.orderNumber); 
			let uniqueOrderNumber = [...new Set(orderNumber)];
			let uniqueOrderDate = [...new Set(orderDate)];
	
			document.getElementById('name_order').innerHTML = `${orderName}`;
			document.getElementById('keyword_order').innerHTML = `${orderKeyword}`;
			document.getElementById('date_order').innerHTML = `${uniqueOrderDate}`;
			document.getElementById('ordernumber_order').innerHTML = `${uniqueOrderNumber}`; //modal에서 생성한 modalNumber 가져와야함
	
			//order_list 이미지 li 생성
			const orderImgWrap = document.querySelector('.order_img_wrap'); //li 넣을 ul
	
			for(let i = 0; i<selectedItem.length; i++){
				let create_li_order_img = document.createElement('li');
				create_li_order_img.innerHTML = `
											<div>
												<img src="./lib/images/${orderImg[i]}" alt="${orderName[i]}" class="img_${orderId[i]}">
											</div>
										`
				orderImgWrap.appendChild(create_li_order_img);//생성한 li를 ul에 넣어줌 
			}
			const orderCloseBtn = document.querySelector('.order_list_btn');
		orderCloseBtn.addEventListener('click',()=>{
			orderList.style.display = 'none';
			bodyScrollPlay();
			Array.from(orderImgWrap.children).forEach((el)=>{
				el.remove();
			});
		})
		} else {
			const orderEmpty = document.querySelector('.order_empty');
			const orderEmptyBtn = document.querySelector('.order_empty_btn');
			
			orderEmpty.style.display = 'block';
			orderEmptyBtn.addEventListener('click',()=>{
				orderEmpty.style.display = 'none';
				bodyScrollPlay();
			})
		}
	})
			
		


	//영수증 content 생성하는 함수
	function modal(){
		const modalPop = document.querySelector('.modal');
		modalPop.style.display = 'block';
		//bodyScrollStop();

		let modalNumber = Math.floor(Math.random()*89999999) + 10000000; //8자리 랜덤숫자
		let modalId = selected_dev_arr.map(el => el.id);
		let modalName = selected_dev_arr.map(el => el.name);
		let modalImg = selected_dev_arr.map(el=> el.image_url);
		let modalKeyword = selected_dev_arr.map(el=> el.keyword);
		
		let today = new Date();
		let year = today.getFullYear();
		let month = today.getMonth()+1;
		let date = today.getDate();
		let hours = today.getHours();
		let minutes = today.getMinutes();
		let seconds = today.getSeconds();

		const new_selected_dev_arr = selected_dev_arr.map(function(element) {
			if (element.hasOwnProperty('orderDate') && element.hasOwnProperty('orderNumber')) {
				element.orderDate = `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`; // 수정할 값으로 변경
				element.orderNumber = `${modalNumber}`; // 수정할 값으로 변경
			}
			return element;
			});
		
		selected_dev_arr = new_selected_dev_arr;

		document.getElementById('ordernumber').innerHTML = `${modalNumber}`;
		document.getElementById('date').innerHTML = `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;
		document.getElementById('name').innerHTML = `${modalName}`;
		document.getElementById('keyword').innerHTML = `${modalKeyword}`;

		//이미지 li 생성하는 함수
		const modalImgWrap = document.querySelector('.modal_img_wrap');

		for(let i = 0; i<selected_dev_arr.length; i++){
			let create_li_img = document.createElement('li');
			create_li_img.innerHTML = `
										<div>
											<img src="./lib/images/${modalImg[i]}" alt="${modalName[i]}" class="img_${modalId[i]}">
										</div>
									`
			modalImgWrap.appendChild(create_li_img);//생성한 li를 ul에 넣어줌 
		}	
		const modalBtn = document.querySelector('.modal_btn');
		modalBtn.addEventListener('click',()=>{
			modalPop.style.display = 'none';
			bodyScrollPlay();
			Array.from(modalImgWrap.children).forEach((el)=>{
				el.remove();
			});
		})
		
	}
}

//buy_btn 애니메이션 속성
const bgLine = document.querySelectorAll('.bg_line');
function addFinishedClass(el) {
	el.classList.toggle('finished');
	}
bgLine.forEach((el)=>{
	el.addEventListener('animationend', ()=>{addFinishedClass});
})

    const targets = document.querySelectorAll('section');
	const progress = document.querySelector(".sec_2");
	const options = { root: null, threshold: 0.1, rootMargin: "-0px" };
	const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		const container = entry.target;
		if (entry.isIntersecting) {
		container.classList.add("fade-in");

		} else {

		}
	});
	}, options);

	targets.forEach((target) => {
	observer.observe(target);
	});

	function checkVisible( element, check = 'above' ) {
	const viewportHeight = $(window).height(); // Viewport Height
	const scrolltop = $(window).scrollTop(); // Scroll Top
	const y = $(element).offset().top;
	const elementHeight = $(element).height();   
	
		// 반드시 요소가 화면에 보여야 할경우
	if (check == "visible") 
		return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
		
	// 화면에 안보여도 요소가 위에만 있으면 (페이지를 로드할때 스크롤이 밑으로 내려가 요소를 지나쳐 버릴경우)
	if (check == "above") 
		return ((y < (viewportHeight + scrolltop)));
	}
		
	// 리소스가 로드 되면 함수 실행을 멈출지 말지 정하는 변수
	let isVisible = false;
		
	// 이벤트에 등록할 함수
	const func = function () {
		if ( !isVisible && checkVisible('.sec_2') ) {
			
			chard_start();
			isVisible = true;
		}
		
		// 만일 리소스가 로드가 되면 더이상 이벤트 스크립트가 있을 필요가 없으니 삭제
		//isVisible && window.removeEventListener('scroll', func);
	}
		
	// 스크롤 이벤트 등록
	window.addEventListener('scroll', func);



	//차트가 시작하는 지점.
	function chard_start(){
		var numItems = $('.circle_pg').length //그래프 Element 개수를 구함.
		let object = {  persent0: '80',
						persent1: '80',
						persent2: '60',
						persent3: '40' ,
						persent4: '32' ,
						persent5: '40'}; 
		

	
		for(let i = 0; i < numItems; i++){
			
			const donut = document.getElementsByClassName("circle_pg")[i]
			const show_persent = document.getElementsByClassName("persent_area")[i]
			
			let total = object['persent'+i];

			//console.log(total);
			
			let t4 = 0; //시작지점

			const donutAnimation = setInterval(() => {
				
				donut.dataset.percent = t4
				
				show_persent.dataset.percent = t4
				donut.style.background = `conic-gradient(#FFF 0 ${t4}%, #000 ${t4}% 100% )`
				t4++ >= total && clearInterval(donutAnimation) //0이였던 t4가 증가하는데 total과 값이	같아지면 종료.
				//console.log("T4값 : "+t4+", "+"total값 "+total);
			}, 30)

		}
	}