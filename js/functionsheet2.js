var isMenuOpen = false;

var menuOpen = function() {
    $(".menu").finish();
    $(".menu").animate({
        left: "0px"
    }, 300);
    $(".menuButton").animate({
        left: "-20px"
    }, 200);

    isMenuOpen = true;
};
var menuClose = function() {
    $(".menu").finish();
    $(".menu").animate({
        left: "-240px"
    }, 300);
    $(".menuButton").animate({
        left: "0px"
    }, 200);

    isMenuOpen = false;
};
var menu = function() {
    $(".menuButton").click(function() {
        if (isMenuOpen === false) {
            menuOpen();
        }
        else {
            menuClose();
        }
    });
};

$(document).ready(menu);
