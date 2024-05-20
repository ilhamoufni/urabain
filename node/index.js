const express = require("express");
const mysql = require("mysql");
const cors = require('cors');
const port = process.env.PORT || 3001;
const app = express();

// Middleware pour analyser le corps JSON des requêtes
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'urbain'
});

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

app.post('/loginForm', (req, res) => {
    const sql = 'SELECT * FROM login WHERE username = ? AND password = ?';
    const { username, password } = req.body;

    db.query(sql, [username, password], (err, data) => {
        if (err) {
            console.error('Erreur lors de la requête SQL:', err);
            return res.status(500).json({ error: 'Erreur lors de la requête SQL' });
        }
        if (data.length > 0) {
            return res.json({ message: "Connexion réussie" });
        } else {
            return res.status(404).json({ error: "Aucun enregistrement trouvé" });
        }
    });
});

app.listen(port, () => {
    console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});
