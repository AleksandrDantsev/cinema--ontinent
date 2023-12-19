"use strict";

const touchLine = document.querySelector('.main__line_visisble');
const elemSlide = document.querySelector('.element-slide');

touchLine.addEventListener('touchstart', touchPoint);
touchLine.addEventListener('touchmove', touchMove);

let x1, y1;
let shiftSwingSl = 0;
let widthElemsl = elemSlide.offsetWidth;
let widthline = touchLine.offsetWidth;

function touchPoint(event) {
	event.preventDefault()
	let tCoord = event.touches[0];
	x1 = tCoord.clientX;
	y1 = tCoord.clientY;
}

function touchMove(event) {
	event.preventDefault()
	let moveCoord = event.touches[0];
	let xm = moveCoord.clientX;
	let ym = moveCoord.clientY;
	
	let side = xm - x1;
		shiftSwingSl += side / 8;
		if (shiftSwingSl > 0) {
			shiftSwingSl = 0;
		}
		if (Math.abs(shiftSwingSl) > widthline - widthElemsl * 3) {
			shiftSwingSl = -widthline + widthElemsl * 3;
		}
	
	
	touchLine.style.transform = `translate(${shiftSwingSl}px, 0)`
}

if (window.innerWidth < 770) {
	touchLine.removeEventListener('touchstart', touchPoint);
	touchLine.removeEventListener('touchmove', touchMove);
}
