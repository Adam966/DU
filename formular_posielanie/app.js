let database = [];

function addData() {
  let person = {
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    age: document.getElementById('age').value,
    gender: document.querySelector('input[name="gender"]:checked').value
  }
  database.push(person);
  console.log(person);
  console.log(database);
}

function drawTable(database) {
  let table = document.getElementById('result');
  let row = table.insertRow(-1);
  let btn = document.createElement('BUTTON');

  let cell0 = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);
  let cell3 = row.insertCell(3);
  let cell4 = row.insertCell(4);
  let cell5 = row.insertCell(5);

  for (var i = 0; i < database.length; i++) {

    let person = database[i];

    btn.innerHTML = 'Delete';
    btn.setAttribute("onClick", "javascript: deleteRow(this.value);" );
    btn.setAttribute("value", i);

    row.setAttribute("id", "row" + i);

    if (person.gender == 'Male') {
      row.setAttribute("class", "resultRowM");
    } else {
      row.setAttribute("class", "resultRowF");
    }

    cell0.innerHTML = i;
    cell1.innerHTML = person.fname;
    cell2.innerHTML = person.lname;
    cell3.innerHTML = person.age;
    cell4.innerHTML = person.gender;
    cell5.appendChild(btn);
  }
}
//Deleting//////////////////////////////////////////////////
function deleteRow(value) {
  console.log(value);
  let row = document.getElementById('row' + value);
  console.log(row);
  row.parentNode.removeChild(row);
}

function deleteTable() {
  for (var i = 0; i < database.length; i++) {
    let row = document.getElementById('row' + i);
    row.parentNode.removeChild(row);
  }
}

//Sorting//////////////////////////////////////////////////
function sortAge() {
  database.sort(function(a, b) {
    return a.age - b.age;
  });
  console.log(database);
  deleteTable();
  drawTable(database);
}

function sortLname() {
  database.sort(function(a, b) {
  let nameA = a.lname.toUpperCase();
  let nameB = b.lname.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
console.log(database);
deleteTable();
drawTable(database);
}

function sortFname() {
  database.sort(function(a, b) {
  let nameA = a.fname.toUpperCase();
  let nameB = b.fname.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
  console.log(database);
  deleteTable();
  drawTable(database);
}

//Save and Load////////////////////////////////////////////
function saveForm() {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('index', database.length);
    localStorage.setItem('person', JSON.stringify(database));
  } else {
    alert("Web dont support local storage");
  }
}

function loadForm() {
  let person = JSON.parse(localStorage.getItem('person'));
  let index = localStorage.getItem('index');
  console.log(index);
  drawTable(database);
}
