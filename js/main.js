$(document).ready(function() {





    // gotop
    $(".gotop").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 1200);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.gotop').fadeIn("fast");
        } else {
            $('.gotop').stop().fadeOut("normal");
        }
    });

    //tooltip

    $("[rel='tooltip']").tooltip({ title: " ヽ（'Д`）人（'Д`）人（'Д`）ノ ", animation: true, placement: "right" });



    //menu

    //hover effect    
    $('.menu__item').mouseover(function() {
            $(this).addClass('menu__item--current');
        })
        .mouseout(function() {
            $(this).removeClass('menu__item--current');
        });


    //錨點
    // $(".container").click(function() {
    //     $("html,body").animate({
    //         scrollTop: 0
    //     }, 1200);
    // });


    $('.container').on('click', '.anchor', function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1200);

        return false;
    });



    //判斷高度

    var aboutMeTop = $('.aboutMe').offset().top;
    var bannerTop = $('.banner').offset().top;
    var projectsTop = $('#projects').offset().top;
    var QuizBanksTop = $('#QuizBanks').offset().top;
    var otherDemosTop = $('#otherDemos').offset().top;

    $(window).scroll(function() {


        //修正 使用狀態模式
        if ($(window).scrollTop() >= otherDemosTop) {
            $('.menu__item.contact').addClass('menu__item--current');

            $('.menu__item.aboutMe').removeClass('menu__item--current');
            $('.menu__item.Projects').removeClass('menu__item--current');
            $('.menu__item.Quiz').removeClass('menu__item--current');
            $('.menu__item.Demos').removeClass('menu__item--current');

        } else if ($(window).scrollTop() >= QuizBanksTop) {
            $('.menu__item.Demos').addClass('menu__item--current');

            $('.menu__item.aboutMe').removeClass('menu__item--current');
            $('.menu__item.Projects').removeClass('menu__item--current');
            $('.menu__item.Quiz').removeClass('menu__item--current');
            $('.menu__item.contact').removeClass('menu__item--current');

        } else if ($(window).scrollTop() >= projectsTop) {
            $('.menu__item.Quiz').addClass('menu__item--current');


            $('.menu__item.aboutMe').removeClass('menu__item--current');
            $('.menu__item.Projects').removeClass('menu__item--current');

            $('.menu__item.Demos').removeClass('menu__item--current');
            $('.menu__item.contact').removeClass('menu__item--current');

        } else if ($(window).scrollTop() >= bannerTop) {

            $('.menu__item.Projects').addClass('menu__item--current');

            $('.menu__item.aboutMe').removeClass('menu__item--current');

            $('.menu__item.Quiz').removeClass('menu__item--current');
            $('.menu__item.Demos').removeClass('menu__item--current');
            $('.menu__item.contact').removeClass('menu__item--current');

        } else if ($(window).scrollTop() > aboutMeTop) {

            $('.menu__list').css({ 'display': 'block', 'position': 'fixed' });
            $('.menu__item.aboutMe').addClass('menu__item--current');

            $('.menu__item.Projects').removeClass('menu__item--current');
            $('.menu__item.Quiz').removeClass('menu__item--current');
            $('.menu__item.Demos').removeClass('menu__item--current');
            $('.menu__item.contact').removeClass('menu__item--current');


        } else {
            $('.menu__list').css({ 'display': 'flex', 'position': 'relative' });
            $('.menu__item.aboutMe').removeClass('menu__item--current');
            $('.menu__item.Projects').removeClass('menu__item--current');
            $('.menu__item.Quiz').removeClass('menu__item--current');
            $('.menu__item.Demos').removeClass('menu__item--current');
            $('.menu__item.contact').removeClass('menu__item--current');

        }







    });
        //較小畫面時的menu

        $('.phone-bar').click(function() {
            $('.menu__list-s').toggle('slow');


        });
    
});
