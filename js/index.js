'use strict';

var wrapper = document.querySelector('.typing-text');
const text = document.querySelector('.name');

const textCont = text.textContent;
console.log(textCont);
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
