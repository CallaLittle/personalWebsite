// load gallary as default
$(document).ready(function () {

	$('#navContainer').hide();

	// $('#content').load('landing.html');
	
	// load gallary when clicked
	$(".portfolio").on('click', function() {

		$('#navContainer').show();
		$('#landing').hide();
		$("#content").load("maps.html")
		
		return false;

	});

	$(".about").on('click', function() {

		$('#navContainer').show();
		$('#landing').hide();
		$("#content").load("about.html");
			
		return false;
		
	});

});