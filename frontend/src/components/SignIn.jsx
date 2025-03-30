import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import signInStyles from './styling/SignIn.module.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add authentication logic here
    navigate('/dashboard'); // Redirect after successful login
  };

  return (
    <div className={signInStyles.signInContainer}>
      <form onSubmit={handleSubmit} className={signInStyles.signInForm}>
        <h2>Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={signInStyles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={signInStyles.input}
          required
        />
        <button type="submit" className={signInStyles.submitButton} >
          Sign In
        </button>
        <p className={signInStyles.registerLink}>
          No account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
    // if signin as student and teacher resp is successful re-direct to the resp dashboards 
  );
}
