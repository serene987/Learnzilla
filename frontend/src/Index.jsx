import PropTypes from 'prop-types';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Testimonial from './components/Testimonial.jsx';
import Footer from './components/Footer.jsx';

// import * as AiIcons from 'react-icons/ai';
export default function Index({ darkMode, toggleDarkMode }){

    return(
        <>
        {/* Pass darkMode and toggleDarkMode as props */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero/>
        <Testimonial/>
        <Footer/>
        </>
    );
}

Index.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
  };