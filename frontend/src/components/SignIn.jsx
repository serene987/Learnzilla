import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styling/SignIn.module.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/dashboard'); // Redirect after successful login
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.signInContainer}>
        <form onSubmit={handleSubmit} className={styles.signInForm}>
          <h2>Sign In</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.submitButton}>
            Sign In
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <button onClick={() => navigate(-1)} className={styles.goBack}>Go Back</button>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()} Learnzilla. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
