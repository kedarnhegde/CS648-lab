// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById("addForm");
const table = document.getElementById("employees");
const empCountOutput = document.getElementById("empCount");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;
empCountOutput.value = count;

// ADD EMPLOYEE
form.addEventListener("submit", (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();

  // GET THE VALUES FROM THE TEXT BOXES
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const ext = document.getElementById("extension").value;
  const email = document.getElementById("email").value;
  const dept = document.getElementById("department").value;

  // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
  const row = table.insertRow(-1);

  // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
  const cellID = row.insertCell(0);
  const cellName = row.insertCell(1);
  const cellExt = row.insertCell(2);
  const cellEmail = row.insertCell(3);
  const cellDept = row.insertCell(4);
  const cellDelete = row.insertCell(5);

  // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
  cellID.appendChild(document.createTextNode(id));
  cellName.appendChild(document.createTextNode(name));
  cellExt.appendChild(document.createTextNode(ext));
  cellEmail.appendChild(document.createTextNode(email));
  cellDept.appendChild(document.createTextNode(dept));

  // CREATE THE DELETE BUTTON
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn btn-danger btn-sm delete";
  btn.appendChild(document.createTextNode("Delete"));
  cellDelete.appendChild(btn);

  // RESET THE FORM
  form.reset();

  // SET FOCUS BACK TO THE ID TEXT BOX
  document.getElementById("id").focus();

  // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
  count++;
  empCountOutput.value = count;
});

// DELETE EMPLOYEE
table.addEventListener("click", (e) => {
  if (!e.target.classList.contains("delete")) return;
  if (!confirm("Are you sure you want to delete this employee?")) return;

  const row = e.target.closest("tr");
  table.deleteRow(row.rowIndex);

  count--;
  empCountOutput.value = count;
});
