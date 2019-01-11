function getLogin() {
  let name = $('#login').val();
  let pass = $('#password').val();
  let req = 'http://itsovy.sk:1201/login';
  let login = {
    login: name,
    password: pass,
  }
  let data = JSON.stringify(login);

  sendRequest(data, req);
}

function logout() {
  let req = 'http://itsovy.sk:1201/login';
  sessionStorage.clear();
}

function sendRequest(data, req) {

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let obj=JSON.parse(this.responseText);
      if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem('login', obj.login);
        sessionStorage.setItem('token', obj.token);
      }
    }
  };

  xhttp.open("POST", req);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(data);
}
