const days = document.getElementById("d");
const hours = document.getElementById("h");
const min = document.getElementById("min");
const second = document.getElementById("s");
const year = document.getElementById("year");

const yearNow = new Date().getFullYear();
const yearNew = new Date(`January 01 ${yearNow + 1} 00:00:00`);

function countdownTimer() {
  const timeNow = new Date();
  const difference = yearNew - timeNow;
  // console.log(difference);

  const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor((difference / 1000 / 60 / 60) % 24);
  const minLeft = Math.floor((difference / 1000 / 60) % 60);
  const secondLeft = Math.floor((difference / 1000) % 60);

  days.innerHTML = daysLeft;
  hours.innerHTML = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  min.innerHTML = minLeft < 10 ? "0" + minLeft : minLeft;
  second.innerHTML = secondLeft < 10 ? "0" + secondLeft : secondLeft;

  year.innerHTML = yearNow;
}

countdownTimer();
setInterval(countdownTimer, 1000);
