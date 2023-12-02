import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the login endpoint
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });

      // Extract the token from the response
      const token = response.data.token;

      // Store the token in localStorage (or secure cookie)
      localStorage.setItem('token', token);

      // Authentication successful
      alert('Login successful!');
    } catch (error) {
      // Authentication failed
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form id="intake-form" onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
