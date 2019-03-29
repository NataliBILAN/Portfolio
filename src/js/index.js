'use strict';

const wrapper = document.querySelector('.typing-text');
const text = document.querySelector('.hello');

const textCont = text.textContent;
text.style.display = 'none';

for (let i = 0; i < textCont.length; i++) {
	(function(i) {
		setTimeout(function() {
			const texts = document.createTextNode(textCont[i]);
			const span = document.createElement('span');
			span.appendChild(texts);
			wrapper.appendChild(span);
		}, 100 * i);
	})(i);
}

const mobileIcon = document.querySelector('.mobile-icon');
const menu = document.querySelector('.responsive-nav');
const menuLinks = document.querySelectorAll('.nav-link');
const arrayOfLinks = Array.from(menuLinks);
function handleToggleMenu(e) {
	e.preventDefault;
	menu.classList.toggle('menu-open');
	mobileIcon.classList.toggle('mobile-icon-active');
}
function handleRemoveClass(e) {
	e.preventDefault;
	menu.classList.remove('menu-open');
	mobileIcon.classList.remove('mobile-icon-active');
}
mobileIcon.addEventListener('click', handleToggleMenu);
arrayOfLinks.map((el) => el.addEventListener('click', handleRemoveClass));
