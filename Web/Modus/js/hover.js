$('.four_blocks .one_bl .btn_read').hover(
    function() {
        var id = $(this).attr('id');
        $('#' + id + '_d').addClass('hover');
    }, function() {
        var id = $(this).attr('id');
        $('#' + id + '_d').removeClass('hover');
    }
);