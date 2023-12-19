"use strict";

const soonDate = document.querySelector('.soon-date');
const soonDayWeek = document.querySelector('.soon-day-week');

let date = new Date();
let quantDay = 5;

console.log(date.getDay())
let futureWeek = date.getDay() + quantDay;
const dayNumber = date.getDate();
const numberMonth = date.getMonth();
let dayName;
let month;
if (futureWeek > 6) {
	futureWeek -= 7;
}

switch (futureWeek) {
case 0:
	dayName = 'Вс';
	break;
case 1:
	dayName = 'Пн';
	break;
case 2:
	dayName = 'Вт';
	break;
case 3:
	dayName = 'Ср';
	break;
case 4:
	dayName = 'Чт';
	break;
case 5:
	dayName = 'Пт';
	break;
case 6:
	dayName = 'Сб';
	break;
}

switch (numberMonth) {
case 0:
	month = 'Января';
	break;
case 1:
	month = 'Февраля';
	break;
case 2:
	month = 'Марта';
	break;
case 3:
	month = 'Апреля';
	break;
case 4:
	month = 'Мая';
	break;
case 5:
	month = 'Июня';
	break;
case 6:
	month = 'Июля';
	break;
case 7:
	month = 'Августа';
	break;
case 8:
	month = 'Сентября';
	break;
case 9:
	month = 'Октября';
	break;
case 10:
	month = 'Ноября';
	break;
case 11:
	month = 'Декабря';
	break;

}

soonDate.innerHTML = date.getDate() + quantDay + ' ' + month;
soonDayWeek.innerHTML = dayName;