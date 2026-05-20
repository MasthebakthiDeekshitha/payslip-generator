function calculatePayslip() {

    // =========================
    // GET VALUES
    // =========================

    let actualBasicPay =
    parseFloat(document.getElementById("actualBasicPay").value) || 0;

    let transport =
    parseFloat(document.getElementById("transport").value) || 0;

    let meal =
    parseFloat(document.getElementById("meal").value) || 0;

    let professionalTax =
    parseFloat(document.getElementById("professionalTax").value) || 0;

    let insurance =
    parseFloat(document.getElementById("insurance").value) || 0;


    // =========================
    // GET MONTH
    // =========================

    let fromDate =
    document.getElementById("payPeriod").value;

    let ytd = 1;

    if(fromDate){

        let month =
        new Date(fromDate).getMonth() + 1;

        // Financial year starts from April

        if(month >= 4){

            ytd = month - 3;

        }
        else{

            ytd = month + 9;

        }

    }


    // =========================
    // BASIC PAY
    // =========================

    let basicPay =
    actualBasicPay * 0.672043;

    document.getElementById("basicPay").value =
    basicPay.toFixed(2);


    // =========================
    // HRA
    // =========================

    let hra =
    basicPay * 0.50;

    document.getElementById("hra").value =
    hra.toFixed(2);


    // =========================
    // PF
    // =========================

    let pf =
    basicPay * 0.12;

    document.getElementById("pfContribution").value =
    pf.toFixed(2);


    // =========================
    // SODEXO
    // =========================

    let sodexo = meal;

    document.getElementById("sodexo").value =
    sodexo.toFixed(2);


    // =========================
    // TOTAL EARNINGS
    // =========================

    let totalEarnings =
    basicPay +
    hra +
    transport +
    meal;

    document.getElementById("totalEarnings").value =
    totalEarnings.toFixed(2);


    // =========================
    // YEARLY EARNINGS
    // =========================

    let yearlyEarnings =
    totalEarnings * 12;


    // =========================
    // TAX SLAB
    // =========================

    let taxPercent = 0;

    if(yearlyEarnings <= 400000){

        taxPercent = 0;

    }
    else if(yearlyEarnings <= 800000){

        taxPercent = 5;

    }
    else if(yearlyEarnings <= 1200000){

        taxPercent = 10;

    }
    else if(yearlyEarnings <= 1600000){

        taxPercent = 15;

    }
    else if(yearlyEarnings <= 2000000){

        taxPercent = 20;

    }
    else if(yearlyEarnings <= 2400000){

        taxPercent = 25;

    }
    else{

        taxPercent = 30;

    }


    // =========================
    // INCOME TAX
    // =========================

    let incomeTax =
    (totalEarnings * taxPercent) / 100;

    document.getElementById("incomeTax").value =
    incomeTax.toFixed(2);


    // =========================
    // TOTAL TAX
    // =========================

    document.getElementById("totalTax").value =
    incomeTax.toFixed(2);


    // =========================
    // TOTAL DEDUCTIONS
    // =========================

    let totalDeductions =
    pf +
    professionalTax +
    insurance +
    incomeTax;

    document.getElementById("totalDeductions").value =
    totalDeductions.toFixed(2);


    // =========================
    // NET PAY
    // =========================

    let netPay =
    totalEarnings -
    totalDeductions;

    document.getElementById("netPay").value =
    netPay.toFixed(2);


    // =========================
    // YEAR TO DATE VALUES
    // =========================

    document.getElementById("basicPayYear").value =
    (basicPay * ytd).toFixed(2);

    document.getElementById("hraYear").value =
    (hra * ytd).toFixed(2);

    document.getElementById("transportYear").value =
    (transport * ytd).toFixed(2);

    document.getElementById("mealYear").value =
    (meal * ytd).toFixed(2);

    document.getElementById("totalEarningsYear").value =
    (totalEarnings * ytd).toFixed(2);

    document.getElementById("incomeTaxYear").value =
    (incomeTax * ytd).toFixed(2);

    document.getElementById("pfYear").value =
    (pf * ytd).toFixed(2);

    document.getElementById("professionalTaxYear").value =
    (professionalTax * ytd).toFixed(2);

    document.getElementById("insuranceYear").value =
    (insurance * ytd).toFixed(2);

    document.getElementById("sodexoYear").value =
    (sodexo * ytd).toFixed(2);

    document.getElementById("totalDeductionsYear").value =
    (totalDeductions * ytd).toFixed(2);

    document.getElementById("totalTaxYear").value =
    (incomeTax * ytd).toFixed(2);


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

}function setLastDate(){

    let fromDate =
    document.getElementById("payPeriod").value;

    if(fromDate === ''){

        document.getElementById("payDate").value='';

        document.getElementById("paidDays").value='';

        return;
    }

    let selectedDate =
    new Date(fromDate);

    let year =
    selectedDate.getFullYear();

    let month =
    selectedDate.getMonth();

    // MONTH END DATE

    let monthEnd =
    new Date(year, month + 1, 0);

    // FORMAT YYYY-MM-DD

    let yyyy =
    monthEnd.getFullYear();

    let mm =
    String(monthEnd.getMonth()+1)
    .padStart(2,'0');

    let dd =
    String(monthEnd.getDate())
    .padStart(2,'0');

    let formattedDate =
    `${yyyy}-${mm}-${dd}`;

    // AUTO SET TO DATE

    document.getElementById("payDate").value =
    formattedDate;

    calculatePaidDays();
}

function calculatePaidDays(){

    let fromDate =
    document.getElementById("payPeriod").value;

    let toDate =
    document.getElementById("payDate").value;

    if(fromDate === '' || toDate === ''){

        document.getElementById("paidDays").value='';

        return;
    }

    let start =
    new Date(fromDate);

    let end =
    new Date(toDate);

    // DIFFERENCE

    let difference =
    end - start;

    let days =
    Math.floor(
    difference / (1000 * 60 * 60 * 24)
    ) + 1;

    if(days < 0){

        days = 0;
    }

    document.getElementById("paidDays").value =
    days;
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
"actualBasicPay",
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
function updatePayslipMonth() {

    const payPeriod =
        document.getElementById("payPeriod").value;

    if (payPeriod) {

        const date = new Date(payPeriod);

        const month =
            date.toLocaleString('default',
            { month: 'long' });

        const year =
            date.getFullYear();

        document.getElementById("payslipMonth").innerText =
            "Payslip for the Month of "
            + month + " - " + year;
    }
}
window.clearForm = function () {

    // Clear all text boxes
    let inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {

        inputs[i].value = "";

    }

};
document.addEventListener("keydown", function (e) {

    if (e.key === "Tab") {

        const fields = Array.from(
            document.querySelectorAll(
                "input:not([readonly]), select:not([readonly]), textarea:not([readonly])"
            )
        );

        const currentIndex = fields.indexOf(document.activeElement);

        if (currentIndex > -1) {

            e.preventDefault();

            const nextField =
                fields[currentIndex + 1];

            if (nextField) {

                nextField.focus();

            }

        }

    }

});