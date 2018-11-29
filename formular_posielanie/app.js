let x = 0;

function submited() {
//  person[0] = document.getElementById('fname').value;
//  person[1] = document.getElementById('lname').value;
//  person[2] = document.getElementById('age').value;
//  person[3] = document.getElementById('gender').value;

  let table = document.getElementById("tableForm");
  let row;
  let cell;
  let x = document.getElementById("myForm");

  for (var i = 0; i < 4; i++) {
    let row = table.insertRow(i);
    let cell = row.insertCell(i);
    cell[i].innerHTML = x.elements.item(i).value;
  }
  x++;
}
