$(document).ready(function(){
	$(".a1").click(function(){
		$(".p2").show();
		$(".a2").show();
	})
	$(".a2").click(function(){
		$(".p1").hide();
		$(".p3").show();
		$(".a4").show();
		
	})
	$(".a3").click(function(){
		$(".p1").show();
		$(".a1").show();
	})
	$(".a4").click(function(){
		$(".p1").toggle();
		$(".p2").toggle();
	})

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
		$(".s1").slideToggle();
		$(".s2").slideToggle("slow");
		$(".s3").slideToggle("fast");
		$(".s4").slideToggle(5000);
	});
});