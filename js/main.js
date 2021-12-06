$(document).ready(function () {

    let myAge = getAge();

    $('#myAge').html(myAge);

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }

    });

    // smooth scrolling 

    $('a[href*="#"]').on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );

    });




});

function getAge(from, to) {
    let date1 = new Date('1998-01-20');
    let date2 = new Date(Date.now());
    let yearsDiff = date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
}