"use strict";
const dayweek = document.querySelector('.day-week');
const daynumber = document.querySelector('.day-number');
const daymounth = document.querySelector('.day-mounth');


const dateNow = new Date();

const dayWeek = dateNow.getDay();
const dayNumber = dateNow.getDate();
const dayMonth = dateNow.getMonth();
let dayName;
let month;

switch (dayWeek) {
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

switch (dayMonth) {
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

dayweek.innerHTML = dayName;
daynumber.innerHTML = dayNumber;
daymounth.innerHTML = month;

