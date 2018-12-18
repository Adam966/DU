function sendData() {
  let amount = document.getElementById('amount').value;
  let req = 'http://data.fixer.io/api/latest?access_key=7154fded6a2558a8b34d7551f7fef52f';
  console.log(req);
  console.log(amount);

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let obj=JSON.parse(this.responseText);
      document.getElementById("USD").innerHTML = obj.rates.USD + ' $';
      document.getElementById("CZK").innerHTML = obj.rates.CZK + ' CZK';
      document.getElementById("GBP").innerHTML = obj.rates.GBP + ' £';
      document.getElementById("CHF").innerHTML = obj.rates.CHF + ' ₣';
      document.getElementById("CNY").innerHTML = obj.rates.CNY + ' ¥';

      document.getElementById("USDamount").innerHTML = Math.round((obj.rates.USD * amount) * 100) / 100 + ' $';
      document.getElementById("CZKamount").innerHTML = Math.round((obj.rates.CZK * amount) * 100) / 100 + ' CZK';
      document.getElementById("GBPamount").innerHTML = Math.round((obj.rates.GBP * amount) * 100) / 100 + ' £';
      document.getElementById("CHFamount").innerHTML = Math.round((obj.rates.CHF * amount) * 100) / 100 + ' ₣';
      document.getElementById("CNYamount").innerHTML = Math.round((obj.rates.CNY * amount) * 100) / 100 + ' ¥';
    }
  };

  xhttp.open("GET", req, true);
  xhttp.send();
}
