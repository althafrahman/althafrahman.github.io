$(document).ready(function () {

    const myDOB = '1998-01-20'
    const mycareerStartDate = '2019-06-20'
    const myAge = getYearDiffrence(myDOB, true);
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

function getYearDiffrence(initialyear, isAge = false) {
    const date1 = new Date(initialyear);
    const date2 = new Date(Date.now());
    const diff = Math.floor(date1.getTime() - date2.getTime());
    const day = 1000 * 60 * 60 * 24;
    const days = Math.floor(diff / day);
    const months = Math.floor(days / 31)
    const yearDiff =  (Math.abs(months / 12) % 1 !== 0 && !isAge) ? Math.floor(Math.abs(months / 12))+'+' : Math.floor(Math.abs(months / 12))
    return yearDiff;
}