console.log('Loaded!');

//change the text of the main-Text div
var element = document.getElementById('main-Text');

element.innerHTML = 'new Value';

//move the image
var img = document.getElementById('madi');
img.onclick = function () {
  img.style.marginLeft = '100px';  
};
