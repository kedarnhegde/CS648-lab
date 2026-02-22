// CREATE AN ARRAY OF EMPLOYEES
let employees = [
  [10000001, "Keanu Reeves", 1111, "keanu.reeves@example.com", "Executive"],
  [10000002, "Scarlett Johansson", 2222, "scarlett.johansson@example.com", "Marketing"],
  [10000003, "Robert Downey Jr.", 3333, "robert.downeyjr@example.com", "Engineering"],
  [10000004, "Tom Cruise", 4444, "tom.cruise@example.com", "Administrative"],
  [10000005, "Chris Evans", 5555, "chris.evans@example.com", "Sales"],
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
const stored = localStorage.getItem("employees");
if (stored) employees = JSON.parse(stored);

// GET DOM ELEMENTS
const form = document.getElementById("addForm");
const empTable = document.getElementById("empTable");
const tbody = empTable.querySelector("tbody");
const empCount = document.getElementById("empCount");

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
form.addEventListener("submit", (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();

  // GET THE VALUES FROM THE TEXT BOXES
  const id = Number(document.getElementById("id").value);
  const name = document.getElementById("name").value;
  const ext = Number(document.getElementById("extension").value);
  const email = document.getElementById("email").value;
  const dept = document.getElementById("department").value;

  // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
  const newEmployee = [id, name, ext, email, dept];

  // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
  employees.push(newEmployee);

  // BUILD THE GRID
  buildGrid();

  // RESET THE FORM
  form.reset();

  // SET FOCUS BACK TO THE ID TEXT BOX
  document.getElementById("id").focus();
});

// DELETE EMPLOYEE
empTable.addEventListener("click", (e) => {
  if (!e.target.classList.contains("delete")) return;

  // CONFIRM THE DELETE
  if (!confirm("Are you sure you want to delete this employee?")) return;

  // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
  const rowIndex = e.target.parentNode.parentNode.rowIndex; // includes header row

  // REMOVE EMPLOYEE FROM ARRAY
  employees.splice(rowIndex - 1, 1);

  // BUILD THE GRID
  buildGrid();
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
  const currentTbody = empTable.querySelector("tbody");
  const newTbody = document.createElement("tbody");

  for (const emp of employees) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${emp[0]}</td>
      <td>${emp[1]}</td>
      <td>${emp[2]}</td>
      <td>${emp[3]}</td>
      <td>${emp[4]}</td>
      <td><button type="button" class="btn btn-danger btn-sm delete">Delete</button></td>
    `;
    newTbody.appendChild(tr);
  }

  currentTbody.parentNode.replaceChild(newTbody, currentTbody);
  empCount.textContent = `(${employees.length})`;
  localStorage.setItem("employees", JSON.stringify(employees));
}