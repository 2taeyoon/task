$(function() {
    $("#datepicker").datepicker({
        changeYear: true,
        changeMonth: true,
        onSelect: function() {
            var selectedDate = $("#datepicker").datepicker('getDate');
            var currentDate = new Date();

            selectedDate.setHours(0, 0, 0, 0);
            currentDate.setHours(0, 0, 0, 0);
            
            var timeDifference = currentDate.getTime() - selectedDate.getTime();
            var daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
            var dayPrint = daysDifference >= 0 ? `${daysDifference.toString()}일` : `Day${daysDifference.toString()}`;
            console.log('일수:', dayPrint);
            
            // 엄청 간단하게 일수만 빼는 방법
            //var result = currentDate.getDate() - selectedDate.getDate();
            //console.log("Result: " + (result + 1));
        }
    })
    $("#datepicker").prop("readOnly", true);
    $("#datepicker").datepicker('setDate', 'today');
});

$.datepicker.setDefaults({
    dateFormat: 'yy년 mm월 dd일',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년'
});