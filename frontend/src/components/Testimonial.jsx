import testimonialStyle from './styling/Testimonial.module.css'
import { FaUserCircle } from 'react-icons/fa';

import {TestimonData} from './TestimonData.jsx';

function Testimonial() {
  return (
    <section className={testimonialStyle.testimonials}>
      {/* Title */}
      <h2 className={testimonialStyle.title}>What Our Users Say</h2>

      {/* Inspiring message */}
      <p className={testimonialStyle.inspiration}>
        Empowering teachers and students to achieve more together.
      </p>

      {/* Testimonials container */}
      <div className={testimonialStyle.testimonialsContainer}>
        {TestimonData.map((testimonial) => (
          <div key={testimonial.id} className={testimonialStyle.card}>
            {/* Profile icon */}
            <FaUserCircle className={testimonialStyle.profileIcon} />

            {/* Name */}
            <h3 className={testimonialStyle.name}>{testimonial.name}</h3>

            {/* Testimonial */}
            <p className={testimonialStyle.text}>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;