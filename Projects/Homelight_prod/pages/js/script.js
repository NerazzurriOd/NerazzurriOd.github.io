$(function() {

    $("head").append("<link rel='stylesheet' type='text/css' href='css/vendor.css' />");

    $("head").append("<link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,700|Open+Sans:400,300,300italic,400italic,700' rel='stylesheet' type='text/css'/>");

    $("head").append("<link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' />");

    

    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
   
});
