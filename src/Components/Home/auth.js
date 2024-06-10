import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from './authSlice';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAuth, setShowAuth] = useState(true);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser({ username, password }));
  
    setShowAuth(false);
  };

  return (
    <div className="signin-container">
        <h2>Welcome to S Trades</h2>
        <h6>Login Here!</h6>
      <input className="signin-input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className="signin-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="signin-button" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Auth;
