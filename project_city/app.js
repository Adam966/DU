function getValues() {
  let city = document.getElementById('city').value;
  city = encodeURI(city);
  console.log(city);
  let cCode = document.getElementById('cCode').value;
  let d = new Date();
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let day = days[d.getDay()];

  document.getElementById('day').innerHTML = days[d.getDay()] + ' ' +  d.getDate() + '.' + (d.getMonth() + 1 ) + '.' + (d.getFullYear());
  sendData(city, cCode);
}

function sendData(city, cCode) {

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

          document.getElementById('desc').innerHTML = json.weather[0].description;
          document.getElementById('temp').innerHTML = json.main.temp + '°C';
          document.getElementById('humidity').innerHTML = 'Humidity: ' + json.main.humidity + '%';
          document.getElementById('windSpeed').innerHTML = 'Wind Speed: ' + json.wind.speed + 'm/s';
          document.getElementById('cloud').innerHTML = 'Cloudiness: ' + json.clouds.all + '%';
          document.getElementById('icon').src = 'http://openweathermap.org/img/w/' + json.weather[0].icon + '.png';
      }
  };

  let forc = 'https://api.openweathermap.org/data/2.5/forecast';
  forc+= '?q=' + city + ',' + cCode + '&units=metric' + '&APPID=' + key;

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
