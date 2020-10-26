$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('header').css('background','black');
    } else {
    $('header').css('background','transparent','transition','1s').delay(3000).fadeIn();
    }
    });