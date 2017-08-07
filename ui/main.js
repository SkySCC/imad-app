console.log('Loaded!');

//Change the text of the main-Text div
var element = document.getElementById('main-Text');

element.innerHTML = 'new Value';

//Move the image
var img = document.getElementById('madi');
img.onclick = function (madi) {
img.style.marginLeft = '200px';  
};
