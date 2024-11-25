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
    const { value } = req.body;
    gameField[value] = "x";
    xField.push(value)
    console.log(gameField);
    if (xField.length >= 2 ) {
        win = "ha";
        check(value);
    }
    

    // Simulate a successful response
    res.json({ message: win });
});

async function check(va) {
    if (gameField[va-1]=="x") {
        if (gameField[va-2]=="x") {
            win = true;
        } else if (gameField[va+1]=="x") {
            win = true;
        }
    }
}

module.exports = router;
