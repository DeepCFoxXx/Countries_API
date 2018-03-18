var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

var startButton = function(countries){
  var countries = JSON.parse(jsonString);

}

var populateList = function(countries){
  var ul = document.querySelector('#country-list');

  countries.forEach(function(country){
    var li = document.createElement('li');
    li.innerText = country.name;
    ul.appendChild(li);
  });
}

var requestComplete = function(){
  // console.log('1');
  if (this.status !== 200)
  return;
  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);
  // var country = countries[224];
  // console.log(country);
  populateList(countries);
}

var handleButtonClick = function() {
    makeRequest(url, requestComplete);
}

var app = function(){
  var url = 'https://restcountries.eu/rest/v2';
  var startButton = document.querySelector('#start');
  startButton.addEventListener('click', handleButtonClick);
}

window.addEventListener('load', app);
