$(function() {
  
  //alert("Hi");

  $('#clickme').click(function(){
	
     /*
	$.getJSON('data19.json',function(data){
  		//alert('I am clicked');  
	  var items = [];
	  $.each(data, function(key, val){
		items.push('<li id="' +key+ '">' +val+ '</li>');

	  });

	  $('<ul />',{
		'class':'interest-list',
		html:items.join('')
	  }).appendTo('body');

	});

*/


       $.ajax({
		url:'data19.json',
		dataType:'jsonp',
	        success:function(data){
  		
		    var items = [];
	  	    jQuery.each(data, function(key, val){
			items.push('<p id="' +key+ '">' +val+ '</p>');
		    });

		    $('<p />',{
			'class':'interest-list',
			html:items.join('')
	  	    }).appendTo('body');

		},

		error: function (xhr, ajaxOptions, thrownError) {
      		alert(xhr.status);
      		alert(thrownError);
			//statusCode:{
			//	404:function(){
		    	//		alert('Page Not Found');
			//	}
		        //}
       });
     });

});