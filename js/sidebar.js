$(document).ready(function() {
	$("#blog").hover(
		function() {
			$(".descriptions").css("margin-top", "61px !important");
			$(".descriptions").css("background", "#ffffff1f !important");
			$(".descriptions").css("display", "block");
			$(".blog.description").css("display", "block");
		},
		function() {
			$(".descriptions").css("margin-top", "0");
			$(".descriptions").css("display", "none");
			$(".blog.description").css("display", "none");
	});
	$("#talks").hover(
		function() {
			$(".descriptions").css("margin-top", "61px !important");
			$(".descriptions").css("background", "#ffffff1f !important");
			$(".descriptions").css("display", "block");
			$(".talks.description").css("display", "block");
		},
		function() {
			$(".descriptions").css("margin-top", "0");
			$(".descriptions").css("display", "none");
			$(".talks.description").css("display", "none");
	});
	$("#linkedin").hover(
		function() {
			$(".descriptions").css("margin-top", "61px !important");
			$(".descriptions").css("background", "#ffffff1f !important");
			$(".descriptions").css("display", "block");
			$(".linkedin.description").css("display", "block");
		},
		function() {
			$(".descriptions").css("margin-top", "0");
			$(".descriptions").css("display", "none");
			$(".linkedin.description").css("display", "none");
	});
	$("#github").hover(
		function() {
			$(".descriptions").css("margin-top", "51px !important");
			$(".descriptions").css("background", "#ffffff1f !important");
			$(".descriptions").css("display", "block");
			$(".github.description").css("display", "block");
		},
		function() {
			$(".descriptions").css("margin-top", "0");
			$(".descriptions").css("display", "none");
			$(".github.description").css("display", "none");			
	});
	$("#email").hover(
		function() {
			$(".descriptions").css("margin-top", "51px !important");
			$(".descriptions").css("background", "#ffffff1f !important");
			$(".descriptions").css("display", "block");
			$(".email.description").css("display", "block");
		},
		function() {
			$(".descriptions").css("margin-top", "0");
			$(".descriptions").css("display", "none");
			$(".email.description").css("display", "none");
	});
	$("#about").hover(
		function() {
			$(".descriptions").css("margin-top", "51px !important");
			$(".descriptions").css("background", "#ffffff1f !important");
			$(".descriptions").css("display", "block");
			$(".about.description").css("display", "block");
		},
		function() {
			$(".descriptions").css("margin-top", "0");
			$(".descriptions").css("display", "none");
			$(".about.description").css("display", "none");
	});
});