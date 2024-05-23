
import './loginform.css'; 
import React, { useState,useRef } from 'react';
import axios from 'axios';

const LoginPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const modalRef = useRef();


  // const handleTogglePopup = () => {
  //   setIsOpen(!isOpen);
  // };
  const handleLogin = () => {
   
    console.log('Connexion avec:', username, password);
    console.log('Mémoriser l\'identifiant:', rememberMe)
    axios.post('http://localhost:3001/login',{username,password})
    .then (res => console.log(res))
    .catch(err => console.log(err))
    
    
    setUsername('');
    setPassword('');
    setIsOpen(false); 
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  return (
    <div>
      <button onClick={handleLogin => setIsOpen(true)} className= "button n-button">Se connecter</button>
    
            <link to="/Table"></link>
      
      {isOpen && (
        <div className="popup"  onClick={handleClickOutside}>
          <div className="popup_inner" ref={modalRef}>
            <h2>Connexion</h2>
            <label>
              Nom d'utilisateur:
              <input
                type="email" placeholder='Entrer votre email'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Mot de passe:
              <input
                type="password" placeholder='Entrer votre mot de passe'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button onClick={handleLogin}>Se connecter</button>
            <button onClick={() => setIsOpen(false)}>Fermer</button>
            <link to="/Table"></link>


            <label>
              <input type="checkbox"   checked={rememberMe}  onChange={(e) => setRememberMe(e.target.checked)} />
              Mémoriser mon identifiant
            </label>
            <div className="password-forgot">
              <a href="#">Mot de passe oublié ?</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPopup;
