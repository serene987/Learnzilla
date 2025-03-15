// import styles from './Root.module.css';
import heroStyles from './styling/Hero.module.css';

// Adjust path as needed
// import heroImage from '../assets/hero-image.png'; 

function Hero() {
  return (
    <section className={heroStyles.hero}>
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
          {/* <img src={heroImage} alt="Learning Illustration" /> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
