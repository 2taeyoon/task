// Calendar D-Day Jquery Code Start!
$(function() {
    $("#date_d_day").datepicker({
        onSelect: function() {
            var selectedDate = $("#date_d_day").datepicker('getDate');
            var currentDate = new Date();

            selectedDate.setHours(0, 0, 0, 0);
            currentDate.setHours(0, 0, 0, 0);
            
            var timeDifference = currentDate.getTime() - selectedDate.getTime();
            var daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
            //var dayPrint = daysDifference >= 0 ? `${daysDifference.toString()}일` : `Day${daysDifference.toString()}`;
            //console.log('일수:', dayPrint);

            if(daysDifference == 0){
                console.log('D-Day');
            } else if(daysDifference > 0){
                console.log(`${daysDifference.toString()}일`);
            } else if(daysDifference < 0){
                console.log(`Day${daysDifference.toString()}`);
            }

            // 엄청 간단하게 일수만 빼는 방법
            //var result = currentDate.getDate() - selectedDate.getDate();
            //console.log("Result: " + (result + 1));
        }
    });
});
// Calendar D-Day Jquery Code End!


// Calendar Common Jquery Code Start!
$(function() {
    $(".date_common").on("focus", function() {
        $(this).datepicker("widget").css({
            display: "block",
            position: "absolute",
            top: "unset",
            left: "0",
            bottom: "0",
        });
    });

    $(".date_common").prop("readOnly", true);
    $(".date_common").datepicker('setDate', 'today');
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
    yearSuffix: '년',
    changeYear: true,
    changeMonth: true,
});
// Calendar Common Jquery Code End!