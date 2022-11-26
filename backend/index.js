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
//----------------------------------------------------------- MAIN PAGE TO SEE SCHEDULE -----------------------------------------------------------------
app.post('/GetScopeToday',(req,res) => {
    db.query(
        "SELECT b.model_no, b.brand, b.serial_no FROM scope_sampling a INNER JOIN scope b ON a.scope_id = b.scope_id WHERE CAST(a.date_to_sample AS DATE) = CAST(DATE(CONVERT_TZ(NOW(),'MST7MDT','+01:00')) AS DATE) ",
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

app.post('/GetWasherToday',(req,res) => {
    db.query(
        "SELECT b.model_no,b.serial_no FROM washer_sampling a INNER JOIN washer b ON a.washer_id = b.washer_id WHERE CAST(a.date_to_sample AS DATE) = CAST(DATE(CONVERT_TZ(NOW(),'MST7MDT','+01:00')) AS DATE) ",
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

app.post('/DeleteScopeToday',(req,res) => {
    const date = req.body.date;
    const serial_no = req.body.serial_no;

    db.query(
        "DELETE FROM scope_sampling WHERE cast(date_to_sample as Date) = cast(DATE(CONVERT_TZ(NOW(),'MST7MDT','+08:00')) as Date) AND scope_id = (select scope_id from scope where serial_no = ?)",
        [serial_no],
        (err, result) => {
            if(err) {
                console.log(err);
            }
            else {
                db.query("UPDATE no_of_sampling_per_day SET filled= filled - 1 WHERE cast(date as Date) = cast(DATE(CONVERT_TZ(NOW(),'MST7MDT','+08:00')) as Date);",
                (err, result) => {
                    if(err) {
                        console.log(err);
                    }
                }
                )
            }
        }
    );
})

app.post('/DeleteWasherToday',(req,res) => {
    const date = req.body.date;
    const serial_no = req.body.serial_no;

    db.query(
        "DELETE FROM washer_sampling WHERE cast(date_to_sample as Date) = cast(DATE(CONVERT_TZ(NOW(),'MST7MDT','+08:00')) as Date) AND washer_id = (select washer_id from washer where serial_no = ?)",
        [serial_no],
        (err, result) => {
            if(err) {
                console.log(err);
            }
            else {
                db.query("UPDATE no_of_sampling_per_day SET filled= filled - 1 WHERE cast(date as Date) = cast(DATE(CONVERT_TZ(NOW(),'MST7MDT','+08:00')) as Date);",
                (err, result) => {
                    if(err) {
                        console.log(err);
                    }
                }
                )
            }
        }
    );
})
//----------------------------------------------------------- LOGGING RECORDS -----------------------------------------------------------------
//Get day for all scopes per day
app.post('/LogScope',(req,res) => {
    const serial_no = req.body.serial_no;
    const washedby = req.body.washedby;
    const collectedBy = req.body.collectedBy;
    const circulatedBy = req.body.circulatedBy;
    const fluidResult = req.body.fluidResult;
    const analysis = req.body.analysis;
    const actionTaken = req.body.actionTaken;
    const date_of_collection = req.body.date_of_collection;
    const date2 = req.body.date2;
        db.query(
        "INSERT INTO scope_sampled (date_of_collection,scope_id,washed_by,collected_by,circulated_by,logged_by,date_of_result,fluid_result,analysis,action_taken) VALUES(?,?,?,?,?,'admin',?,?,?,?)",
        [date_of_collection,serial_no,washedby,collectedBy,circulatedBy,date2,fluidResult,analysis,actionTaken]
        ,(err,result) => {
            if(err) {
                console.log(err);
            }
        }) 
    }
)

//Get day for all scopes per day
app.post('/LogWasher',(req,res) => {
    const serial_no = req.body.serial_no;
    const collectedBy = req.body.collectedBy;
    const circulatedBy = req.body.circulatedBy;
    const fluidResult = req.body.fluidResult;
    const analysis = req.body.analysis;
    const actionTaken = req.body.actionTaken;
    const date_of_collection = req.body.date_of_collection;
    const date2 = req.body.date2;
    db.query(
        "INSERT INTO washer_sampled (date_of_collection,washer_id,collected_by,circulated_by,logged_by,date_of_result,fluid_result,analysis,action_taken) VALUES(?,?,?,?,'admin',?,?,?,?)",
        [date_of_collection,serial_no,collectedBy,circulatedBy,date2,fluidResult,analysis,actionTaken],
        (err, result) => {
            if(err) {
                console.log(err);
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

//Get Number of slots from today
app.post('/GetSlotsFromToday',(req,res) => {
    db.query(
        "SELECT * FROM no_of_sampling_per_day WHERE CAST(no_of_sampling_per_day.date as Date) >= CAST(CONVERT_TZ(NOW(),'MST7MDT','+01:00') as Date)",
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

//Get Number of slots from today
app.post('/GetAllEquipment',(req,res) => {
    db.query(
        "SELECT a.scope_id as id, a.serial_no, 'Scope' as item FROM scope a UNION SELECT b.washer_id as id, b.serial_no, 'Washer' as item FROM washer b",
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

//Get Number of slots from today
app.post('/GetAllEquipmentFiltered',(req,res) => {
    const filter = req.body.filterSerial;
    db.query(
        "SELECT a.scope_id as id, a.serial_no, 'Scope' as item FROM scope a WHERE serial_no like concat(?, '%') UNION SELECT b.washer_id as id, b.serial_no, 'Washer' as item FROM washer b WHERE serial_no like concat(?, '%')",
        [filter,filter],
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

//Get Number of slots from today
app.post('/GetLoggedEquipment',(req,res) => {
    db.query(
        "select scope.scope_id as id, scope.serial_no,scope_sampling.date_to_sample, 'Scope' as type FROM scope INNER JOIN scope_sampling ON scope.scope_id = scope_sampling.scope_id UNION select washer.washer_id as id, washer.serial_no,washer_sampling.date_to_sample, 'Washer' as type FROM washer INNER JOIN washer_sampling ON washer.washer_id = washer_sampling.washer_id",
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

//Insert new scope log
app.post('/InsertScopeLogDate',(req,res) => {
    const scope_id = req.body.scope_id;
    const date = req.body.date;
    db.query(
        "INSERT INTO scope_sampling (scope_id,date_to_sample) VALUES(?,?)",
        [scope_id,date],
        (err, result) => {
            if(err) {
                console.log(err);
            }
        }
    );
})

//Insert new washer log
app.post('/InsertWasherLogDate',(req,res) => {
    const scope_id = req.body.scope_id;
    const date = req.body.date;
    db.query(
        "INSERT INTO washer_sampling (washer_id,date_to_sample) VALUES(?,?)",
        [scope_id,date],
        (err, result) => {
            if(err) {
                console.log(err);
            }
        }
    );
})

//Update The number of Scope Slots
app.post('/AddScopeFilled',(req,res) => {
    const filled = req.body.filled;
    const date = req.body.date;
    db.query(
        "UPDATE no_of_sampling_per_day SET filled = ? WHERE cast(no_of_sampling_per_day.date as Date) = cast(CONVERT_TZ(NOW(),'MST7MDT','+01:00') as Date)",
        [filled,date],
        (err, result) => {
            if(err) {
                console.log(err);
            }
        }
    );
})

//Delete scope log
app.post('/DeleteScopeLog',(req,res) => {
    const scope_id = req.body.scope_id;
    const date = req.body.date;
    db.query(
        "DELETE FROM scope_sampling WHERE scope_id = ? AND date_to_sample = ?",
        [scope_id,date],
        (err, result) => {
            console.log(err);
            if(err) {
                console.log(err);
            }
        }
    );
})

//Delete Washer log
app.post('/DeleteWasherLog',(req,res) => {
    const scope_id = req.body.scope_id;
    const date = req.body.date;
    db.query(
        "DELETE FROM washer_sampling WHERE washer_id = ? AND date_to_sample = ?",
        [scope_id,date],
        (err, result) => {
            console.log(err);
            if(err) {
                console.log(err);
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

//Edit logs 


//Check if connection is successful when initialized
app.listen(3001, ()=> {
    console.log("Server is running!");
})