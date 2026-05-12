const express = require("express");

const mysql = require("mysql2");

const cors = require("cors");

const app = express();



// ================= MIDDLEWARE =================

app.use(cors());

app.use(express.json());



// ================= MYSQL CONNECTION =================

const db = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "root123",

    database: "payslipdb"

});



db.connect((err) => {

    if (err) {

        console.log(err);

    } else {

        console.log("MySQL Connected Successfully");

    }

});



// ================= SAVE PAYSLIP API =================

app.post("/savePayslip", (req, res) => {

    const data = req.body;

    console.log(data);



    const sql = `

    INSERT INTO payslips (

        name,
        designation,
        department,
        payPeriod,
        pfNo,

        persNo,
        pan,
        doj,
        paidDays,
        uan,

        basic,
        hra,
        transportAllowance,
        mealCoupon,
        totalEarnings,

        incomeTax,
        totalTax,

        pfContribution,
        professionalTax,
        insurance,
        sodexo,
        totalDeductions,

        bankName,
        bankAccount,
        netPay

    )

    VALUES (

        ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?,
        ?, ?,
        ?, ?, ?, ?, ?,
        ?, ?, ?

    )

    `;
const values = [

    // EMPLOYEE DETAILS

    data.name,
    data.designation,
    data.department,
    data.payPeriod,
    data.pfNo,

    data.persNo,
    data.pan,
    data.doj,
    data.paidDays,
    data.uan,



    // EARNINGS

    data.basicPay,
    data.hra,
    data.transport,
    data.meal,
    data.totalEarnings,



    // TAXES

    data.incomeTax,
    data.totalTax,



    // DEDUCTIONS

    data.pfContribution,
    data.professionalTax,
    data.insurance,
    data.sodexo,
    data.totalDeductions,



    // BANK

    data.bankName,
    data.bankAccount,



    // FORMULA

    data.netPay

];
console.log(values);



    db.query(sql, values, (err, result) => {

        if (err) {

            console.log(err);

            res.status(500).json({

                message: "Database Error"

            });

        } else {

            res.json({

                message: "Payslip Saved Successfully"

            });

        }

    });

});



// ================= SERVER =================

app.listen(5000, () => {

    console.log("Server Running On Port 5000");

});