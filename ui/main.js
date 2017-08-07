console.log('Loaded!');

//Change the text of the main-Text div
var element = document.getElementById('main-Text');

element.innerHTML = 'new Value';

// Move the image
var img = document.getElementById('madi.png');
var marginLeft = 0;
function moveRight () {
  marginLeft = marginLeft + 10;
  img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 100);
};