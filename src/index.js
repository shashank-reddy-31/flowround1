const express = require('express');  
const db = require('./db/database');  
const transactionsRoutes = require('./routes/transactions');  

const app = express();  
const PORT = process.env.PORT || 3000;  

// Middleware  
app.use(express.json()); // for parsing application/json  

// Routes  
app.use('/transactions', transactionsRoutes);  

// Start server  
app.listen(PORT, () => {  
    console.log(`Server is running on port ${PORT}`);  
});