jQuery(document).ready(function($) {
	
	$("#add").click(function(e) {
		console.log("add");
		$("body").addClass("dark");
	});

	$("#remove").click(function(e) {
		console.log("remove");
		$("body").removeClass("dark");
	});

	$("#toggle").click(function(e) {
		console.log("toggle");
		$("body").toggleClass("dark");
	});

});