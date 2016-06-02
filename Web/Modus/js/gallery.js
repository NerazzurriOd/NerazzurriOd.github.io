var count = $('.slider .container .item').length;
var width = count * 100;
var item_width = width / count / count;

for (var i = 0; i < count; i++) {
    $('.slider .slice').append('<div class="one_slice"></div>');
}

$('.slider .slice .one_slice:first-child').addClass('active');

$('.slider .container .item').css({'width': item_width + '%'});
$('.slider .container').css({'width': width + '%'});

$('.slider .container .nav_l').click(function()
{
    if ($('.slider .container .nav_l').hasClass('lss')) {
        $('.slider .container .nav_r').removeClass('rss');
        $('.slider .container .nav_l').removeClass('lss');
        var real_margin = Math.abs(parseInt($('.slider .container').css('margin-left')));
        $('.slider .slice .one_slice').removeClass('active');
        if(real_margin != 0){
            var margin_scroll = real_margin - (width / count);
        }else{
            var margin_scroll = width - 100;
        }
        if (margin_scroll == 0) {
            $('.slider .slice .one_slice:first-child').addClass('active');
        }else{
            var xz = margin_scroll / 100;
            $('.slider .slice .one_slice').eq(xz).addClass('active');
        }
        $('.slider .container').animate({'margin-left': '-' + margin_scroll + '%'});
    }else{
        return false;
    }

    setTimeout(function () {
        $('.slider .container .nav_r').addClass('rss');
        $('.slider .container .nav_l').addClass('lss');
    }, 600);
});

$('.slider').hover(
    function() {
        var id = $(this).attr('id');
            clearInterval(intervalID)
    }, function() {
    setInterval(function(){
        if ($('.slider .container .nav_r').hasClass('rss')) {
            $('.slider .container .nav_r').removeClass('rss');
            $('.slider .container .nav_l').removeClass('lss');
            var real_margin = Math.abs(parseInt($('.slider .container').css('margin-left')));
            $('.slider .slice .one_slice').removeClass('active');
            if(real_margin != width - 100){
                var margin_scroll = width / count + real_margin;
            }else{
                var margin_scroll = 0;
                $('.slider .slice .one_slice:first-child').addClass('active');
            }
            if (margin_scroll == width - 100) {
            }
            if (margin_scroll == 0) {
                $('.slider .slice .one_slice:first-child').addClass('active');
            }else{
                var xz = margin_scroll / 100;
                $('.slider .slice .one_slice').eq(xz).addClass('active');
            }
            $('.slider .container').animate({'margin-left': '-' + margin_scroll + '%'});
        }else{
            return false;
        }

        setTimeout(function () {
            $('.slider .container .nav_r').addClass('rss');
            $('.slider .container .nav_l').addClass('lss');

        }, 600);
    }, 5000);
    }
);

var intervalID = setInterval(function(){
    if ($('.slider .container .nav_r').hasClass('rss')) {
        $('.slider .container .nav_r').removeClass('rss');
        $('.slider .container .nav_l').removeClass('lss');
        var real_margin = Math.abs(parseInt($('.slider .container').css('margin-left')));
        $('.slider .slice .one_slice').removeClass('active');
        if(real_margin != width - 100){
            var margin_scroll = width / count + real_margin;
        }else{
            var margin_scroll = 0;
            $('.slider .slice .one_slice:first-child').addClass('active');
        }
        if (margin_scroll == width - 100) {
        }
        if (margin_scroll == 0) {
            $('.slider .slice .one_slice:first-child').addClass('active');
        }else{
            var xz = margin_scroll / 100;
            $('.slider .slice .one_slice').eq(xz).addClass('active');
        }
        $('.slider .container').animate({'margin-left': '-' + margin_scroll + '%'});
    }else{
        return false;
    }

    setTimeout(function () {
        $('.slider .container .nav_r').addClass('rss');
        $('.slider .container .nav_l').addClass('lss');

    }, 600);
}, 5000);

$('.slider .container .nav_r').click(function()
{
    if ($('.slider .container .nav_r').hasClass('rss')) {
        $('.slider .container .nav_r').removeClass('rss');
        $('.slider .container .nav_l').removeClass('lss');
        var real_margin = Math.abs(parseInt($('.slider .container').css('margin-left')));
        $('.slider .slice .one_slice').removeClass('active');
        if(real_margin != width - 100){
            var margin_scroll = width / count + real_margin;
        }else{
            var margin_scroll = 0;
            $('.slider .slice .one_slice:first-child').addClass('active');
        }
        if (margin_scroll == width - 100) {
        }
        if (margin_scroll == 0) {
            $('.slider .slice .one_slice:first-child').addClass('active');
        }else{
            var xz = margin_scroll / 100;
            $('.slider .slice .one_slice').eq(xz).addClass('active');
        }
        $('.slider .container').animate({'margin-left': '-' + margin_scroll + '%'});
    }else{
        return false;
    }

    setTimeout(function () {
        $('.slider .container .nav_r').addClass('rss');
        $('.slider .container .nav_l').addClass('lss');

    }, 600);
});

$('.slider .slice .one_slice').click(function()
{
    $('.slider .slice .one_slice').removeClass('active');
    $(this).addClass('active');
    var ind = $(this).index();
    var scr = ind * 100;
    $('.slider .container').animate({'margin-left': '-' + scr + '%'});
});