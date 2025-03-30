import footerStyle from './styling/Footer.module.css'

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Learnzilla. All Rights Reserved.</p>
        <h3><a href="/signin" className={footerStyle.signInLink}>Sign In</a></h3>
      </div>
    </footer>
  );
};

export default Footer;
