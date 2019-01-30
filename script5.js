$(document).ready(function(){
	$("#sembunyi").click(function(){
		$(".d1").hide();
		$(".d2").hide("slow");
		$(".d3").hide("fast");
		$(".d4").hide(5000);
	});
	$("#tampil").click(function(){
		$(".d1").show();
		$(".d2").show("slow");
		$(".d3").show("fast");
		$(".d4").show(5000);
	});
	$("#toggle").click(function(){
		$(".d1").toggle();
		$(".d2").toggle("slow");
		$(".d3").toggle("fast");
		$(".d4").toggle(5000);
	});

	$("#fadein").click(function(){
		$(".f1").fadeIn();
		$(".f2").fadeIn("slow");
		$(".f3").fadeIn("fast");
		$(".f4").fadeIn(5000);
	});
	$("#fadeout").click(function(){
		$(".f1").fadeOut();
		$(".f2").fadeOut("slow");
		$(".f3").fadeOut("fast");
		$(".f4").fadeOut(5000);
	});
	$("#fadetoggle").click(function(){
		$(".f1").fadeToggle();
		$(".f2").fadeToggle("slow");
		$(".f3").fadeToggle("fast");
		$(".f4").fadeToggle(5000);
	});
	$("#fadeto").click(function(){
		$(".f1").fadeTo(2000, 0.2);
		$(".f2").fadeTo("slow", 0.3);
		$(".f3").fadeTo("fast", 0.5);
		$(".f4").fadeTo(5000, 0.4);
	});
	$("#slideup").click(function(){
		$(".s1").slideUp();
		$(".s2").slideUp("slow");
		$(".s3").slideUp("fast");
		$(".s4").slideUp(5000);
	});
	$("#slidedown").click(function(){
		$(".s1").slideDown();
		$(".s2").slideDown("slow");
		$(".s3").slideDown("fast");
		$(".s4").slideDown(5000);
	});
	$("#slidetoggle").click(function(){
		$(".f1").slideToggle();
		$(".f2").slideToggle("slow");
		$(".f3").slideToggle("fast");
		$(".f4").slideToggle(5000);
	});
	$("#slideto").click(function(){
		$(".f1").slideTo(2000, 0.2);
		$(".f2").slideTo("slow", 0.3);
		$(".f3").slideTo("fast", 0.5);
		$(".f4").slideTo(5000, 0.4);
	});
});