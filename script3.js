$(document).ready(function(){
	$("#judul1").click(function(){
		$("p.posting").slideUp();
	});
	$("#judul2").dblclick(function(){
		$("p.posting2").slideUp();
	});
	$(".div4").mouseenter(function(){
		$("p.pesan4").slideUp();
	});
	$(".div4").click(function(){
		$("p.pesan4").slideDown();
	});
	$("#judul3").on({
		mouseenter: function(){
			$(this).css("background-color", "lightgray")
		},
		mouseleave: function(){
			$(this).css("background-color", "lightblue")
		},
		click: function(){
			$(this).css("background-color", "yellow");
		}
	});
});