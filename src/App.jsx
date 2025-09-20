import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/dashboard';
import Codespace from './components/codespace';
import Intro from './components/Intro';
import HomePage from './components/HomePage';
import Chatbot from './components/Chatbot';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Logout handler
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <Router>
      <Routes>
        {/* HOME route */}
        <Route
          path="/"
          element={
            !user ? (
              showIntro ? (
                <Intro onStart={() => setShowIntro(false)} />
              ) : showLogin ? (
                <Login switchToSignup={() => setShowLogin(false)} />
              ) : (
                <Signup switchToLogin={() => setShowLogin(true)} />
              )
            ) : (
              <HomePage onLogout={handleLogout} />
            )
          }
        />

        {/* DASHBOARD route (protected) */}
        <Route
          path="/dashboard"
          element={
            user ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* CODESPACE route (protected) */}
        <Route
          path="/codespace"
          element={
            user ? (
              <Codespace onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* CHATBOT route */}
        <Route path="/chatbot" element={<Chatbot onClose={() => {}} />} />

        {/* LOGIN route */}
        <Route
          path="/login"
          element={
            !user ? (
              <Login switchToSignup={() => setShowLogin(false)} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* SIGNUP route */}
        <Route
          path="/signup"
          element={
            !user ? (
              <Signup switchToLogin={() => setShowLogin(true)} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
