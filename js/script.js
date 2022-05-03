// message
let input = document.getElementById("wish"),
  send = document.getElementById("submit"),
  reply = document.getElementById("reply");

send.addEventListener("click", function () {
  if (input.value.length <= 0) {
    reply.style.display = "block";
    reply.innerHTML = "message can't be empty";
    setTimeout(() => {
      reply.style.display = "none";
    }, 2000);
  } else if (input.value.length > 0) {
    reply.style.display = "block";
    reply.innerHTML = "Thank you for the wishes";
    send.value = "sent";
    send.style.background = "#F67B31";
    setTimeout(() => {
      reply.style.display = "none";
      input.value = "";
      send.value = "send";
      send.style.background = "gold";
    }, 2500);
  }
});

// Timer

setInterval(startTimer, 1000);

let appendHour = document.getElementById("hour"),
  appendMinutes = document.getElementById("minutes"),
  appendSeconds = document.getElementById("seconds");

appendHour.innerHTML = "01";
appendMinutes.innerHTML = "01";

let hour = 01;
let minutes = 01;
let seconds = 10;

function startTimer() {
  seconds--;

  if (seconds <= 60) {
    appendSeconds.innerHTML = seconds;
  }

  if (seconds < 10) {
    appendSeconds.innerHTML = "0" + seconds;
  }

  if (seconds <= 0) {
    minutes--;
    appendMinutes.innerHTML = minutes;
    seconds = 59;
    appendSeconds.innerHTML = seconds;
  }

  if (minutes < 10) {
    appendMinutes.innerHTML = "0" + minutes;
  }

  if (minutes < 0) {
    hour--;
    appendHour.innerHTML = hour;
    minutes = 59;
    appendMinutes.innerHTML = minutes;
  }
}
