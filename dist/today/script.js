"use strict";

const hello = document.querySelector(".hello");
const todayDay = document.querySelector(".today-day");
const todayTime = document.querySelector(".today-time");
const dayNy = document.querySelector(".day-ny");

let date = new Date();
const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const todayDate = () => {
  if (date.getHours() > 6 && date.getHours() < 12) {
    hello.textContent = "Доброе утро!";
  } else if (date.getHours() > 12 && date.getHours() < 18) {
    hello.textContent = "Добрый день!";
  } else if (date.getHours() > 18 && date.getHours() < 24) {
    hello.textContent = "Добрый вечер!";
  } else if (date.getHours() > 0 && date.getHours() < 6) {
    hello.textContent = "Доброй ночи!";
  }

  week.forEach((item, i) => {
    if (i == date.getDay()) {
      todayDay.textContent = "Сегодня: " + week[i];
    }
  });

  todayTime.textContent = "Текущее время: " + date.toLocaleTimeString("en");

  let newYear = new Date("01 january 2023").getTime();
  let dateNow = date.getTime();
  let daysRemain = (newYear - dateNow) / 1000;
  let days = Math.floor(daysRemain / 3600 / 24) + 1;
  dayNy.textContent = "До нового года осталось " + days + " дней";
};

todayDate();
