import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroStyles from './styling/Hero.module.css';

// Array of slide images
const slides = [
  '/images/bgImg1.jpeg',
  '/images/bgImg2.jpeg',
  '/images/bgImg3.jpeg',
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
      {/* AnimatePresence handles mounting and unmounting animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide} // Key ensures each slide is treated as a unique element
          className={heroStyles.heroBackground}
          initial={{ opacity: 0, x: 50 }} // Initial state when slide appears
          animate={{ opacity: 1, x: 0 }} // Animate to this state
          exit={{ opacity: 0, x: -50 }} // Exit animation
          transition={{ duration: 0.7, ease: 'easeInOut' }} // Smooth transition effect
          style={{ backgroundImage: `url(${slides[currentSlide]})` }} // Load current slide as background
        />
      </AnimatePresence>

      {/* Content over the slideshow */}
      <div className={heroStyles.heroContent}>
        <h1>Empower Your Learning Journey with Ease</h1>
        <p>
          Streamline your courses, track progress, and enhance learning efficiency — all in one place.
        </p>

        {/* Call-to-action buttons */}
        <div className={heroStyles.ctaButtons}>
          <button className={heroStyles.primaryBtn}>Get Started</button>
          <button className={heroStyles.secondaryBtn}>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
