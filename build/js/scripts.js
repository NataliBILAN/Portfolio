'use strict';

var wrapper = document.querySelector('.typing-text');
var text = document.querySelector('.hello');
var textCont = text.textContent;
console.log(textCont);
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