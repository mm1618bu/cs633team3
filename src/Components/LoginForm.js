// LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Replace these with your actual user data and authentication logic
    const fakeUser = {
      username: 'demoUser',
      password: 'password123',
    };
  
    if (username === fakeUser.username && password === fakeUser.password) {
      // Authentication successful
      alert('Login successful!'); // You can replace this with actual redirect logic
    } else {
      // Authentication failed
      alert('Invalid username or password. Please try again.');
    }
  };
  
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
