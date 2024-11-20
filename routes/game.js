const express = require('express');
const router = express.Router();

let playerScore = 0;

// Route to get the current score
router.get('/score', (req, res) => {
    res.json({ score: playerScore });
});

// Route to update the score
router.post('/score', (req, res) => {
    const { points } = req.body;
    playerScore += points;
    res.json({ message: 'Score updated!', score: playerScore });
});

module.exports = router;
