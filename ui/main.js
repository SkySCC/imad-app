//Counter code
var button = document.getElementById('Counter');
var counter = 0;
button.onclick = function () {
  
  //Make a request to the counter endpoint
  
  //Capture the response and store it in a variable
  
  //Render the variable in the corredct span
  Counter = Counter + 1;
  var span = document.getElementById('count')
  span.innerHTML = counter.toString ();
};