/**
 * Created by Inter on 02.06.2016.
 */
/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    $('.close_btn').click(function (e) {
        e.preventDefault();
        $('.overlay').hide();
        $('.popup').hide();
    });
    $('.zoom').click(function (e) {
        e.preventDefault();
        $('.overlay').show();
        $('.popup').show();
    });
});
