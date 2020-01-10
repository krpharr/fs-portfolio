autoplay();

function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 10000);
}

$(document).ready(function() {
    $('.sidenav').sidenav();
});