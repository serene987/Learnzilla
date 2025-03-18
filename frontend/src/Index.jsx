import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Achievements from './components/Achievements.jsx' 
import Offers from './components/Offers.jsx';
import Testimonial from './components/Testimonial.jsx';
import Footer from './components/Footer.jsx';

// import * as AiIcons from 'react-icons/ai';
export default function Index(){

    return(
        <>
            {/* Pass darkMode and toggleDarkMode as props */}
            <Navbar/>
            <Hero/>
            <Achievements/>
            <Offers/>
            <Testimonial/>
            <Footer/>
        </>
    );
}
