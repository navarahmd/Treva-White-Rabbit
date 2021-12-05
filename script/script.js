$('.product-section .product-slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.product-slider-multiple'
});
$('.product-section .product-slider-multiple').slick({
    slidesToShow: 8,
    slidesToScroll: 0,
    asNavFor: '.product-slider-single',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    settings: "unslick"
});


"use strict";

$('.star').on('change', function() {
    let stars = $(this).val();
    /* Make an AJAX call to register the rating */
    console.log(stars);
});



$(document).ready(function() {
    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});