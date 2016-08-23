$().ready(function()
{
    $('.menu_and_search .punkt').click(function()
    {
        if ($(this).hasClass('active')) {
            $('.menu_and_search .punkt').removeClass('active');
            $('.menu_and_search .punkt .lv_two').fadeOut('normal');
        }else{
            $('.menu_and_search .punkt').removeClass('active');
            $('.menu_and_search .punkt .lv_two').fadeOut('normal');
            $(this).addClass('active');
            $(this).find('.lv_two').fadeIn('normal');
        }
    });
});

$().ready(function()
{
    $('#show_menu').click(function()
    {
        if ($(this).hasClass('visible')) {
            $(this).removeClass('visible');
            $('.menu_and_search').fadeOut('normal');
        }else{
            $(this).addClass('visible');
            $('.menu_and_search').fadeIn('normal');
        }
    });
});

$().ready(function()
{
    var pr = parseInt($('.prog1d').text());
    var true_pr = 180 / 100 * pr;
    $('.prog1').css({'transform' : 'rotate('+true_pr+'deg)'});

    var pr = parseInt($('.prog2d').text());
    var true_pr = 180 / 100 * pr;
    $('.prog2').css({'transform' : 'rotate('+true_pr+'deg)'});

    var pr = parseInt($('.prog3d').text());
    var true_pr = 180 / 100 * pr;
    $('.prog3').css({'transform' : 'rotate('+true_pr+'deg)'});

    var pr = parseInt($('.prog4d').text());
    var true_pr = 180 / 100 * pr;
    $('.prog4').css({'transform' : 'rotate('+true_pr+'deg)'});
});