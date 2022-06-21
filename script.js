const days  = document.getElementById('days')
const hours  = document.getElementById('hours')
const minutes  = document.getElementById('minutes')
const seconds  = document.getElementById('seconds')
const countdownEl = document.getElementById('countdown')

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear+1} 00:00:00`)



function updateCountdown(){
  const currentTime = new Date();
  const diff = newYearTime-currentTime;
  //16705137562 => ค่า milliseconds
  // 1000 milliseconds
  // 60 minutes
  // 60 seconds
  const d = Math.floor(diff/1000/60/60/24);
  const h = Math.floor(diff/1000/60/60)%24
  const m = Math.floor(diff/1000/60)%60
  const s = Math.floor(diff/1000)%60
  days.innerHTML = d
  hours.innerHTML = h<10 ? `0${h}`:h
  minutes.innerHTML= m<10 ? `0${m}` : m;
  seconds.innerHTML= s<10 ? '0'+s : s;
}

setInterval(updateCountdown,1000);