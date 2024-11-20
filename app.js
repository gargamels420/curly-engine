const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 180;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON data
app.use(express.json());

// Game routes
const gameRoutes = require('./routes/game');
app.use('/api/game', gameRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Game app running at http://localhost:${PORT}`);
});
