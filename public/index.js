var makeRequest = function(url, callback) {
  request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
};

var getCountries = function() {
  jsonString = localStorage.getItem('countries');
  countries = JSON.parse(jsonString);
  return countries;
};

var populateSelectBox = function(countries) {
  var selectBox = document.querySelector('#countries-dropdown');
  countries.forEach(function(country, index){
    var option = document.createElement('option');
    option.innerText = country.name;
    option.value = index;
    selectBox.appendChild(option);
  })
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

var getCountryByAlphaCode = function(alphaCode) {
  countries = getCountries();
  var countryArray = countries.filter(country => country.alpha3Code === alphaCode)
  console.log(countryArray);
  return countryArray[0];
};

var app = function() {
  var url = 'https://restcountries.eu/rest/v2';
  makeRequest(url, requestComplete);
  var selection = document.querySelector('#countries-dropdown');
  selection.addEventListener('change', displayInfo);
  console.log(getCountryByAlphaCode("FRA"));
};

window.addEventListener('load', app);
