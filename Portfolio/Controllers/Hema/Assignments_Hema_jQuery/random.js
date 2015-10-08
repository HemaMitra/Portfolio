$(function(){

	var cnt = 0;
	var num = [];
	//var num1 = '';
	var tot = 0;
	for (cnt = 0;cnt < 10;cnt++)
	{
		num[cnt] = Math.round(Math.random() * 10);
		//num1 = num[cnt] + ' ' + num1;
	} 
	
	$('#arrno').text(num);	

	jQuery.each(num,function(i,val){
		tot = tot + num[i];				
	});

	$('#addDiv').text("Addition Of Above Numbers Is : " +tot);

	tot = 1;

	jQuery.each(num,function(i,val){
		tot = tot * num[i];				
	});

	$('#mulDiv').text("Multiplication Of Above Numbers Is : " +tot);

});