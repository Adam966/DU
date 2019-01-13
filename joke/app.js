function getLogin() {
  let name = $('#login').val();
<<<<<<< HEAD
  let password = $('#password').val();

  let req = 'http://www.itsovy.sk:1201/login';
  let kind = 'login';
  let dataLogin = {
    login: name,
    password: password
  }
  let data = JSON.stringify(dataLogin);
  sendRequest(req, data, kind);
}

function getJoke() {
  let req = 'http://www.itsovy.sk:1201/joke';
  let kind = 'joke';

  let dataLogin = {
    login: sessionStorage.getItem('login'),
    token: sessionStorage.getItem('token')
  }
  let data = JSON.stringify(dataLogin);
  sendRequest(req, data, kind);
}

function getLogout() {
  let req = 'http://www.itsovy.sk:1201/logout';
  let kind = 'logout';

  let dataLogin = {
    login: sessionStorage.getItem('login'),
    token: sessionStorage.getItem('token')
  }
  let data = JSON.stringify(dataLogin);
  sendRequest(req, data, kind);
}

function sendRequest(req, data, kind) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status == 200) {
      let obj=JSON.parse(this.responseText);
      switch (kind) {
        case 'login':
          console.log(obj);
          sessionStorage.setItem("login", obj.login);
          sessionStorage.setItem("token", obj.token);
          $('#status').html('You have been successfully log in.');
          break;
        case 'joke':
          $('#author').html(obj.author);
          $('#joke').html(obj.joke);
          break;
        case 'logout':
          $('#status').html('You have been successfully '+ obj);
          break;
        default:
      }
    }
  }
  xhttp.open("POST", req);
  xhttp.setRequestHeader("Content-Type", "application/json")
=======
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
>>>>>>> 2729b0a66bc5d1242d5b805c9c22a6e832fc07b5
  xhttp.send(data);
}
