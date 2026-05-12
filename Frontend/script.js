function calculatePayslip() {

    // ================= MANUAL VALUES =================

    let basicPay =
        parseFloat(document.getElementById("basicPay").value) || 0;

    let transport =
        parseFloat(document.getElementById("transport").value) || 0;

    let meal =
        parseFloat(document.getElementById("meal").value) || 0;



    // ================= AUTO CALCULATIONS =================

    // HRA = 50% of Basic Pay

    let hra =
        basicPay * 0.50;



    // ================= TOTAL EARNINGS =================

    let totalEarnings =
        basicPay + hra + transport + meal;



    // ================= TAXES =================

    // Income Tax = 10% of Total Earnings

    let incomeTax =
        totalEarnings * 0.10;

    let totalTaxes =
        incomeTax;



    // ================= DEDUCTIONS =================

    // PF = 12% of Basic Pay

    let pf =
        basicPay * 0.12;



    // MANUAL FIELDS

    let professionalTax =
        parseFloat(document.getElementById("professionalTax").value) || 0;

    let insurance =
        parseFloat(document.getElementById("insurance").value) || 0;

    let sodexo =
        parseFloat(document.getElementById("sodexo").value) || 0;



    // TOTAL DEDUCTIONS

    let totalDeductions =
        pf + professionalTax + insurance + sodexo;



    // ================= NET PAY =================

    let netPay =
        totalEarnings - totalTaxes - totalDeductions;



    // ================= CURRENT PERIOD VALUES =================

    document.getElementById("hra").value =
        hra.toFixed(2);

    document.getElementById("incomeTax").value =
        incomeTax.toFixed(2);

    document.getElementById("totalTax").value =
        totalTaxes.toFixed(2);

    document.getElementById("pfContribution").value =
        pf.toFixed(2);

    document.getElementById("totalEarnings").value =
        totalEarnings.toFixed(2);

    document.getElementById("totalDeductions").value =
        totalDeductions.toFixed(2);

    document.getElementById("netPay").value =
        netPay.toFixed(2);



    // ================= YEAR TO DATE VALUES =================

    document.getElementById("basicPayYear").value =
        (basicPay * 12).toFixed(2);

    document.getElementById("hraYear").value =
        (hra * 12).toFixed(2);

    document.getElementById("transportYear").value =
        (transport * 12).toFixed(2);

    document.getElementById("mealYear").value =
        (meal * 12).toFixed(2);

    document.getElementById("totalEarningsYear").value =
        (totalEarnings * 12).toFixed(2);

    document.getElementById("incomeTaxYear").value =
        (incomeTax * 12).toFixed(2);

    document.getElementById("totalTaxYear").value =
        (totalTaxes * 12).toFixed(2);

    document.getElementById("pfYear").value =
        (pf * 12).toFixed(2);

    document.getElementById("professionalTaxYear").value =
        (professionalTax * 12).toFixed(2);

    document.getElementById("insuranceYear").value =
        (insurance * 12).toFixed(2);

    document.getElementById("sodexoYear").value =
        (sodexo * 12).toFixed(2);

    document.getElementById("totalDeductionsYear").value =
        (totalDeductions * 12).toFixed(2);



    // ================= FORMULA SECTION =================

    document.getElementById("formulaEarnings").value =
        totalEarnings.toFixed(2);

    document.getElementById("formulaTaxes").value =
        totalTaxes.toFixed(2);

    document.getElementById("formulaDeductions").value =
        totalDeductions.toFixed(2);

}
async function savePayslip() {

    const data = {

    // EMPLOYEE DETAILS

    name:
        document.getElementById("name").value,

    designation:
        document.getElementById("designation").value,

    department:
        document.getElementById("department").value,

    payPeriod:
        document.getElementById("payPeriod").value,

    pfNo:
        document.getElementById("pfNo").value,

    persNo:
        document.getElementById("persNo").value,

    pan:
        document.getElementById("pan").value,

    doj:
        document.getElementById("doj").value,

    paidDays:
        document.getElementById("paidDays").value,

    uan:
        document.getElementById("uan").value,



    // EARNINGS

    basicPay:
        document.getElementById("basicPay").value,

    hra:
        document.getElementById("hra").value,

    transport:
        document.getElementById("transport").value,

    meal:
        document.getElementById("meal").value,

    totalEarnings:
        document.getElementById("totalEarnings").value,



    // TAXES

    incomeTax:
        document.getElementById("incomeTax").value,

    totalTax:
        document.getElementById("totalTax").value,



    // DEDUCTIONS

    pfContribution:
        document.getElementById("pfContribution").value,

    professionalTax:
        document.getElementById("professionalTax").value,

    insurance:
        document.getElementById("insurance").value,

    sodexo:
        document.getElementById("sodexo").value,

    totalDeductions:
        document.getElementById("totalDeductions").value,



    // BANK

    bankName:
        document.getElementById("bankName").value,

    bankAccount:
        document.getElementById("bankAccount").value,



    // NET PAY

    netPay:
        document.getElementById("netPay").value

};




    try {

        const response = await fetch(
            "http://localhost:5000/savePayslip",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)
            }
        );



        const result = await response.json();



        if (response.ok) {

            alert("Payslip Saved Successfully!");

            console.log(result);

        } else {

            alert("Failed To Save Payslip");

        }

    } catch (error) {

        console.log(error);

        alert("Server Connection Error");

    }

}
function setLastDate() {

    let payPeriod =
        document.getElementById("payPeriod").value;

    if(payPeriod){

        let parts = payPeriod.split("-");

        let year = parts[0];

        let month = parts[1];



        let lastDay =
            new Date(year, month, 0).getDate();



        document.getElementById("payDate").value =
            `${lastDay}-${month}-${year}`;



        document.getElementById("paidDays").value =
            lastDay;

    }
  }

