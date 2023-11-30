$(document).ready(function(){
    $(".popular__goods__slider").slick({
        slidesToShow: 4, 
        slidesToScroll: 4,
        infinity: true,
        speed: 800,
        // arrows: false,
        nextArrow: $('.popular__goods__next__button'),
        prevArrow: $('.popular__goods__previous__button'),
    });
    $(".new__goods__slider").slick({
        slidesToShow: 4, 
        slidesToScroll: 4,
        infinity: true,
        speed: 800,
        // arrows: false,
        nextArrow: $('.new__goods__next__button'),
        prevArrow: $('.new__goods__previous__button'),
    });
    $(".shop__review__slider").slick({
        slidesToShow: 1, 
        slidesToScroll: 1,
        infinity: true,
        speed: 800,
        dots: true,
        nextArrow: $('.shop__review__next__button'),
        prevArrow: $('.shop__review__previous__button'),
    });
    $(".useful__articles__slider").slick({
        slidesToShow: 3, 
        slidesToScroll: 3,
        infinity: true,
        speed: 800,
        nextArrow: $('.useful__articles__next__button'),
        prevArrow: $('.useful__articles__previous__button'),
    });
})


