
var month = prompt("Enter a 2-digit month.");
month = Number(month);

var day = prompt("Enter a 2-digit day.");
day = Number(day);

var year = prompt("Enter a 2-digit year.");
year = Number(year);

var magic = day * month;

if (magic === year){
    alert('Your date is magic!.');
}
else {alert('Your date is not magical!.');
}

