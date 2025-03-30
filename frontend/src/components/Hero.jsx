import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroStyles from './styling/Hero.module.css';

// Array of slide images
const slides = [
  '/images/c1.jpeg',
  '/images/bgImg1.jpeg',
];

function Hero() {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  // State to track whether the slideshow is paused or not
  const [isPaused, setIsPaused] = useState(false);

  // Automatically switch slides every 3 seconds unless paused
  useEffect(() => {
    if (!isPaused) {
      const slideInterval = setInterval(() => {
        // Go to the next slide; loop back to the first slide if at the end
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000); // Change slide every 3 seconds

      // Cleanup the interval when the component unmounts or isPaused changes
      return () => clearInterval(slideInterval);
    }
  }, [isPaused]); // Dependency on isPaused ensures effect runs correctly

  return (
    <section 
    className={heroStyles.hero}
    onMouseEnter={() => setIsPaused(true)} // Pause slideshow on hover
    onMouseLeave={() => setIsPaused(false)} // Resume slideshow when mouse leaves
  >
    {/* Background Slide */}
    <AnimatePresence mode="wait">
      <motion.div
        key={currentSlide}
        className={heroStyles.heroBackground}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        style={{ backgroundImage: `url(${slides[currentSlide]})` }}
      />
    </AnimatePresence>

    {/* Semi-transparent overlay */}
    <div className={heroStyles.heroOverlay}></div>

    {/* Content over the slideshow */}
    <div className={heroStyles.heroContent}>
      <h1>Empower Your Learning Journey with Ease</h1>
      <p>
        Streamline your courses, track progress, and enhance learning efficiency — all in one place.
      </p>
    </div>
  </section>
  );
}

export default Hero;
