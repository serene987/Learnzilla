import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import registerStyles from './styling/Register.module.css';

export default function Register() {
  // State to handle form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState(''); // State to store role (Student/Teacher)

  const navigate = useNavigate(); // Hook to handle navigation
  const location = useLocation(); // Hook to get role data from SignIn page

  // Get the role (Student/Teacher) from SignIn using location.state
  useEffect(() => {
    if (location.state?.role) {
      setRole(location.state.role);
    }
  }, [location.state]); // Only runs when location.state changes

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation check
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Role:', role);

    // Redirect based on role
    if (role === 'Student') {
      navigate('/student-dashboard'); // Redirect to student dashboard
    } else if (role === 'Teacher') {
      navigate('/teacher-dashboard'); // Redirect to teacher dashboard
    } else {
      console.error('Invalid role'); // Handle unexpected roles
    }
  };

  return (
    <div className={registerStyles.registerContainer}>
      <div className={registerStyles.registerCard}>
        {/* Dynamic heading based on role — removed fallback to 'User' */}
        {role && (
          <h2 className={registerStyles.title}>
            Register as {role}
          </h2>
          )
        }
        
        <form onSubmit={handleSubmit} className={registerStyles.form}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={registerStyles.input}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={registerStyles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={registerStyles.input}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={registerStyles.input}
            required
          />
          <button type="submit" className={registerStyles.submitBtn}>
            Register
          </button>
        </form>

        {/* Link back to Sign In */}
        <p className={registerStyles.signInLink}>
          Already have an account?{' '}
          <a href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
}
