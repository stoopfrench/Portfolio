
$(document).ready(function(){

	console.log('DOCUMENT LOADED')

	$(window).scrollTop(0)

	$('#chevronImage').on('click', function(){

		scrollToProjects()
	})

	$('#toTopImage').on('click', function(){

		scrolltoTop()
	})

	let scrolltoTop = function(){

		$('html, body').animate({
			scrollTop: 0,
			}, 500)
	}

	let scrollToAbout = function(){
		
		var aboutTop = $('#aboutPage').offset().top;
		$('html, body').animate({
		 	scrollTop: aboutTop,
			}, 500);
	}

	let scrollToProjects = function(){

		var projectsTop = $('#projectsPage').offset().top;
		$('html, body').animate({
		  	scrollTop: projectsTop,
			}, 500);
	}

	let scrollToContact = function(){

		var contactTop = $('#contactPage').offset().top;
		$('html, body').animate({
			scrollTop: contactTop,
			}, 500);
	}

})