const express = require('express');
const router = express.Router();
var gameField = ["","","",
                 "","","",
                 "","",""];

// Simulate a table update API
router.post('/table', (req, res) => {
    const { value } = req.body;
    gameField[value] = "x";
    console.log(gameField);
    
    // Simulate a successful response
    res.json({ message: 'Table updated successfully!' });
});

module.exports = router;
