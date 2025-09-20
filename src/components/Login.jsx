import React, { useState } from 'react';
import './Login.css';
import { auth, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Login({ switchToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User logged in:', userCredential.user);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log('Logged in with Google:', result.user);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="login-outer-center">
      <div className="login-card-center">
        <div className="login-left-logo">
          <img src="/niti.png" alt="NITI Aayog" className="center-logo" />
        </div>
        <div className="login-form-main">
          <div className="logo-section">
            <img src="/ndap.png" alt="NDAP" className="logo" />
          </div>
          <h1>Welcome to NDAP!</h1>
          <p className="subtitle">
            Access and analyze curated government datasets to drive evidence-based decision-making.
          </p>

          <div className="form-section">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="primary-btn" type="submit">
                Login
              </button>
            </form>

            {error && <p className="error-message">{error}</p>}

            <p className="signup-prompt">
              Don't have an account?{' '}
              <span onClick={switchToSignup} className="auth-link" style={{ cursor: 'pointer', color: '#007bff' }}>
                Create Account
              </span>
              &nbsp;&nbsp;Forgot Password?
            </p>

            <div className="social-buttons">
              <button className="google-btn" onClick={handleGoogleLogin}>
                <img src="/google.png" className="icon" alt="Google" />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
