$('body').on('click', '#fndFizz', function () {
    
    var num = 1;
    var arr = new Array(100);
    
    // checking for multiples and initializing the array arr
    for (num = 1; num <= 100; num++) {
        if (num % 3 == 0 && num % 5 == 0) {
            arr[num - 1] = 'FIZZBUZZ';
        }
        else if (num % 3 == 0) {
            arr[num - 1] = 'FIZZ';
        }
        else if (num % 5 == 0) {
            arr[num - 1] = 'BUZZ';
        }
        else
            arr[num - 1] = num;
    }

    // Reinitializing loop variable to 0 for reuse
    num = 0;
    // Generating table at run time
    var table = document.createElement("TABLE");
    table.border = 2;
    table.cellPadding = 5;
    table.cellSpacing = 5;
    // Add rows to the table
    for (var rowCnt = 0; rowCnt < 10; rowCnt++) {
        var row = table.insertRow(-1);

        // Add columns in each row
        for (var colCnt = 0; colCnt < 10; colCnt++) {
            var col = row.insertCell(-1);
            col.innerHTML = arr[num];
            num++;
        }
    }
// Displaying table
    var divTab = document.getElementById("divTab");
    divTab.innetHTML = "";
    divTab.appendChild(table);
    $('#divTab').show();
});


