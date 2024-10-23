const express = require('express');  
const router = express.Router();  
const db = require('../db/database');  

// GET all transactions  
router.get('/', (req, res) => {  
    db.all('SELECT * FROM transactions', [], (err, rows) => {  
        if (err) {  
            res.status(500).json({ error: err.message });  
        } else {  
            res.json(rows);  
        }  
    });  
});  

// POST a new transaction  
router.post('/', (req, res) => {  
    const { type, category, amount, date, description } = req.body;  
    const stmt = db.prepare('INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)');  
    stmt.run(type, category, amount, date, description, function (err) {  
        if (err) {  
            res.status(500).json({ error: err.message });  
        } else {  
            res.status(201).json({ id: this.lastID });  
        }  
    });  
    stmt.finalize();  
});  

module.exports = router;