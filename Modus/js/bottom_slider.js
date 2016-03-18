var counts = parseInt($('.bottom_slider .our_slide .ins .one_item').length);
var width = (counts * 170) + (counts * 30);
var item_width = width / counts / counts;
var slide_item = 2;
var body_width = Math.abs(parseInt($('body').css('width')));
if (body_width <= 640) {
    var scrl = 330;
}else{
    var scrl = 400;
}

$('.bottom_slider .our_slide .ins').css({'width': width + 'px'});

var el = counts - 1;

$('.bottom_slider .up .nav .slide_left').click(function()
{
    if ($('.bottom_slider .up .nav .slide_left').hasClass('bsl')) {
        $('.bottom_slider .up .nav .slide_left').removeClass('bsl');
        $('.bottom_slider .up .nav .slide_right').removeClass('bsr');
        $('.bottom_slider .our_slide .ins').prepend($('.bottom_slider .our_slide .ins .one_item').eq(el));
        $('.bottom_slider .our_slide .ins').prepend($('.bottom_slider .our_slide .ins .one_item').eq(el));
        $('.bottom_slider .our_slide .ins').css({'margin-left':'-'+scrl+'px'});
        $('.bottom_slider .our_slide .ins').animate({'margin-left':'0'});
    }else{
        return false;
    }
    setTimeout(function () {
        $('.bottom_slider .up .nav .slide_right').addClass('bsr');
        $('.bottom_slider .up .nav .slide_left').addClass('bsl');
    }, 600);
});

$('.bottom_slider .up .nav .slide_right').click(function()
{
    if ($('.bottom_slider .up .nav .slide_left').hasClass('bsl')) {
        $('.bottom_slider .up .nav .slide_left').removeClass('bsl');
        $('.bottom_slider .up .nav .slide_right').removeClass('bsr');
        $('.bottom_slider .our_slide .ins .one_item').eq(0).clone().appendTo('.bottom_slider .our_slide .ins');
        $('.bottom_slider .our_slide .ins .one_item').eq(1).clone().appendTo('.bottom_slider .our_slide .ins');
        $('.bottom_slider .our_slide .ins').animate({'margin-left':'-'+scrl+'px'},500);
        setTimeout(function () {
            $('.bottom_slider .our_slide .ins').stop().css({'margin-left':'0px'});
            $('.bottom_slider .our_slide .ins .one_item').eq(0).remove();
            $('.bottom_slider .our_slide .ins .one_item').eq(0).remove();
        }, 600);
    }else{
        return false;
    }
    setTimeout(function () {
        $('.bottom_slider .up .nav .slide_right').addClass('bsr');
        $('.bottom_slider .up .nav .slide_left').addClass('bsl');
    }, 600);
});