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
	$(document).ready(function () {
	function today() {
		var mydate = new Date();
		var year = mydate.getYear();
		if (year < 1000) year += 1900;
		var day = mydate.getDay();
		var month = mydate.getMonth();
		var daym = mydate.getDate();
		if (daym < 10) daym = "0" + daym;
		var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
		var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September",
			"October", "November", "December");
		document.write("" + dayarray[day] + ", " + montharray[month] + " " + daym + ", " + year + "");
	}
	var kgConverter = function(unit, amount) {
			var weight;
			switch (unit) {
					case 'kg':
							weight = amount * 1;
							return document.write(Math.round(weight) + " " + unit);
							break;
					case 'lbs':
							weight = amount * 2.20462;
							return document.write(Math.round(weight) + " " + unit);
							break;
					case 'stone':
							weight = amount * 0.157473;
							return document.write(weight.toFixed(1) + " " + unit);
							break;
			}
	}
});
})