"use strict";

const elementSlider = document.querySelectorAll('.element-slide');
const arrowRight = document.querySelector('.right-arrow');
const arrowLeft = document.querySelector('.left-arrow');
const wrapHidden = document.querySelector('.main__wrap-hidden');
const lineVisisble = document.querySelector('.main__line_visisble');

let quantititySliders = 3;

widthWindowQuentElem();

widthElemsChange()
function widthElemsChange() {
	let widthWindow = document.documentElement.clientWidth;
		let widthElement = widthWindow / quantititySliders;
		for (let i = 0; i < elementSlider.length; i++) {
			elementSlider[i].style.width = `${widthElement}px`;
		}
}

let countShift = 0;

function widthWindowQuentElem() {
		if (window.innerWidth < 1100) {
		quantititySliders = 2;
		}
		if (window.innerWidth < 771) {
			quantititySliders = 1;
		}
		else if (window.innerWidth > 1100) {
			quantititySliders = 3;
		}
}

window.addEventListener('resize', changeWidth);

function changeWidth(event) {
	throwOff();
	widthWindowQuentElem();
	countShift = 0;
	shift(countShift)
	widthElemsChange()
}

checkLeftPosititon(countShift)
let rightPosition = 0;

wrapHidden.addEventListener('click', swipeSideArrow);
function swipeSideArrow(event) {
	if (event.type == 'resize') {
		countShift = 0;
	}
	let widthCardInSlider = elementSlider[0].offsetWidth * 2;
	if (event.target.closest('.left-arrow')) {
		countShift += widthCardInSlider;
		if (rightPosition < countShift) {
			arrowRight.classList.remove('diactive');
		}
		countShift > 0 ? countShift = 0 : '';
		shift(countShift)
	}
	if (event.target.closest('.right-arrow')) {
		countShift -= widthCardInSlider;
		rightPosition += countShift
			if (countShift < -(lineVisisble.offsetWidth - (elementSlider[0].offsetWidth * quantititySliders))) {
				arrowRight.classList.add('diactive');
				 countShift = -(lineVisisble.offsetWidth - (elementSlider[0].offsetWidth * quantititySliders))
			}
	shift(countShift)
	}
	checkLeftPosititon(countShift)
}

function shift(position) {
	lineVisisble.style.transform = `translateX(${position}px)`;
}

function checkLeftPosititon(pos) {
	if (pos == 0) {
		pos = 0;
		arrowLeft.classList.add('diactive');
	}
	if (pos < 0)
		arrowLeft.classList.remove('diactive');
}


const elemsFilm = document.querySelectorAll('.element-slide');
const showQuantity = document.querySelector('.show-elems');
const blockElemQuant = document.querySelector('.show-q-elem');


const outer = showQuantity.outerHTML;

for (let i = 0; i < elemsFilm.length / 2 - 1; i++) {
	blockElemQuant.insertAdjacentHTML('afterbegin', outer)
}

const allElemsLine = document.querySelectorAll('.show-elems');
	for (let k = 0; k < allElemsLine.length; k++) {
		allElemsLine[k].id = `show-elem${k}`;
	}



let counterButtonActive = 0;

wrapHidden.addEventListener('click', changeNumber);

blockElemQuant.children[counterButtonActive].style.backgroundColor = 'rgb(255, 255, 255)';

function changeNumber(event) {
	if (event.target.closest('.left-arrow')) {
		counterButtonActive--;
		blockElemQuant.children[counterButtonActive].style.backgroundColor = 'rgb(255, 255, 255)';
	}
	if (event.target.closest('.right-arrow')) {
		counterButtonActive++;
	blockElemQuant.children[counterButtonActive].style.backgroundColor = 'rgb(255, 255, 255)';
	}
	for (let y = 0; y < blockElemQuant.children.length; y++) {
		if (y != counterButtonActive) {
			blockElemQuant.children[y].style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
		}
	}

}

const beginArrow = document.querySelector('.beginning');

beginArrow.addEventListener('click', (event) => {
	if (event.target.closest('.beginning')) throwOff()
})

function throwOff() {
	countShift = 0;
		counterButtonActive = 0;
		blockElemQuant.children[counterButtonActive].style.backgroundColor = 'rgb(255, 255, 255)';
		for (let y = 1; y < blockElemQuant.children.length; y++) {
			blockElemQuant.children[y].style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
		}
	
		arrowRight.classList.remove('diactive');
		shift(0);
		checkLeftPosititon(countShift)
}
