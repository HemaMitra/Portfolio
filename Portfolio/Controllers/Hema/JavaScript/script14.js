$(document).ready(function (){   

	// startup code
	//alert("In ready code");

// 	$("#title").text("I got changed using jQuery ready method");

//	$("#first").html("<h2>Adding H2 through jQuery</h2>"); // will erase H1 and put H2


	//append and prepend work INSIDE the given selection
	$("#first").prepend("<h2>Adding H2 through jQuery</h2>"); // will add this text before H1
	$("#first").append("<h3>Added after H1</h3>"); // will add this text after H1

	// work after OUTSIDE given selection before , after, insertBefore, insertAfter


	$("#title").addClass("standout");

	jQuery('#first').fadeOut(100).fadeIn(100);

	$("#third").before('<div id="badge">Adding this tag dynamically using jQuery before</div>');

	$("<div id='badge1'>Adding this tag dynamically using jQuery insertBefore</div>").insertBefore('#third');




});





