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

$(document).ready(
	function() {
	/* Set main buttons style */
	set_buttons_style();

	$(window).resize(set_buttons_style);
});