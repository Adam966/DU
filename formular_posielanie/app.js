let database = [];
let person;
let index = 0;

function addData() {
  person = {
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    age: document.getElementById('age').value,
    gender: document.querySelector('input[name="gender"]:checked').value
  }
  database.push(person);
  console.log(person);
  drawTable(person, index);
  index++;
}

function drawTable(person, index) {
  let table = document.getElementById('result');
  let btn = document.createElement('BUTTON');

  let row = table.insertRow(-1);
  row.setAttribute("id", "row" + index);

  let cell0 = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);
  let cell3 = row.insertCell(3);
  let cell4 = row.insertCell(4);
  let cell5 = row.insertCell(5);

  cell0.innerHTML = index;
  cell1.innerHTML = person.fname;
  cell2.innerHTML = person.lname;
  cell3.innerHTML = person.age;
  cell4.innerHTML = person.gender;

  cell5.appendChild(btn);
  btn.innerHTML = 'Delete';
  btn.setAttribute("onClick", "javascript: deleteRow(this.value);" );
  //btn.setAttribute("name", "btnDel");
  btn.setAttribute("value", index);
}

function deleteRow(value) {
  console.log(value);
  let row = document.getElementById('row' + value);
  console.log(row);
  row.parentNode.removeChild(row);
}

function saveForm(person) {
  console.log(database);

  if (typeof(Storage) !== "undefined") {
    let dat = JSON.stringify(person);
    localStorage.setItem("person", text);
    console.log("Local storage save: " + text);
  } else {
    alert("Web dont support local storage");
  }
}

function loadForm() {
  localStorage.getItem("person", JSON.parse(person));
  let text = localStorage.getItem("persons");
  person = JSON.parse(text);
  console.log("Local storage load: " + person);
}
