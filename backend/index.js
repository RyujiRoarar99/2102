const express = require("express");
require('dotenv').config();
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection(process.env.DATABASE_URL);

//For login
app.post('/login',(req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM user WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if(err) {
                console.log(err);
            }
            else {
                //sends the result
                if(result) {
                    res.send(result);
                }
            }
        }
    );
})

//----------------------------------------------------------- WASHER EQUIPMENT -----------------------------------------------------------------
//For viewing washer overview in the system
app.post('/EquipmentOverviewWasher',(req, res) => {
    const filteredSerialNo = req.body.filteredSerialNo;
    db.query(
        "SELECT * FROM washer WHERE serial_no LIKE concat(?, '%')",
        [filteredSerialNo],
        (err, result) => {
            if(err) {
                console.log(err);
            }
            else {
                //sends the result
                if(result) {
                    res.send(result);
                }
            }
        }
    );
})

//For viewing washer logs past and present
app.post('/EquipmentOverviewWasherLogs',(req, res) => {
    const SerialNo = req.body.SerialNo;
    db.query(
        "SELECT * FROM washer_sampled WHERE washer_id = ?",
        [SerialNo],
        (err, result) => {
            if(err) {
                console.log(err);
            }
            else {
                //sends the result
                if(result) {
                    res.send(result);
                }
            }
        }
    );
})

//----------------------------------------------------------- SCOPE EQUIPMENT -----------------------------------------------------------------
//For viewing scope overview in the system
app.post('/EquipmentOverviewScope',(req, res) => {
    const filteredSerialNo = req.body.filteredSerialNo;
    db.query(
        "SELECT * FROM scope WHERE serial_no LIKE concat(?, '%')",
        [filteredSerialNo],
        (err, result) => {
            if(err) {
                console.log(err);
            }
            else {
                //sends the result
                if(result) {
                    res.send(result);
                }
            }
        }
    );
})

//For viewing washer logs past and present
app.post('/EquipmentOverviewScopeLogs',(req, res) => {
    const SerialNo = req.body.SerialNo;
    db.query(
        "SELECT * FROM scope_sampled WHERE scope_id = ?",
        [SerialNo],
        (err, result) => {
            if(err) {
                console.log(err);
            }
            else {
                //sends the result
                if(result) {
                    res.send(result);
                }
            }
        }
    );
})


//Check if connection is successful when initialized
app.listen(3001, ()=> {
    console.log("Server is running!");
})