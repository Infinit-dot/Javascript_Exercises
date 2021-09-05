//current Date

let currentDay = new Date();
let  day = currentDay.getDay();
let hour = currentDay.getHours();
let minute = currentDay.getMinutes();
let seconds = currentDay.getSeconds();

switch (day) {
  case 0:
    document.getElementById("day").innerHTML = ('Today is : Sunday');
    break;
  case 1:
    document.getElementById("day").innerHTML =('Today is : Monday');
   break;
  case 2:
    document.getElementById("day").innerHTML =('Today is : Tuesday');
    break;
  case 3:
    document.getElementById("day").innerHTML =('Today is : Wednesday');
    break;
  case 4:
    document.getElementById("day").innerHTML =('Today is : Wednesday');
    break;
  case 5:
    document.getElementById("day").innerHTML =('Today is : Thursday');
    break;
  case 5:
    document.getElementById("day").innerHTML =('Today is : Saturday');
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

//--------------------------------------------------


let text = "w3resource";
setInterval(()=>{
text = text[text.length - 1] + text.substring(0,text.length - 1);
document.querySelector(".animation").innerText = text;
},300)