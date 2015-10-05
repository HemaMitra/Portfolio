$('body').on('click', '#FndPali', function () {
    
	$('#paliTxt').focus();
	$('#Pali').hide();
	
	// Check Palindrome
		var str = $('#paliTxt').val();
		str = str.toLowerCase();
		var len = str.length;
		var num = 0, flag = 0;

		if(str == '' || str == ' ')
		{
			$('#Pali').addClass('errMsg');
			$('#Pali').text('Please enter a word').show();						
	        	$('#paliTxt').focus();
		}
		else
		{
			for(num = 0;num<len;num++)
			{
				if(str.charAt(num) == str.charAt(len-1))
				{
					len = len - 1;
					flag = 1;
					continue;
				}
				else
				{
					flag = 0;
					break;
				}
			}


			// Displaying Result
			$('#Pali').removeClass('errMsg');
			if(flag == 1)
				$('#Pali').text('You have entered a Plaindrom').show();			
			else
				$('#Pali').text('The entered word is not a Plaindrom').show();			
		}
	});

	// Clear fields
$('body').on('click', '#ClrPali', function (){

		$('#paliTxt').val('');   	
        	$('#paliTxt').focus();
	     	$('#Pali').hide();
	});