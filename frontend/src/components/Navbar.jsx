import { useNavigate } from 'react-router-dom';
import navbarStyle from './styling/Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={navbarStyle.navbar}>
      <nav className={navbarStyle.container}>
        {/* Logo */}
        <div className={navbarStyle.logo}>Learnzilla</div>

        {/* Sign In Button */}
        <button className={navbarStyle.navButton} onClick={() => navigate('/signin')}>
          Sign In
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
