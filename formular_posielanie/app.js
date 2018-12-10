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
  drawTable(person, database.length);
}

function drawTable(person, index) {
  let table = document.getElementById('result');
  let row = table.insertRow(-1);
  let btn = document.createElement('BUTTON');

  let cell0 = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);
  let cell3 = row.insertCell(3);
  let cell4 = row.insertCell(4);
  let cell5 = row.insertCell(5);

  for (var i = 0; i < index; i++) {

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

function deleteRow(value) {
  console.log(value);
  let row = document.getElementById('row' + value);
  console.log(row);
  row.parentNode.removeChild(row);
}

function saveForm() {
  console.log(database);

  if (typeof(Storage) !== "undefined") {
    let data = JSON.stringify(database);
    localStorage.setItem('index', database.length);
    localStorage.setItem('person', data);
    console.log("Local storage save:" + data);
  } else {
    alert("Web dont support local storage");
  }
}

function loadForm() {
  let person = JSON.parse(localStorage.getItem('person'));
  let index = localStorage.getItem('index');
  console.log(index);
  drawTable(person, index);
}

function sortAge() {
  database.sort(function(a, b) {
    return a.age - b.age;
  });
  console.log(database);
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
  console.log(database);
  return 0;
});
  console.log(database);;
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
  console.log(database);
  return 0;
});
  console.log(database);;
}
