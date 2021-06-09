// console.log("jay swaminarayan")

let newdate = document.getElementById('datedate');
let newweathercon = document.getElementsByClassName("weathercon");


function getday() {

  let h = new Date();

  let day = h.getDay();
  let weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  let month = h.getMonth();
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = h.getDate();

  let ampm;
  let hr = h.getHours();
  let min = h.getMinutes();
  let sec = h.getSeconds();

  if (hr < 12) {
    ampm = "AM";
  } else {
    ampm = "PM";
  }
  if (hr > 12) {
    hr = hr - 12;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }


  let ans= `${weekday[day]} | ${monthNames[month]} ${date} | ${hr}:${min}:${sec} ${ampm}`;
  newdate.innerHTML=ans;
}

