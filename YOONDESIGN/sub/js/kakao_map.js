var container = document.getElementById('map');
var container2 = document.getElementById('map2');
var container3 = document.getElementById('map3');

var options = {
    center: new kakao.maps.LatLng(37.3703, 127.1431),
    level: 3
};
var options2 = {
    center: new kakao.maps.LatLng(37.3703, 127.1431),
    level: 3
};
var options3 = {
    center: new kakao.maps.LatLng(37.3703, 127.1431),
    level: 3
};

var map = new kakao.maps.Map(container, options);
var map2 = new kakao.maps.Map(container2, options2);
var map3 = new kakao.maps.Map(container3, options3);

    var kakaoMap = document.querySelector('.kakao_map');
    kakaoMap.addEventListener('click', function() {
        map.relayout();
        map2.relayout();
        map3.relayout();
    });

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();
var mapTypeControl2 = new kakao.maps.MapTypeControl();
var mapTypeControl3 = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
map2.addControl(mapTypeControl2, kakao.maps.ControlPosition.TOPRIGHT);
map3.addControl(mapTypeControl3, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
var zoomControl2 = new kakao.maps.ZoomControl();
var zoomControl3 = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
map2.addControl(zoomControl2, kakao.maps.ControlPosition.RIGHT);
map3.addControl(zoomControl3, kakao.maps.ControlPosition.RIGHT);

var imageSrc = './img/kakao_marker.png', // 마커이미지의 주소입니다    
imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
markerPosition = new kakao.maps.LatLng(37.3689, 127.1446); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage
});
var marker2 = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage
});
var marker3 = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
marker2.setMap(map2);
marker3.setMap(map3);
// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);