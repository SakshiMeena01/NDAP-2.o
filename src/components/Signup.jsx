import React, { useState } from 'react';
import './Signup.css';
import { auth, googleProvider } from '../firebase';  // Import auth setup
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Signup = ({ switchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User signed up:', userCredential.user);
        // Optionally: Store additional user data (name, role) in Firestore
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const handleGoogleSignup = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log('Signed up with Google:', result.user);
        // Optionally: Store user info in Firestore
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="signup-background">
      <div className="signup-card">
        <div className="signup-left">
          <div className="signup-logos">
            <img src="/niti_img.png" alt="NITI Aayog" className="niti-logo" />
            <img src="/ndap.png" alt="NDAP" className="ndap-logo" />
          </div>
          <h1>Welcome to NDAP!</h1>
          <p>
            Access and analyze curated government datasets to drive evidence-based policy.
          </p>
        </div>

        <div className="signup-right">
          <h2>Create Account</h2>
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

          <p className="radio-label">What best describes you?</p>
          <div className="radio-options">
            <label><input type="radio" name="role" value="Government" onChange={e => setRole(e.target.value)} /> Government</label>
            <label><input type="radio" name="role" value="Student" onChange={e => setRole(e.target.value)} /> Student</label>
            <label><input type="radio" name="role" value="Others" onChange={e => setRole(e.target.value)} /> Others</label>
          </div>

          <button className="primary-btn" onClick={handleSignup}>
            Create Account
          </button>

          {error && <p className="error-message">{error}</p>}

          <p className="login-link">
            Already have an account?{' '}
            <span className="auth-link" onClick={switchToLogin}>Login</span>
          </p>

          <div className="social-buttons">
            <button className="google-btn" onClick={handleGoogleSignup}>
              <img src="/google.png" className="icon" alt="Google" />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
