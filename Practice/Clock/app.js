function padZero(num) {
  return num.toString().padStart(2, '0');
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  document.getElementById('hour').innerText = padZero(hours);
  document.getElementById('minute').innerText = padZero(minutes);
  document.getElementById('second').innerText = padZero(seconds);

  document.getElementById('hours').style.transform = `rotateZ(${hours * 30 + minutes * 0.5}deg)`;
  document.getElementById('minutes').style.transform = `rotateZ(${minutes * 6}deg)`;
  document.getElementById('seconds').style.transform = `rotateZ(${seconds * 6}deg)`;
}

// 1초마다 실행
setInterval(updateClock, 1000);
updateClock();

