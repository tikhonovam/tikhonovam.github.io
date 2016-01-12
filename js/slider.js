

$(document).ready(function ($) {

	var sliderTimer = setInterval(function () { moveRight();}, 5000); 
	$(".slider").hover(function(){
        clearInterval(sliderTimer);
    },function(){
        sliderTimer=setInterval(function () { moveRight();}, 5000);
    });
	
	var slideCount = $(".slider ul li").length;
	var slideWidth = $(".slider ul li").width();
	var sliderUlWidth = slideCount * slideWidth;
	
	$(".slider").css({ width: slideWidth});
	
	$(".slider ul").css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $(".slider ul li:last-child").prependTo(".slider ul");

    function moveLeft() {
        $(".slider ul").animate({
            left: + slideWidth
        }, 500, function () {
            $(".slider ul li:last-child").prependTo(".slider ul");
            $(".slider ul").css('left', '');
        });
    };

    function moveRight() {
        $(".slider ul").animate({
            left: - slideWidth
        }, 500, function () {
            $(".slider ul li:first-child").appendTo(".slider ul");
            $(".slider ul").css('left', '');
        });
    };

    $(".slider_left").click(function () {
        moveLeft();
    });

    $(".slider_right").click(function () {
        moveRight();
    });

});





