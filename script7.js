$(document).ready(function(){
	$(".animasi1").click(function(){
		$(".isi1").animate({left: '500px'});
	});
	$(".animasi2").click(function(){
		$(".isi2").animate({
			left: '200px',
			top: '100px',
			fontSize: '2cm',
			padding: '40px'
		}, 5000, "linear");
	});
	$(".animasi3").click(function(){
		$(".isi3").animate({
			left: '+=20px',
			top: '-=10px',
		}, "slow");
	});
	$(".animasi4").click(function(){
		$(".isi4").animate({
			left: 'toggle',
			top: 'toggle',
		}, "fast", "swing");
	});
	$(".animasi5").click(function(){
		$(".isi5, .isi4").animate({
			left: '60px',
			top: '100px',
			borderWidth: '10px',
			fontSize: '2cm'
		});
		$(".isi5, .isi2").animate({
			left: '400px',
			top: '500px',
			borderWidth: '1px',
			fontSize: '10px'
		});
		$(".isi5, .isi3").animate({
			left: '500px',
			top: '10px',
			borderWidth: '10px',
			fontSize: '3cm'
		});
		$(".isi5, .isi1").animate({
			left: '60px',
			top: '10px',
			borderWidth: '10px',
			fontSize: '2cm'
		});
	});
});