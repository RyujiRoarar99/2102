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

//----------------------------------------------------------- SLOTS PER DAY -----------------------------------------------------------------
//Get day for all scopes per day
app.post('/GetScopePerDay',(req,res) => {
    db.query(
        "SELECT * FROM no_of_sampling_per_day",
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

//Update the scopes per day
app.post('/UpdateScopePerDay',(req,res) => {
    const date = req.body.date;
    const slot1 = req.body.slot1;
    console.log(slot1);
    db.query(
        "INSERT INTO no_of_sampling_per_day (no_of_sampling_per_day.date,slots,filled) values ? ON DUPLICATE KEY UPDATE slots = ?",
        [date,slot1],
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