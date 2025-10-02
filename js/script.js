$(function () {

    // 漢堡按鈕
    $('.hamburger').click(function () {
        // 切換 三 & x
        $(this).toggleClass('is-active');

        // 切換 顯示 & 隱藏
        $('.navigation').toggleClass('show');
    });



    $(".menu a").click(function () {
        var btn = $(this).arr("href");
        var pos = $(btn).offset();
        $("html,body").animate({ scrollTop: pos.top }, 1000);
    });

    // gotop回到頂端
    $("#gotop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });


    // 淡入淡出
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#gotop').stop().fadeTo('fast', 1);
        } else {
            $('#gotop').stop().fadeOut('fast');
        }
    })

});

// 共用預設值
$('.smoove').smoove({
    offset: 250 // 離底部多元載入
});
$('.smo-per').smoove({
    rotateX: '90deg',
    moveZ: '500px'
});