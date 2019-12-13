function set_buttons_style() {
	var viewport_width = $(window).width();
	var min_viewport_width = 660;
	var buttons = $("#buttons");
	var icons = $("#buttons");

	if (viewport_width <= min_viewport_width) {
		buttons.addClass('mini');
	}
	else {
		buttons.removeClass('mini');
	}
}

function sticky_header() {
	var stickyOffset = $('#thoughts').offset().top;
	var scroll = $(window).scrollTop();
	var sticky = $('#navigation_buttons');

	if (scroll >= stickyOffset) {
		sticky.addClass('sticky_fixed');
	}
	else {
		sticky.removeClass('sticky_fixed');
	};
}

$(document).ready(
	function() {
	/* Set sticky header */
	sticky_header();	
	/* Set main buttons style */
	set_buttons_style();

	$(window).scroll(sticky_header);
	$(window).resize(set_buttons_style);
});