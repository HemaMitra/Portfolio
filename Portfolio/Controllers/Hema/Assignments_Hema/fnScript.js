// Javascript code for MaxNum

function focus() 
{
    document.getElementById('N1').focus();
}


function chknum(nme) 
{
    if (document.getElementById(nme).value == ' ' || document.getElementById(nme).value == '') {
        alert("Blank field not allowed.");
        document.getElementById(nme).focus();
    }

    if (isNaN(document.getElementById(nme).value)) {
        alert("Enter a valid number.");
        document.getElementById(nme).focus();
    }
}

function maxOfFive() 
{
    var v1 = parseInt(document.getElementById('N1').value);
    var v2 = parseInt(document.getElementById('N2').value);
    var v3 = parseInt(document.getElementById('N3').value);
    var v4 = parseInt(document.getElementById('N4').value);
    var v5 = parseInt(document.getElementById('N5').value);
    var v = 0;
  
    v = Math.max(v1, v2, v3, v4, v5)

    document.getElementById("MaxNo").innerHTML = "Max number entered is : " + v;
}

function clrdta() {
    document.getElementById('N1').value = '0';
    document.getElementById('N2').value = '0';
    document.getElementById('N3').value = '0';
    document.getElementById('N4').value = '0';
    document.getElementById('N5').value = '0';

    document.getElementById("MaxNo").innerHTML = "";
    focus();
}

// JavaScript source code for Factorial


//Clearing the data
function clrdtaFact()
{
	document.getElementById('N1').value = '';
	document.getElementById("Fact").innerHTML = "";
	focus();
}


//Calculate factoroial of the entered number
function fact(nme)
{
	var num = document.getElementById('N1').value;
	var loop = 1;
	var res = 1,flag=1;

	// Check for blank field
	if(document.getElementById(nme).value == ' ' || document.getElementById(nme).value == '' )
	{
		alert("Blank field not allowed.");
		document.getElementById(nme).focus();
		flag = 0;
	}

	// Check for valid number
	if(isNaN(document.getElementById(nme).value))
	{
		alert("Enter a valid number.");
		document.getElementById(nme).focus();
		flag = 0;
	}

	// Calculate the factorial if a valid number is entered
	for(loop = 1;loop<=num;loop++)
	{
		res = res * loop;
	}

	// Display resultin DIV tag	
	if(flag == 1)	
		document.getElementById("Fact").innerHTML = "Factorial of entered no is : " +res;
	else
		document.getElementById("Fact").innerHTML = "";
}

// Javascript function for Multiples

function fndMult()
{
	var num = 1;
	var arr = new Array(100);
	
	// checking for multiples and initializing the array arr
	for(num = 1;num<=100;num++)
	{
		if(num % 3 == 0 && num % 5 == 0)
		{
			arr[num-1] = 'FIZZBUZZ';
		}
		else if(num % 3 == 0)
		{
			arr[num-1] = 'FIZZ';
		}
		else if(num % 5 == 0)
		{
			arr[num-1] = 'BUZZ';
		}
		else
			arr[num-1] = num;
	}

	// Reinitializing loop variable to 0 for reuse
	num = 0;
	// Generating table at run time
	var table = document.createElement("TABLE");
	table.border = 2;

	// Add rows to the table
	for(var rowCnt = 0;rowCnt < 10;rowCnt++)
	{
		var row = table.insertRow(-1);
	
		// Add columns in each row
		for(var colCnt = 0;colCnt < 10;colCnt++)
		{
			var col = row.insertCell(-1);
			col.innerHTML = arr[num];
			num++;
		}		
	}

	// Displaying table

	var divTab = document.getElementById("divTab");
	divTab.innetHTML = "";
	divTab.appendChild(table);
}


// Javascript function for RandomAdd


function dspRes()
{
	var cnt = 0;
	var num = [];
	var num1 = '';
	var tot = 0;
	for (cnt = 0;cnt < 10;cnt++)
	{
		num[cnt] = Math.round(Math.random() * 10);
		num1 = num[cnt] + ' ' + num1;
		
	} 
	
	
	document.getElementById("arrno").innerHTML = num1;	

	for (cnt = 0;cnt < 10;cnt++)
	{
		tot = tot + num[cnt];
		
	} 
	document.getElementById("addDiv").innerHTML = tot;	

	tot = 1;	
	for (cnt = 0;cnt < 10;cnt++)
	{
		tot = tot * num[cnt];
		
	} 
	document.getElementById("mulDiv").innerHTML = tot;	

}


// Javascript function for Palindrom

function clrdtaPali()
{
	document.getElementById('N1').value = '';
	document.getElementById("pali").innerHTML = "";
	focus();
}

function palindrome()
{
	
	
	var str = document.getElementById('N1').value;
	str = str.toLowerCase();
	var len = str.length;
	var num = 0, flag = 1, flag1 = 1;
	
	if(str == "" || str == " ")
	{
		alert('Please enter a word');
		document.getElementById("pali").innerHTML = "";
		focus();
		flag1 = 0;
	}
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
	
	if(flag1 == 1)
	{
		if(flag == 1)
			document.getElementById("pali").innerHTML = "You have entered a palindrome";
		else
			document.getElementById("pali").innerHTML = "The entered string is not a palindrome";		
	}
}
