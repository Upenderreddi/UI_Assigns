import React from 'react';

function Login() {
  const handleLogin = () => {
    alert('Login simulated!');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
