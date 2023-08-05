$(document).ready(function () {

    const myDOB = '1998-01-20'
    const mycareerStartDate = '2019-06-20'
    const myAge = getYearDiffrence(myDOB);
    const myExperience = getYearDiffrence(mycareerStartDate)
    $('#myAge').html(myAge);
    $('.myExperience').html(myExperience)
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

function getYearDiffrence(initialyear) {
    let date1 = new Date(initialyear);
    let date2 = new Date(Date.now());
    let yearsDiff = date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
}