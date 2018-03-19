var makeRequest = function(url, callback) {
  request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
};

var requestComplete = function() {
  if (this.status !== 200){
    return;
  }
  localStorage.setItem('countries', this.responseText)
  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);
  populateSelectBox(countries);
};

var app = function() {
  var url = 'https://restcountries.eu/rest/v2';
  makeRequest(url, requestComplete);
  var selection = document.querySelector('#countries-dropdown');
  selection.addEventListener('change', displayInfo);
  console.log(getCountryByAlphaCode("FRA"));
};

window.addEventListener('load', app);
