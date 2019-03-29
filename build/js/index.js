'use strict';

var wrapper = document.querySelector('.typing-text');
var text = document.querySelector('.hello');
var textCont = text.textContent;
text.style.display = 'none';

for (var i = 0; i < textCont.length; i++) {
  (function (i) {
    setTimeout(function () {
      var texts = document.createTextNode(textCont[i]);
      var span = document.createElement('span');
      span.appendChild(texts);
      wrapper.appendChild(span);
    }, 100 * i);
  })(i);
}

var mobileIcon = document.querySelector('.mobile-icon');
var menu = document.querySelector('.responsive-nav');
var menuLinks = document.querySelectorAll('.nav-link');
var arrayOfLinks = Array.from(menuLinks);

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
arrayOfLinks.map(function (el) {
  return el.addEventListener('click', handleRemoveClass);
});