$(function() {
    $('.qa-q').click(function() {
        $(this).next().slideToggle();
        $(this).find('.qa-q-text .fa-angle-down').toggle();
        $(this).find('.qa-q-text .fa-angle-up').toggle();
    });

    $('.attend-q').click(function() {
        $(this).next().slideToggle();
        $(this).toggleClass("open");
        $('.attend-q').not($(this)).next('.attend-a').slideUp();
        $('.attend-q').not($(this)).removeClass("open");
        $(this).find('.attend-q-text a::after').toggle();
        $(this).find('.attend-content-sp .open .attend-q-text a::after').toggle();
    });
});
