const express = require('express');
const router = express.Router();
let gameField = ["","","",
                 "","","",
                 "","",""];
let xField = [];
let oField = [];
let win = false;

// Simulate a table update API
router.post('/table', (req, res) => {
    const { row } = req.row;
    const { column } = req.column;
    gameField[row][column] = "x";
    xField.push(value)
    console.log(gameField);
    if (xField.length >= 2 ) {
        win = "ha";
        check(row,column);
    }
    

    // Simulate a successful response
    res.json({ message: win });
});

async function check(row,column) {
  if (va+1 % 3==0) {
    if (gameField[va-1]=="x") {
        if (gameField[va-2]=="x") {
            win = true;
        } 
    }
    }
  else if (va+1 % 3==0) {
  if (gameField[va+1]=="x"){
     if (gameField[va-1]=="x") {
            win = true;
        } 
        } 
    }
  if (gameField[va+1]=="x"){
     if (gameField[va+2]=="x") {
            win = true;
        } 
        } 
}

module.exports = router;
