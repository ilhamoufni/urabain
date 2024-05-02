const express = require("express")
const mysql= require("mysql")
const port = process.env.PORT || 3001

const app = express();
const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : '',
    database : 'urbain',
    socketPath :''
});
connection.connect((err) => {
    if (err){
        console.error("Erreur de connexion: " + err.stack)
        return;
    }
    console.log("Connexion reussie à la bd!")
});

connection.query("SELECT*FROM users ",(err,rows, fields) => {
    if(err) throw err;
    console.log("les données sont:" , rows)
})
app.listen(port, () => {
    console.log("serveur est en ligne!");
})

