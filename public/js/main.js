
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
		}, 500);
	}

	let scrollToProjects = function(){

		var projectsTop = $('#projectsPageContainer').offset().top;
		$('html, body').animate({
		  scrollTop: projectsTop,
		}, 500);
	}

	let scrollToContact = function(){

		var contactTop = $('#contactPageContainer').offset().top;
		$('html, body').animate({
		  scrollTop: contactTop,
		}, 500);
	}


})