import React, { useState } from "react";
import axios from "axios";
import "./SignInForm.css";

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');

    try {
      // Make a POST request to the login API
      const response = await axios.post('http://localhost:3000/api/users/login', { email, password });

      // If successful, store the token in localStorage
      localStorage.setItem('authToken', response.data.token);

      // Redirect to the dashboard or home page
      window.location.href = '/dashboard'; 
    } catch (err) {
      // Handle authentication error
      setError(err.response ? err.response.data.error : 'Login failed due to server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-in-form">
      <h2>Sign In</h2>
      <p>Enter your email and password to sign in!</p>
      <div className="separator">
        <span>or</span>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Email*</label>
        <input
          type="email"
          placeholder="mail@yourmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password*</label>
        <input
          type="password"
          placeholder="Min. 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="options">
          <label>
            <input type="checkbox" /> Keep me logged in
          </label>
          <a href="/forgot-password">Forgot password?</a>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <p className="not-registered">
        <span className="not-registered-text">Not registered yet? </span>
        <a href="/register" className="create-account-link">Create an Account</a>
      </p>
    </div>
  );
}

export default SignInForm;