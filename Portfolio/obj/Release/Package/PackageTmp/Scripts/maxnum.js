$('body').on('click', '#FndMax', function () {

  $('#N1').focus().select();
  $('#MAXNO').hide();
  
  var n1=0, n2=0, n3=0, n4=0, n5=0;
  var result = 0;

  // Finding Max Number
 

    n1 = $('#N1').val(); 
    n2 = $('#N2').val();     
	n3 = $('#N3').val();
	n4 = $('#N4').val();
	n5 = $('#N5').val();

	if((n1 == '' ||  n2 == ''  ||  n3 == ''  ||  n4 == ''  ||  n5 == '' ))
	{
		$('#MAXNO').addClass('errMsg');
		$('#MAXNO').text("Enter Number").show();
	}
	else
	{
		result = Math.max(n1,n2,n3,n4,n5);	

	     // Display Result
		
		$('#MAXNO').removeClass('errMsg');
		
		$('#MAXNO').text("Max Number is : " +result).show();
	}
});

  // Clear fields
	$('body').on('click', '#ClrMax', function (){

     $('#N1').val(0).select();   	
     $('#N2').val(0);
     $('#N3').val(0);
     $('#N4').val(0);
     $('#N5').val(0);
     
     $('#N1').focus();
     $('#MAXNO').hide();
 });




