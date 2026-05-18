function calculatePayslip() {

    // =========================
    // BASIC VALUES
    // =========================

    let basicPay =
    parseFloat(document.getElementById("basicPay").value) || 0;

    let transport =
    parseFloat(document.getElementById("transport").value) || 0;

    let meal =
    parseFloat(document.getElementById("meal").value) || 0;

    let professionalTax =
    parseFloat(document.getElementById("professionalTax").value) || 0;

    let insurance =
    parseFloat(document.getElementById("insurance").value) || 0;

    let sodexo =
    parseFloat(document.getElementById("sodexo").value) || 0;


    // =========================
    // PAY PERIOD DATE
    // =========================

    let payPeriod =
    document.getElementById("payPeriod").value;

    let totalDays = 30;
    let paidDays = 30;

    if(payPeriod){

        let selectedDate =
        new Date(payPeriod);

        let year =
        selectedDate.getFullYear();

        let month =
        selectedDate.getMonth();

        // Total days in selected month
        totalDays =
        new Date(year, month + 1, 0).getDate();

        // Selected start day
        let selectedDay =
        selectedDate.getDate();

        // Paid days calculation
        paidDays =
        totalDays - selectedDay + 1;
    }


    // =========================
    // PAID DAYS
    // =========================

    document.getElementById("paidDays").value =
    paidDays.toFixed(2);


    // =========================
    // ACTUAL BASIC
    // =========================

    let actualBasic =
    (basicPay / totalDays) * paidDays;


    // =========================
    // HRA
    // =========================

    let hra =
    actualBasic * 0.50;


    // =========================
    // TOTAL EARNINGS
    // =========================

    let totalEarnings =
    actualBasic +
    hra +
    transport +
    meal;


    // =========================
    // INCOME TAX
    // =========================

    let incomeTax =
    totalEarnings * 0.10;


    // =========================
    // PF CONTRIBUTION
    // =========================

    let pf =
    actualBasic * 0.12;


    // =========================
    // TOTAL DEDUCTIONS
    // =========================

    let totalDeductions =
    pf +
    professionalTax +
    insurance +
    sodexo;


    // =========================
    // NET PAY
    // =========================

    let netPay =
    totalEarnings -
    incomeTax -
    totalDeductions;


    // =========================
    // CURRENT PERIOD VALUES
    // =========================

    document.getElementById("hra").value =
    hra.toFixed(2);

    document.getElementById("incomeTax").value =
    incomeTax.toFixed(2);

    document.getElementById("pfContribution").value =
    pf.toFixed(2);

    document.getElementById("totalEarnings").value =
    totalEarnings.toFixed(2);

    document.getElementById("totalTax").value =
    incomeTax.toFixed(2);

    document.getElementById("totalDeductions").value =
    totalDeductions.toFixed(2);

    document.getElementById("netPay").value =
    netPay.toFixed(2);


    // =========================
    // YEAR VALUES
    // =========================

    document.getElementById("basicPayYear").value =
    (actualBasic * 12).toFixed(2);

    document.getElementById("hraYear").value =
    (hra * 12).toFixed(2);

    document.getElementById("transportYear").value =
    (transport * 12).toFixed(2);

    document.getElementById("mealYear").value =
    (meal * 12).toFixed(2);

    document.getElementById("incomeTaxYear").value =
    (incomeTax * 12).toFixed(2);

    document.getElementById("pfYear").value =
    (pf * 12).toFixed(2);

    document.getElementById("professionalTaxYear").value =
    (professionalTax * 12).toFixed(2);

    document.getElementById("insuranceYear").value =
    (insurance * 12).toFixed(2);

    document.getElementById("sodexoYear").value =
    (sodexo * 12).toFixed(2);

    document.getElementById("totalEarningsYear").value =
    (totalEarnings * 12).toFixed(2);

    document.getElementById("totalTaxYear").value =
    (incomeTax * 12).toFixed(2);

    document.getElementById("totalDeductionsYear").value =
    (totalDeductions * 12).toFixed(2);


    // =========================
    // FORMULA VALUES
    // =========================

    document.getElementById("formulaEarnings").value =
    totalEarnings.toFixed(2);

    document.getElementById("formulaTaxes").value =
    incomeTax.toFixed(2);

    document.getElementById("formulaDeductions").value =
    totalDeductions.toFixed(2);

}
function savePayslip(){

let isValid = true;

const requiredFields =
document.querySelectorAll('.required-field');

requiredFields.forEach(field=>{

field.classList.remove('error-border');

if(field.value.trim()===""){

field.classList.add('error-border');

isValid=false;

}

/* REMOVE RED WHEN USER TYPES */

field.addEventListener('input',function(){

if(this.value.trim()!==""){

this.classList.remove('error-border');

}

});

});

/* STOP SAVE IF EMPTY */

if(!isValid){

alert("Please fill all required details correctly.");

return;

}

/* PAN VALIDATION */

const pan =
document.getElementById("pan").value;

const panPattern =
/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

if(!panPattern.test(pan)){

alert("Invalid PAN format.");

document.getElementById("pan")
.classList.add("error-border");

return;

}



/* PAID DAYS VALIDATION */

const paidDays =
parseFloat(
document.getElementById("paidDays").value
);

if(isNaN(paidDays) || paidDays<=0){

alert("Invalid Paid Days.");

document.getElementById("paidDays")
.classList.add("error-border");

return;

}

/* CONFIRMATION */

const confirmSave =
confirm(
"Please check all entered details carefully.\n\nDo you want to save the payslip?"
);

if(!confirmSave){

return;

}


/* SUCCESS MESSAGE */

alert("Payslip saved successfully!");

console.log("Payslip Saved");

}function setLastDate() {

    let payPeriod = document.getElementById("payPeriod").value;

    if (!payPeriod) return;

    let selectedDate = new Date(payPeriod);

    let year = selectedDate.getFullYear();
    let month = selectedDate.getMonth();

    // Last date of selected month
    let lastDate = new Date(year, month + 1, 0);

    // Format last date
    let day = String(lastDate.getDate()).padStart(2, '0');
    let monthValue = String(month + 1).padStart(2, '0');
    let formattedDate = `${day}-${monthValue}-${year}`;

    document.getElementById("payDate").value = formattedDate;

    // Calculate Paid Days
    let selectedDay = selectedDate.getDate();
    let totalDays = lastDate.getDate();

    let paidDays = totalDays - selectedDay + 1;

    document.getElementById("paidDays").value = paidDays;

    calculateSalary();
}
function downloadPayslip(){

let requiredFields = [

"name",
"persNo",
"designation",
"pan",
"department",
"doj",
"payPeriod",
"pfNumber",
"uan",
"basicPay",
"transport",
"meal",
"professionalTax",
"insurance",
"sodexo",
"bankName",
"bankAccount"
];

let isValid = true;


/* CHECK EMPTY FIELDS */

requiredFields.forEach(function(id){

let field =
document.getElementById(id);

if(field){

if(field.value.trim() === ""){

field.style.border =
"2px solid red";

isValid = false;


/* REMOVE RED WHEN USER TYPES */

field.addEventListener("input", function(){

if(this.value.trim() !== ""){

this.style.border =
"1px solid #ccc";

}

});

}else{

field.style.border =
"1px solid #ccc";

}

}

});


/* STOP DOWNLOAD */

if(!isValid){

alert(
"Please fill all required details before downloading payslip."
);

return;

}


/* DOWNLOAD */

window.print();

}