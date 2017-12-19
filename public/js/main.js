
$(document).ready(function(){

	console.log('DOCUMENT LOADED')

	$(window).scrollTop(0)

	$('#enterButton').on('click', function(){

		scrollToAbout()
	})

	let scrollToAbout = function(){
		
		var aboutTop = $('#aboutPageContainer').offset().top;
		$('html, body').animate({
		  scrollTop: aboutTop,
		}, 750);
	}


})