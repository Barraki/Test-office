$(function() {
	//Fixed nav-menu
	$(document).ready(function () {
		$(document).scroll(function scrollPage() {
			if ($(this).scrollTop() > 1) {
				$('body').addClass(".module-reading-list-collapsed header-active");
				$('body').addClass(".header-active");

			} else { 
				$('body').removeClass(".module-reading-list-collapsed header-active");
				$('body').removeClass(".header-active");
			}
		});
	});
	//hover drobbox
	$(document).ready(function () {
		$( ".header-nav-primary-more" ).hover(
			function() {
				$( this ).addClass( "hover-active" );
			}, function() {
				$( this ).removeClass( "hover-active" );
			}
		);
	});

})