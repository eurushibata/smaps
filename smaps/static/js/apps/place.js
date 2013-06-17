$(document).ready(function() {
	$('#menu-box').scrollspy().affix();

	$('.front-board').on('scroll', function (e){
		if ($('#menu-box').position().top < 0) {
			$('.header').css('margin-bottom', 80);
			$('#menu-box').css('top', 0).css('position', 'fixed');
		}
		if ($('.header').position().top > -100) {
			$('.header').css('margin-bottom', 0);
			$('#menu-box').css('position', '').css('top', '');
		};
	});



	$('.menu-item').tooltip({'placement':'bottom'});


});