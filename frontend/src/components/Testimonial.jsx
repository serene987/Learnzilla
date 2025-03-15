import testimonialStyle from './styling/Testimonial.module.css'

import {TestimonData} from './TestimonData.jsx';

function Testimonial() {
 
  return (
    <section className={testimonialStyle.testimonials}>
      <div className={testimonialStyle.testimonialContainer}>
        <h2 className={testimonialStyle.title}>What Our Learners Say</h2>
      </div>
      <div className={testimonialStyle.testimonialContainer}>
        <p className={testimonialStyle.subtitle}>
          Hear from students who have streamlined their learning with us.
        </p>
      </div>
        <div className={testimonialStyle.testimonialGrid}>
          {TestimonData.map((TestimonData) => (
            <div key={TestimonData.id} className={testimonialStyle.testimonialCard}>
              <img src={TestimonData.image} alt={TestimonData.name} className={testimonialStyle.avatar} />
              <p className={testimonialStyle.quote}>“{TestimonData.quote}”</p>
              <div className={testimonialStyle.author}>
                <span className={testimonialStyle.name}>{TestimonData.name}</span>
                <span className={testimonialStyle.role}>{TestimonData.role}</span>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
  export default Testimonial;