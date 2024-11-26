const express = require('express');
const router = express.Router();
let gameField = [["", "", ""],
["", "", ""],
["", "", ""]];
let tahy = 0;
let win = false;

// Simulate a table update API
router.post('/table', (req, res) => {
    const { row } = req.row;
    const { column } = req.column;
    gameField[row][column] = "x";
    tahy = tahy + 1;
    checkColumn(row, column);


    // Simulate a successful response
    res.json({ message: win });
});

async function checkColumn(row, column) {
    if (column == 2) {
        if (gameField[row][column - 1] == "x") {
            if (gameField[row][column - 2] == "x") {
                win = true;
            }
        }
    }
    else if (column == 1) {
        if (gameField[row][column + 1] == "x") {
            if (gameField[row][column - 1] == "x") {
                win = true;
            }
        }
    }
    else if (column == 0) {
        if (gameField[row][column + 1] == "x") {
            if (gameField[row][column + 2] == "x") {
                win = true;
            }
        }
    }
    else {
        checkRow(row, column);
    }
}

async function checkRow(row, column) {
    if (row == 2) {
        if (gameField[row - 1][column] == "x") {
            if (gameField[row - 2][column] == "x") {
                win = true;
            }
        }
    }
    else if (row == 1) {
        if (gameField[row + 1][column] == "x") {
            if (gameField[row - 1][column] == "x") {
                win = true;
            }
        }
    }
    else if (row == 0) {
        if (gameField[row + 1][column] == "x") {
            if (gameField[row + 2][column] == "x") {
                win = true;
            }
        }
    }
    else {
        checkDiagonal(row,column);
    }
}

async function checkDiagonal(row, column) {
    if (row == 2) {
        if (gameField[row - 1][column] == "x") {
            if (gameField[row - 2][column] == "x") {
                win = true;
            }
        }
    }
    else if (row == 1) {
        if (gameField[row + 1][column] == "x") {
            if (gameField[row - 1][column] == "x") {
                win = true;
            }
        }
    }
    else if (row == 0) {
        if (gameField[row + 1][column] == "x") {
            if (gameField[row + 2][column] == "x") {
                win = true;
            }
        }
    }
    else {
        win = "What did you do";
    }
}

module.exports = router;
