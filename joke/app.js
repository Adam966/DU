function getLogin() {
  let name = $('#login').val();
  let password = $('#password').val();

  let req = 'http://www.itsovy.sk:1201/login';
  let kind = 'login';
  let dataLogin = {
    login: name,
    password: password
  }
  let data = JSON.stringify(dataLogin);
  $('.jokeField').show();
  $('.messageField').show();
  $('.messageGetField').show();
  $('.changePassword ').show();
  sendRequest(req, data, kind);
  $('.enterForm').hide();
}

function changePassword() {
  let req = 'http://www.itsovy.sk:1201/changepassword';
  let kind = 'password';

  let dataLogin = {
    login: sessionStorage.getItem('login'),
    oldpassword: $('#oldpassword').val(),
    token: sessionStorage.getItem('token'),
    newpassword: $('#newpassword').val()
  }
  let data = JSON.stringify(dataLogin);
  console.log(data);
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

function sendJoke() {
  let req = 'http://www.itsovy.sk:1201/sendjoke';
  let kind = 'sendjoke';

  let dataLogin = {
    login: sessionStorage.getItem('login'),
    token: sessionStorage.getItem('token'),
    joke: $('#text').val()
  }
  let data = JSON.stringify(dataLogin);
  sendRequest(req, data, kind);
}

function getMessages() {
  let req = 'http://www.itsovy.sk:1201/getmessages';
  let kind = 'getmessage';

  let dataLogin = {
    login: sessionStorage.getItem('login'),
    token: sessionStorage.getItem('token'),
    message: $('#textMessage').val()
  }
  let data = JSON.stringify(dataLogin);
  sendRequest(req, data, kind);
}

function sendMessage() {
  let req = 'http://www.itsovy.sk:1201/getmessages';
  let kind = 'sendmessage';

  let dataLogin = {
    login: sessionStorage.getItem('login'),
    token: sessionStorage.getItem('token'),
    user: $('#reciprocent').val()
  }
  let data = JSON.stringify(dataLogin);
  sendRequest(req, data, kind);
}

function sendRequest(req, data, kind) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status == 200) {
      let obj;
      switch (kind) {
        case 'login':
          obj=JSON.parse(this.responseText);
          console.log(obj);
          sessionStorage.setItem("login", obj.login);
          sessionStorage.setItem("token", obj.token);
          $('#status').html('You have been successfully log in as: ' + obj.login);
          break;
        case 'joke':
          obj = JSON.parse(this.responseText);
          $('#author').html(obj.author);
          $('#joke').html(obj.joke);
          break;
        case 'logout':
          $('#status').html('You have been successfully log out');
          $('.jokeField').hide();
          $('#joke').clear();
          $('#author').clear();
          $('#messageField').clear();
        case 'sendjoke':
          $('#status').html('You successfully send joke.');
          $('#text').clear();
        case 'getmessage':
          obj=JSON.parse(this.responseText);
          for (var i = 0; i < obj.messages.length; i++) {
            $( "#messages" ).append('<p id="name">' + 'Name: '+ obj.messages[i].from + '</p>');
            $( "#messages" ).append('<p id="message">' + obj.messages[i].message + '</p>');
          }
        case 'changepass':
          $('#changepass').clear();
          $('#status').html('You successfully change your password.');
          break;
        default:
      }
    }
    else {
      $('#status').html('Bad login')
    }
  }

  xhttp.open("POST", req);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(data);
}

$('.enterForm').ready(function() {
    $('.jokeField').hide();
});

$('.messageField').ready(function() {
    $('.messageField').hide();
});

$('.messageGetField').ready(function() {
    $('.messageGetField').hide();
});

$('.changePassword').ready(function() {
    $('.changePassword').hide();
    sessionStorage.clear();
});
