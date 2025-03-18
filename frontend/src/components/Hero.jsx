import heroStyles from './styling/Hero.module.css';

import bgImg1 from '../assets/images/bgImg1.jpg';
import bgImg2 from '../assets/images/bgImg2.jpg';
import bgImg3 from '../assets/images/bgImg3.jpg';

function Hero() {
  return (
    <section className={heroStyles.hero}>
      {/* Background slideshow */}
      <div className={heroStyles.slideshow}>
        <div className={heroStyles.slide} style={{ backgroundImage: `url(${bgImg1})` }}></div>
        <div className={heroStyles.slide} style={{ backgroundImage: `url(${bgImg2})` }}></div>
        <div className={heroStyles.slide} style={{ backgroundImage: `url(${bgImg3})` }}></div>
      </div>

      {/* Dark overlay */}
      <div className={heroStyles.heroOverlay}></div>

      <div className={heroStyles.heroContainer}>
        <div className={heroStyles.heroContent}>
          <h1>Empower Your Learning Journey with Ease</h1>
          <p>
            Streamline your courses, track progress, and enhance learning efficiency — all in one place.
          </p>
          <div className={heroStyles.ctaButtons}>
            <button className={heroStyles.primaryBtn}>Get Started</button>
            <button className={heroStyles.secondaryBtn}>Learn More</button>
          </div>
        </div>
        <div className={heroStyles.heroImage}>
          {/* Use direct import for the hero image */}
          <img src={bgImg3} alt="Learning Illustration" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
