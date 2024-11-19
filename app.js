const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
