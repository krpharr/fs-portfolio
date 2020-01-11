$(document).ready(function() {
    $('.sidenav').sidenav();

    var interval;

    function initCarousel() {
        let h = $(".carocontainer")[0].offsetHeight;

        $('.carousel.carousel-slider').carousel({
            onCycleTo: function(ele) {
                clearInterval(interval);
                interval = setInterval(function() {
                    $('.carousel.carousel-slider').carousel('next');
                }, 10000);
            },
            fullWidth: true,
            indicators: true
        }).height(`${h}px`);
    }

    $(window).resize(function() {
        initCarousel();

    });

    initCarousel();

});