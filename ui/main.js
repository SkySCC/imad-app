console.log('Loaded!');

//change the text of the main-Text div
var element = document.getElementbyId(main-Text);

element.innerHTML = 'new Value';

//Move The Image
var img = document.getElementbyId('madi');
img.onclick = function () {
  img.style.marginLeft = '100px';  
};
