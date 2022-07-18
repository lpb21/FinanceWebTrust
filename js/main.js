$(document).ready(function(){
	
	//Caught navigation clicks
	$('a.nav-btn').on('click', function(e){
		e.preventDefault();

		//New section.
		var sectionId = $(this).attr('href');

		//This is to change the title color
		if(sectionId == '#landing'){
			$('h1').removeClass('dark-title');
		}else{
			$('h1').addClass('dark-title');
		}

		//Define new active section.
		$('section.active').hide().removeClass('active');
		$(sectionId).show().addClass('active');
	});

	//Custmize scrollbars.
	$(".copy").mCustomScrollbar({
		autoHideScrollbar:false,
		theme:"rounded"
	});

	//Set fake preloader.
	percent = 0;
	loader = setInterval(function(){
		percent++;
		$('.zprogress > .status').css('height', percent + '%');
		if(percent >= 98){
			clearInterval(loader);
			$('.header').addClass('transition-in');
			$('section.active').removeClass('active').addClass('transition-out');
			$('#landing').show().addClass('active');
		}
	}, 20);
});