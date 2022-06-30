const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  let idTimer;

  const getTimeRemainig = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemainig = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemainig / 3600);
    let minutes = Math.floor((timeRemainig / 60) % 60);
    let seconds = Math.floor(timeRemainig % 60);

    return { timeRemainig, hours, minutes, seconds };
  };

  const updateClock = () => {
    let getTime = getTimeRemainig();

    if (getTime.timeRemainig > 0) {
      if (getTime.hours < 10) {
        timerHours.textContent = "0" + getTime.hours;
      } else {
        timerHours.textContent = getTime.hours;
      }

      if (getTime.minutes < 10) {
        timerMinutes.textContent = "0" + getTime.minutes;
      } else {
        timerMinutes.textContent = getTime.minutes;
      }

      if (getTime.seconds < 10) {
        timerSeconds.textContent = "0" + getTime.seconds;
      } else {
        timerSeconds.textContent = getTime.seconds;
      }
    } else if (getTime.timeRemainig <= 0) {
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    } else {
      clearInterval(idTimer);
    }
  };

  idTimer = setInterval(updateClock, 1000);
};

export default timer;
