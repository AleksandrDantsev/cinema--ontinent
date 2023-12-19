"use strict";

const mainAnswer = document.querySelector('.main__answer');
const answerSub = document.querySelectorAll('.main__answer-sub');
const answerTop = document.querySelectorAll('.main__answer-top')
const arrow = document.querySelectorAll('.main__answer-arrow');

for (let i = 0; i < answerTop.length; i++) {
	answerTop[i].setAttribute('id', `answer${i}`);
}

mainAnswer.addEventListener('click', openAnswer);

function openAnswer(event) {
	if (event.target.closest('.main__answer-top')) {
		const id = event.target.parentElement.id.slice(-1);
		console.log(id)
		answerSub[id].classList.toggle('active-answer');
		arrow[id].classList.toggle('svg-rotate');
	}
}



