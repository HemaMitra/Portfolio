$(function(){

  $('#N1').focus();
  $('#Fact').hide();

    // Finding the factorial
  $('#B1').click(function(){

     var loop = 1, result = 1;  
     var num = $('#N1').val();

     if(num == '')
     {
	$('#Fact').addClass('errMsg');
	$('#Fact').text('Enter a Number').show();
     } 
     else      	
     {	
    // Calculate the factorial if a valid number is entered
	for(loop = 1;loop<=num;loop++)
	{
		result = result * loop;
	}
	
     // Display Result
		$('#Fact').removeClass('errMsg');
		$('#Fact').text("The factorial of the entered number is : " +result).show();
        }
	  });

  // Clear fields
  $('#B2').click(function(){

     $('#N1').val('');   	
     $('#N1').focus();
     $('#Fact').hide();
  });

});