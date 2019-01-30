$(document).ready(function(){
	$(".div1").click(function(){
		$(".div2").slideUp(1000);
	})
	$(".div1").dblclick(function(){
		$(".div2").slideDown(1000);
	})
	$(".div2").on({
		mouseenter: function(){
			$(this).css("background-color", "lightgray")
		},
		mouseleave: function(){
			$(this).css("background-color", "lightblue")
		},
		click: function(){
			$(this).css("background-color", "lightgreen");
		}
	});

});