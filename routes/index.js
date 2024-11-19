const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Express.js App!');
});

module.exports = router;
