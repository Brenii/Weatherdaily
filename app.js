

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
//var time=document.querySelector('.time');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=0a96912e8c25ab9824fcb4c0e4ec88fc')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  //var timeValue=data['current']['dt'];
  var cloudValue= data['clouds']['all']

  main.innerHTML = nameValue;
  //time.innerHTML="Time- "+timeValue;
  desc.innerHTML = descValue;
  temp.innerHTML = tempValue+ "°C";
  clouds.innerHTML="Clouds- "+cloudValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})
