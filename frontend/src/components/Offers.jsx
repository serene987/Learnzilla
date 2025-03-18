import { FaChalkboardTeacher, FaUserGraduate, FaUsersCog } from 'react-icons/fa';
import OfferStyle from './styling/Offers.module.css';
import { OffersData } from './OffersData';
import { useState } from 'react';
import {motion, AnimatePresence } from 'framer-motion';



function Offers() {
    const [activeOffer, setActiveOffer] = useState(null);
  
    // Toggle function for showing/hiding details
    const handleToggle = (offer) => {
      if (activeOffer?.id === offer.id) {
        setActiveOffer(null); // Hide if clicked again
      } else {
        setActiveOffer(offer); // Show new details
      }
    };
  
    return (
      <section className={OfferStyle.offers}>
        {/* Left Side - Cards */}
        <div className={OfferStyle.container}>
          <div className={OfferStyle.cards}>
            {OffersData.map((offer) => (
              <motion.div
                key={offer.id}
                className={`${OfferStyle.card} ${
                  activeOffer?.id === offer.id ? OfferStyle.active : ''
                }`}
                onClick={() => handleToggle(offer)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>{offer.title}</h3>
              </motion.div>
            ))}
          </div>
  
          {/* Right Side - Details Card */}
          <AnimatePresence>
            {activeOffer && (
              <motion.div
                key={activeOffer.id}
                className={OfferStyle.details}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <img
                  src={activeOffer.image}
                  alt={activeOffer.title}
                  className={OfferStyle.image}
                />
                <h2>{activeOffer.title}</h2>
                <p>{activeOffer.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    );
  }
  
  export default Offers;