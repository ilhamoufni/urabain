import './App.css';
import React , { useState }from "react";
import Navbar from "./Components/navbar";
import Intro from "./Components/intro";
import LoginForm from "./Components/loginform";
import DocumentsTable from "./Components/DocumentsTable";
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:3001/login', {
            // vos données de connexion
        });
        if (response.data.success) {
            setLoggedIn(true);
        }
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
    }
};

  return (
    <Router>
      <Navbar />
      <Intro/>
      <LoginForm />
      <div>
                {!loggedIn ? (
                    <button onClick={handleLogin}>Se connecter</button>
                ) : (
                    <Routes>
                        <Route exact path="/documents" component={DocumentsTable} />
                        {/* Vous pouvez ajouter d'autres routes ici si nécessaire */}
                    </Routes>
                )}
                {loggedIn && <Link to="/documents">Voir les documents</Link>}
            </div>
    </Router>
  );
}

export default App;


