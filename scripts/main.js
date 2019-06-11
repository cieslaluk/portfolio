function navigationBarResponsive() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

let $link = $(".topnav li:not(:last-child)");
$link.click(function () {
    if ($("#myTopnav").hasClass("responsive")) {
        $("#myTopnav").removeClass("responsive");
    }
});

$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $("nav").addClass("scrolling");
    } else {
        $("nav").removeClass("scrolling");
    }
});

$(document).ready(function () {

    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});