function sendData() {
  let city = document.getElementById('city').value;
  let cCode = document.getElementById('cCode').value;
  console.log(city);
  console.log(cCode);

  let appKey = "39c92152a462fbd708fcc7c6895bfdc3";
  let req = "http://api.openweathermap.org/data/2.5/forecast?";
  city = encodeURIComponent(city);
  req+='q='+city;
  req+=","+cCode;
  req+="&mode=HTML";
  req+="&appid="+appKey;


  console.log(req);

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let obj=JSON.parse(this.responseText);
      document.getElementById("temp").innerHTML = Math.round((obj.list[0].main.temp-273.15)*100)/100;
    }
  };
  xhttp.open("GET", req, true);
  xhttp.send();
}
