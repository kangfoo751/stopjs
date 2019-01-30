$(document).ready(function(){

	$(".mundur").click(function(){
		$(".car").animate({left: '-=100px'});
	});
	$(".maju").click(function(){
		$(".car").animate({left: '+=100px'});
	});
	$(".right").click(function(){
		$(".car").css("transform","rotate(0deg)");
	});
	$(".left").click(function(){
		$(".car").css("transform","rotate(180deg)");
	});
	$(".bottom").click(function(){
		$(".car").css("transform","rotate(90deg)");
		$(".car").animate({top: '+=100px'});
	});
	$(".top").click(function(){
		$(".car").css("transform","rotate(270deg)");
		$(".car").animate({top: '-=100px'});
	});
});