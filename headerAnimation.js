// move navigational circles to left side by adding sticky class
var stickyHeader = $('.nav').offset().top;

$(window).scroll(function() {  
    if ($(window).scrollTop() > stickyHeader) {
        $('.nav').addClass('sticky');
    }
    else {
        $('.nav').removeClass('sticky');
    }  
});

//color active navigational circle by adding active class

var porfolio = $('#portfolio').offset().top;
var about = $('#about').offset().top;
var contact = $('#contact').offset().top;

$(window).scroll(function() {  
    if ($(window).scrollTop() > porfolio && $(window).scrollTop() < about) {
        $('#navPortfolio').addClass('active');
    }
    else {
        $('#navPortfolio').removeClass('active');
    }
    if ($(window).scrollTop() > about && $(window).scrollTop() < contact) {
        $('#navAbout').addClass('active');
    }
    else {
        $('#navAbout').removeClass('active');
    }
    if ($(window).scrollTop() > contact) {
        $('#navContact').addClass('active');
    }
    else {
        $('#navContact').removeClass('active');
    } 
});