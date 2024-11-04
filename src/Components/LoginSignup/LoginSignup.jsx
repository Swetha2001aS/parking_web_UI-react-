import React from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/profile.png';
import email_icon from '../Assets/mail.png';
import password_icon from '../Assets/padlock.png';

const LoginSignup = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img  src={user_icon} alt="User Icon" />
          <input type="text" placeholder="Username" />
        </div>        
        <div className="input">
          <img  src={email_icon} alt="Email Icon" />
          <input type="email" placeholder="Email" />
        </div>  
        <div className="input">
          <img  src={password_icon} alt="Password Icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="submit-container">
        <button className="submit">Sign Up</button>
      </div>
    </div>
  );
}

export default LoginSignup;
