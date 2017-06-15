/**
 * Created by Jigalag on 15.06.2017.
 */

var carouselSize = function () {
    var element = $('.news-section__clip-carousel');
    var leftPos =element.offset().left;
    var windowWidth = $(window).width();
    element.css({'width': (windowWidth - leftPos) + 'px'});
};
$(document).ready(function() {
    // Creating hoverscroll with fixed arrows
    carouselSize();
    $('.clip-carousel').hoverscroll({
        arrows: false,
        rtl: false
    });
    // Starting the movement automatically at loading
    // @param direction: right/bottom = 1, left/top = -1
    // @param speed: Speed of the animation (scrollPosition += direction * speed)
    // var direction = -1,
    //     speed = 3;
    // $("#my-list")[0].startMoving(direction, speed);
    (function () {
        var $frame = $('.package-frame');
        var $wrap  = $frame.parent();
        var length  = $frame.find('.packages__item').length;
        console.log(Math.round(length / 2));

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
});
$(window).resize(function() {
    carouselSize();
});
