//current Date

let currentDay = new Date();
let  day = currentDay.getDay();
let hour = currentDay.getHours();
let minute = currentDay.getMinutes();
let seconds = currentDay.getSeconds();

switch (day) {
  case 0:
    console.log('Today is : Sunday');
    break;
  case 1:
   console.log('Today is : Monday');
   break;
  case 2:
    console.log('Today is : Tuesday');
    break;
  case 3:
    console.log('Today is : Wednesday');
    break;
  case 4:
    console.log('Today is : Wednesday');
    break;
  case 5:
    console.log('Today is : Thursday');
    break;
  case 5:
    console.log('Today is : Saturday');
    break;
}

let abr = (hour >= 12)? " PM ":" AM ";

document.getElementById("time").innerHTML =('Current time is : ' + hour + ' ' + abr + ' : ' + minute + ' : ' + seconds);

//----------------------------------------------------------

const print_page = () =>
{
  window.print();
}


//-----------------------------------------------------------

let  dayOfMonth = currentDay.getDate();
let month = currentDay.getMonth();
let year = currentDay.getFullYear();


document.getElementById("date").innerHTML = ('Current date : ' + dayOfMonth + '/'  + month + '/' + year);

//---------------------------------------
let a = 5;
let b = 6;
let c = 7;

let s = (a + b + c)/2;

let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
document.getElementById("triangle_area").innerHTML = area;