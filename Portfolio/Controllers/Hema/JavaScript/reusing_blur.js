flag = 0;

// Check blank field at blur event
	$('.required').blur(function(){
		if(!$.trim($(this).val())) {
		$('#ERRMSG').addClass('errMsg');	   // adding css class
		$('#ERRMSG').text("Enter Number").show();  // some error msg displayed if field is blank
	   
	        $(this).focus();			  // getting focus on the field which is blank.	
		
		flag++;
	}
    
  });
