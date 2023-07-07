function copy_bibtex_to_clipboard(paper) {
	var bibtex = $("#" + paper + " .bibtex pre code")[0];
	var content = bibtex.innerHTML
	
	navigator.clipboard.writeText(content);
	var copy_button = $("#" + paper + " .content .bibtex .copy i")
	copy_button.removeClass("fa-copy");
	copy_button.addClass("fa-check");

	setTimeout(() => {
		copy_button.removeClass("fa-check");
		copy_button.addClass("fa-copy");
	}, 3000)
}

function download_bibtex(paper) {
	var download_button = $("#" + paper + " .bibtex .download i")

	download_button.removeClass("fa-download");
	download_button.addClass("fa-check");

	setTimeout(() => {
		download_button.removeClass("fa-check");
		download_button.addClass("fa-arrow-down-to-line");
	}, 3000)
}

function copy_doi_to_clipboard(paper) {
	var doi = $("#" + paper + " .doi pre code")[0];
	var content = doi.innerHTML
	
	navigator.clipboard.writeText(content);
	var copy_button = $("#" + paper + " .content .doi .copy i")
	copy_button.removeClass("fa-copy");
	copy_button.addClass("fa-check");

	setTimeout(() => {
		copy_button.removeClass("fa-check");
		copy_button.addClass("fa-copy");
	}, 3000)
}
