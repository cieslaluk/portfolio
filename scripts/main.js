function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var $link = $(".topnav li:not(:last-child)");
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
