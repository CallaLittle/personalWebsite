// load gallary as default
$(document).ready(function () {


	// load gallary when clicked
	$("#portfolio").on('click', taco);



	$("#about").click(function()
		{
			$("#content").load("about.html");
			
			return false;
		});

function taco() {	

	$("#content").load("maps.html")
		
	return false;
};
});