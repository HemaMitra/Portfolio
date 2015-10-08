/*$(function() {

  function mainFun() 
  {  
    var catName = "Mr. Mitra";  
    subFun();  // () means it executes the inner method immediately
    function subFun() 
    { 
      // functional scoping: in JavaScript, the scope 
      // of a variable is defined by its location within 
      // the source code, and nested functions have 
      // access to variables declared in their outer scope 

      alert(catName);  
     }  
    
  }

  $('#buildcat').click(function() {
    mainFun();
  });
   
});
*/

/*
$(function() {
  function mainFun() 
  {
    var catName = "Tuffy";
    function subFun() 
    {
      alert(catName);
    }
    // Notice: instead of executing it, it just 
    // returns a REFERENCE!
    return subFun;
  }
  
  $('#buildcat').click(function() 
  {
    var myNewCat = mainFun();
    // mainFun() has executed.  It has gone out of scope now,
    // and all its private function variables with it, right?  Right?
    
    myNewCat(); // <-- Not so fast ... the catName variable value LIVES!
  });


});
*/


$(function(){
	alert('Hello');

	a = (function() 
    	{
      		var privateFunction = function() 
      		{
			//var n1=10, n2=5;
		        alert('hello');
      		}

	        return 
      		{
        		publicFunction: function() 
        		{
				alert("inside public");
          			privateFunction();
				//alert(privateFunction.n1);
        		}
      		}
    	})();

	a.publicFunction();
	

	
});



















