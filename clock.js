function secondRotation(seconds) {
  return (seconds  * 6)
}

function minuteRotation(seconds) {
  return Math.floor((seconds / 60) * 6)
}

function hourRotation(seconds) {
  return Math.floor((seconds / 3600) * 30)
}

let seconds = 0;

function tick() {
  seconds ++;
  document.querySelector('#second').style.transform = `rotate(${secondRotation(seconds)}deg)`
  document.querySelector('#minute').style.transform = `rotate(${minuteRotation(seconds)}deg)`
  document.querySelector('#hour').style.transform = `rotate(${hourRotation(seconds)}deg)`
  // console.log('seconds: ' + secondRotation(seconds));
  // console.log('minutes: ' + minuteRotation(seconds));
  // console.log('hours: ' + hourRotation(seconds));
}

// setInterval(tick, 1000)
setInterval(tick, 1) //super fast dev mode

// setInterval(function() {
//   console.log('tick!');
// }, 1000)


