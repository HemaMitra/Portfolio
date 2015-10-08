$(function(){

var result = 0;
$('#result').hide();
$('#addNum').addClass('hoverOut');

  $('#addNum').click(function () {
    
	result = parseInt($('#num1').val()) + parseInt($('#num2').val());
      
        //display result in H2 tag
	$('#result').text(result).show('slow');

  });

  $('#addNum').hover(function(){
    $('#addNum').removeClass('hoverOut').addClass('hoverIn');
    }, function(){
    $('#addNum').removeClass('hoverIn').addClass('hoverOut');
  });

});