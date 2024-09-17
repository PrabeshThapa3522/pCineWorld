// src/LoginForm.js
import React from 'react';
import './LoginForm.css'; // Import the CSS file for styling
import {Link} from 'react-router-dom';
const LoginForm = () => {
  return (
    <div className="container">

      <div className="login-form">
      <div className="image-slider">
        <img src="reel.png" alt="Slide 1" />
        <img src="football.png" alt="Slide 2" />
        <img src="cricket.png" alt="Slide 3" />
        <img src="voice.png" alt="Slide 4" />
        <img src="dance.png" alt="Slide 5" />
        <img src="comedy.png" alt="Slide 6" />
        <img src="reel.png" alt="Slide 1" />
        <img src="football.png" alt="Slide 2" />
        <img src="cricket.png" alt="Slide 3" />
        <img src="voice.png" alt="Slide 4" />
        <img src="dance.png" alt="Slide 5" />
        <img src="comedy.png" alt="Slide 6" />
        
      </div>

        <h2>Welcome To CineWorld</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p>Don't have an account?<Link to="signup">Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
