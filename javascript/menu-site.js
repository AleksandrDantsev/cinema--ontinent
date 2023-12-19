"use strict";

const headerMenuButton = document.querySelector('.header__base');
const menu = document.querySelector('.header__menu');
const lineVisisbleOpacity = document.querySelector('main');
const mainAbouFilm = document.querySelector('.main__center-about-film');

headerMenuButton.addEventListener('click', openMenu);

function openMenu(event) {
	if (event.target.closest('.header__burger') || event.target.closest('.header__name')) {
		pointerEventsSwitcher(true);
		menu.classList.remove('close-menu');
		menu.classList.toggle('open-menu');
		menu.classList.contains('open-menu') ? lineVisisbleOpacity.style.pointerEvents = 'none':
											   lineVisisbleOpacity.style.pointerEvents = 'unset'
		valueFilter(lineVisisbleOpacity, true);

		if (!menu.classList.contains('open-menu')) {
			pointerEventsSwitcher(false);
		}
	}
}

document.addEventListener('click', closeMenuSide);

function closeMenuSide(event) {
	if (!event.target.closest('.header')) {
		if (menu.classList.contains('open-menu')) {
			pointerEventsSwitcher(false);
			menu.classList.add('close-menu');
			menu.classList.remove('open-menu');
			valueFilter(lineVisisbleOpacity, false);
		}
	}
}

function pointerEventsSwitcher(bool) {
	if (bool === true) {
		console.log(lineVisisbleOpacity)
		lineVisisbleOpacity.style.pointerEvents = 'none';
		document.body.style.overflow = 'hidden';
		document.documentElement.style.overflow = 'hidden';
	}
	if (bool === false) {
		lineVisisbleOpacity.style.pointerEvents = 'unset';
		document.body.style.overflow = 'unset';
		document.documentElement.style.overflow = 'unset';
	}
}

function valueFilter(templ, bool) {
	if (bool === true) {
	templ.classList.toggle('filter-line');	
	}
	if (bool === false)
	templ.classList.remove('filter-line');
}



