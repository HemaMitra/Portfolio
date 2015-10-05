$('body').on('click', '#fndFact', function () {

  $('#txtFact').focus();
  $('#Fact').hide();

    // Finding the factorial
  

     var loop = 1, result = 1;  
     var num = $('#txtFact').val();

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
$('body').on('click', '#clrFact', function () {

     $('#txtFact').val('');   	
     $('#txtFact').focus();
     $('#Fact').hide();
  });

