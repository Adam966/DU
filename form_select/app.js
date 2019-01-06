function getContinent() {
  let continent = 'continent=' + $( ".continent" ).val();
  let state = 'countries?';
  let req = 'http://itsovy.sk:1200/' + state + continent;
  sendData(req, state);
}

function getCountry() {
  let country ='country=' + $( ".country" ).val();
  let state = 'cities?';
  let req = 'http://itsovy.sk:1200/' + state + country;
  sendData(req, state);
}

function getCity() {
  let city = $('.cities').val();
  let cCode = $(".country option:selected").attr("id");
  getWeather(city, cCode);
}

function sendData(req, state) {
  encodeURI(req);

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let obj=JSON.parse(this.responseText);
      if (state=='countries?') {
        fillCountry(obj);
      }
      else {
        fillCities(obj);
      }
    }
  };

  xhttp.open("GET", req);
  xhttp.send();
}

function fillCountry(data) {
  $('.country').empty();
  $('.cities').empty();
  $('.country').append('<option value=></option>');
  for (var i = 0; i < data.length; i++) {
    $('.country').append('<option value="' + encodeURI(data[i].name) + '"' + 'id="' + data[i].code + '">' + data[i].name +'</option>');
  }
}

function fillCities(data) {
  $('.cities').empty();
  $('.cities').append('<option value=></option>');
  for (var i = 0; i < data.length; i++) {
    $('.cities').append('<option value='+ encodeURI(data[i].name) + '>' + data[i].name +'</option>');
  }
}

function getWeather(city, cCode) {
  let key = '39c92152a462fbd708fcc7c6895bfdc3';
  let req = 'http://api.openweathermap.org/data/2.5/weather';

  req+= '?q=' + city + ',' + cCode + '&units=metric' + '&APPID=' + key;

  const http = new XMLHttpRequest();
  http.open("GET", req);
  http.send();
  let json;

  http.onreadystatechange = function () {
      if (http.readyState === 4 && http.status === 200) {
          json = JSON.parse(http.responseText);

          date();
          $('#desc').html(json.weather[0].description);
          $('#temp').html(json.main.temp + '°C');
          $('#humidity').html('Humidity: ' + json.main.humidity + '%');
          $('#windSpeed').html('Wind Speed: ' + json.wind.speed + 'm/s');
          $('#cloud').html('Cloudiness: ' + json.clouds.all + '%');
          $('#icon').attr('src', 'http://openweathermap.org/img/w/' + json.weather[0].icon + '.png');
      }
  };

  let forc = 'https://api.openweathermap.org/data/2.5/forecast';
  forc+= '?q=' + city + ',' + cCode + '&units=metric' + '&APPID=' + key;
  console.log(forc);

  const htp = new XMLHttpRequest();
  htp.open("GET", forc);
  htp.send();
  let data;

  htp.onreadystatechange = function () {
      if (htp.readyState === 4 && htp.status === 200) {
          data = JSON.parse(htp.responseText);

          let index = 0;
          for (let i = 8; i < 40; i+=8) {
            document.getElementsByName('img')[index].src = 'http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png';
            document.getElementsByName('temps')[index].innerHTML = data.list[i].main.temp + '°C';

            let date = new Date(data.list[i].dt*1000);
            document.getElementsByName('days')[index].innerHTML = date.getDate() + '.' + (date.getMonth() + 1 );
            index++;
            console.log(data.list[i].dt_txt);
          }
      }
  };
}

function date() {
  let d = new Date();
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let day = days[d.getDay()];

  $('#day').html(days[d.getDay()] + ' ' +  d.getDate() + '.' + (d.getMonth() + 1 ) + '.' + (d.getFullYear()));
}
