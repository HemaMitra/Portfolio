$(function(){
//	alert('hi');

	var numberArray = [];
	var length = 0;	
	for(i =0;i<length;i++)
	{
		numberArray.push(Math.round(Math.random() * 10));
	}



	$('#display').text(jQuery.each(numberArray,function(i,val){}));			

});


