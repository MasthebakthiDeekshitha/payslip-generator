function calculatePayslip() {

    // BASIC PAY

    let basicPay =
        parseFloat(document.getElementById("basicPay").value) || 0;

    // HRA = 50%

    let hra = basicPay * 0.50;

    // TRANSPORT

    let transport =
        parseFloat(document.getElementById("transport").value) || 0;

    // MEAL

    let meal =
        parseFloat(document.getElementById("meal").value) || 0;

    // TOTAL EARNINGS

    let totalEarnings =
        basicPay + hra + transport + meal;

    // TAX

    let incomeTax =
        totalEarnings * 0.10;

    // PF

    let pfContribution =
        basicPay * 0.12;

    // PROFESSIONAL TAX

    let professionalTax =
        parseFloat(document.getElementById("professionalTax").value) || 0;

    // INSURANCE

    let insurance =
        parseFloat(document.getElementById("insurance").value) || 0;

    // SODEXO

    let sodexo =
        parseFloat(document.getElementById("sodexo").value) || 0;

    // TOTAL DEDUCTIONS

    let totalDeductions =
        pfContribution +
        professionalTax +
        insurance +
        sodexo;

    // NET PAY

    let netPay =
        totalEarnings -
        incomeTax -
        totalDeductions;





    // ================= SET CURRENT PERIOD =================

    document.getElementById("hra").value =
        hra.toFixed(2);

    document.getElementById("totalEarnings").value =
        totalEarnings.toFixed(2);

    document.getElementById("incomeTax").value =
        incomeTax.toFixed(2);

    document.getElementById("totalTax").value =
        incomeTax.toFixed(2);

    document.getElementById("pfContribution").value =
        pfContribution.toFixed(2);

    document.getElementById("totalDeductions").value =
        totalDeductions.toFixed(2);

    document.getElementById("netPay").value =
        netPay.toFixed(2);
        document.getElementById("formulaEarnings").value =
    totalEarnings.toFixed(2);

document.getElementById("formulaTaxes").value =
    incomeTax.toFixed(2);

document.getElementById("formulaDeductions").value =
    totalDeductions.toFixed(2);





    // ================= YEAR TO DATE =================

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
        (incomeTax * 12).toFixed(2);

    document.getElementById("pfYear").value =
        (pfContribution * 12).toFixed(2);
        document.getElementById("professionalTaxYear").value =
    (professionalTax * 12).toFixed(2);

document.getElementById("insuranceYear").value =
    (insurance * 12).toFixed(2);

document.getElementById("sodexoYear").value =
    (sodexo * 12).toFixed(2);

document.getElementById("totalDeductionsYear").value =
    (totalDeductions * 12).toFixed(2);

    

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
async function downloadPayslip(){

const { jsPDF } = window.jspdf;

const payslip =
document.getElementById("payslip");

const canvas =
await html2canvas(payslip);

const imgData =
canvas.toDataURL("image/png");

const pdf =
new jsPDF('p','mm','a4');

const pdfWidth =
pdf.internal.pageSize.getWidth();

const pdfHeight =
(canvas.height * pdfWidth) / canvas.width;

pdf.addImage(
imgData,
'PNG',
0,
0,
pdfWidth,
pdfHeight
);

pdf.save("Payslip.pdf");

}
function validateAndSave(){

let pan =
document.getElementById("pan").value;

let persNo =
document.getElementById("persNo").value;

let pfNo =
document.getElementById("pfNo").value;

let uan =
document.getElementById("uan").value;

let paidDays =
document.getElementById("paidDays").value;



let panPattern =
/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

let persPattern =
/^[A-Z]{3}[0-9]{4}$/;

let pfPattern =
/^[A-Z]{2}[0-9]{5}\/[0-9]{5}$/;

let uanPattern =
/^[0-9]{12}$/;

let paidPattern =
/^[0-9]{1,2}(\.[0-9]{1,2})?$/;



if(
(pan!='' && !panPattern.test(pan)) ||

(persNo!='' && !persPattern.test(persNo)) ||

(pfNo!='' && !pfPattern.test(pfNo)) ||

(uan!='' && !uanPattern.test(uan)) ||

(paidDays!='' && !paidPattern.test(paidDays))

){

alert(
'Please Check Details Again Before Saving'
);

return;

}



let confirmSave =
confirm(
'Are You Sure You Want To Save Payslip?'
);

if(confirmSave){

savePayslip();

}

}
