loadEmployees();

function loadEmployees(){

    let employees =
    JSON.parse(localStorage.getItem("employees")) || [];

    let table =
    document.getElementById("employeeTable");

    table.innerHTML = "";

    employees.forEach((emp,index)=>{

        table.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>${emp.name}</td>

            <td>${emp.persNo}</td>

            <td>${emp.designation}</td>

            <td>${emp.payPeriod}</td>

            <td>₹${emp.netPay}</td>
<td>

    <button
    class="view-btn"
    onclick="viewEmployee(${emp.id})">

        View

    </button>

    <button
    class="edit-btn"
    onclick="editEmployee(${emp.id})">

        Edit

    </button>

    <button
    class="delete-btn"
    onclick="deleteEmployee(${emp.id})">

        Delete

    </button>

</td>

        </tr>

        `;

    });

}

function deleteEmployee(id){

    let employees =
    JSON.parse(localStorage.getItem("employees")) || [];

    employees =
    employees.filter(emp => emp.id !== id);

    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );

    loadEmployees();

}

function editEmployee(id){

    localStorage.setItem(
        "editEmployeeId",
        id
    );

    window.location.href =
    "./Frontend/index.html";

}

function openPayslip(){

    window.location.href =
    "./Frontend/index.html";

}

function logout(){

    window.location.href =
    "./login.html";

}
function viewEmployee(id){

    let employees =
    JSON.parse(localStorage.getItem("employees")) || [];

    let employee =
    employees.find(emp => emp.id === id);

    localStorage.setItem(
        "viewEmployee",
        JSON.stringify(employee)
    );

    window.location.href =
    "viewPayslip.html";

}
