"use strict";

let date = new Date();
const dateElems = document.querySelectorAll('.element-slide__time span')
const sheduleAboutFilm = document.querySelectorAll('.about-film__shedule-table span');

let hourNow = date.getHours();
let minuteNow = date.getMinutes();
let summaTimeNow = hourNow * 60 + minuteNow;

function cycleTime(iterElem) {
	for (let k = 0; k < iterElem.length; k++) {
	let hours = iterElem[k].textContent.slice(0, 2) * 60;
	let minute = iterElem[k].textContent.slice(3, 5);
	let timeSession = +hours + +minute;

	if (summaTimeNow >= timeSession) {
		iterElem[k].classList.add('color-gray-text')
	}
}
}

cycleTime(dateElems);
cycleTime(sheduleAboutFilm);