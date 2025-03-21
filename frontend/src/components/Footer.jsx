import footerStyle from './styling/Footer.module.css'

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.footerContainer}>
        <div className={footerStyle.column}>
          <h3>About Us</h3>
          <p>Your platform for learning and growth. Delivering high-quality content since 2025.</p>
        </div>
        <div className={footerStyle.column}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className={footerStyle.column}>
          <h3>Follow Us</h3>
          <div className={footerStyle.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Insta</a>
          </div>
        </div>
      </div>
      <div className={footerStyle.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Learnzilla. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
