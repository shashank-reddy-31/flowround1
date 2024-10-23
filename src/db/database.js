const sqlite3 = require('sqlite3').verbose();  
const path = require('path');  

const db = new sqlite3.Database(path.resolve(__dirname, 'financial.db'), (err) => {  
    if (err) {  
        console.error('Error opening database ' + err.message);  
    }  
});  

db.serialize(() => {  
    db.run(`CREATE TABLE IF NOT EXISTS transactions (  
        id INTEGER PRIMARY KEY AUTOINCREMENT,  
        type TEXT NOT NULL,  
        category TEXT NOT NULL,  
        amount REAL NOT NULL,  
        date TEXT NOT NULL,  
        description TEXT  
    )`);  
});  

module.exports = db;