const express = require('express');
const router = express.Router();

// Simulate a table update API
router.post('/table', (req, res) => {
    const { value } = req.body;

    console.log(`Received value: ${value}`);
    
    // Simulate a successful response
    res.json({ message: 'Table updated successfully!' });
});

module.exports = router;
