$('body').on('click', '#fndRand', function () {

	var cnt = 0;
	var num = [];
	var tot = 0;
	for (cnt = 0;cnt < 10;cnt++)
	{
		num[cnt] = Math.round(Math.random() * 10);
	} 
	
	$('#arrno').text("The Numbers In The Array Are : " +num);	

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

//This clears out the content of each of the inputs in the modal popups and also clears out the results 
//divs with the class of jsClearOnExit
$('body').on('hidden.bs.modal', '.modal', function (event) {
    $(event.target).find('input').each(function (index, element) {
        $(element).val('')
    })
    $(event.target).find('.jsClearOnExit').each(function (index, HTMLDivElement) {
        $(HTMLDivElement).text('')
    })

});