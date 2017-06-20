/**
 * Created by Jigalag on 15.06.2017.
 */

var carouselSize = function () {
    if ($('.news-section__clip-carousel').length > 0){
        var element = $('.news-section__clip-carousel');
        var leftPos =element.offset().left;
        var windowWidth = $(window).width();
        element.css({'width': (windowWidth - leftPos) + 'px'});
    }
};
$(document).ready(function() {
    // Creating hoverscroll with fixed arrows
    carouselSize();
    if ($('.clip-carousel').length > 0) {
        $('.clip-carousel').hoverscroll({
            arrows: false,
            rtl: false
        });
    }

    if ($('.package-frame').length > 0) {
        (function () {
            var $frame = $('.package-frame');
            var $wrap = $frame.parent();
            var length = $frame.find('.packages__item').length;

            // Call Sly on frame
            $frame.sly({
                horizontal: 1,
                itemNav: 'forceCentered',
                smart: 1,
                activateMiddle: 1,
                activateOn: 'click',
                mouseDragging: false,
                touchDragging: false,
                releaseSwing: 1,
                scrollBar: $wrap.find('.scrollbar'),
                scrollBy: 0,
                speed: 300,
                elasticBounds: 1,
                easing: 'easeOutExpo',
                dragHandle: 1,
                dynamicHandle: 1,
                clickBar: 1,
                startAt: (Math.round(length / 2) - 1)
            });
        }());
    }
    if ($('.slick-carousel').length > 0) {
        $('.slick-carousel').slick({
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoplay: false,
            centerMode: true,
            centerPadding: '30px',
            responsive: [
                {
                    breakpoint: 740,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($('.service-carousel').length > 0) {
        $('.service-carousel').slick({
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoplay: false,
            centerMode: true,
            centerPadding: '30px',
            responsive: [
                {
                    breakpoint: 740,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($('.packages-carousel').length > 0) {
        $('.packages-carousel').slick({
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoplay: false,
            centerMode: true,
            centerPadding: '180px',
            responsive: [
                {
                    breakpoint: 510,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '30px'
                    }
                }
            ]
        });
    }
    if ($('.header-menu__burger').length > 0) {
        $('.header-menu__burger').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $('.header-menu__login').removeClass('active');
            $('.header-menu__login-form').removeClass('open-login');
            $('.header-menu__list').toggleClass('open-nav');
        });
    }
    if ($('.header-menu__login').length > 0) {

        $('.header-menu__login').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $('.header-menu__burger').removeClass('active');
            $('.header-menu__list').removeClass('open-nav');
            $('.header-menu__login-form').toggleClass('open-login');
        });
    }
});
$(window).resize(function() {
    carouselSize();
});
