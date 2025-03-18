import { FaChalkboardTeacher, FaUserGraduate, FaUsersCog } from 'react-icons/fa';
import OfferStyle from './styling/Offers.module.css';
import { OffersData } from './OffersData';
import { useState } from 'react';
import {motion, AnimatePresence } from 'framer-motion';


function Offers() {

    const [activeOffer, setActiveOffer] = useState(null);
  
    const handleToggle = (offer) => {
      if (activeOffer?.id === offer.id) {
        setActiveOffer(null); // Close the detail card if it's already open
      } else {
        setActiveOffer(offer); // Open the selected detail card
      }
    };
  
    return (
      <section className={OfferStyle.offersSection}>
        {/* Left Side - SVG */}
        <div className={OfferStyle.leftSide}>
          <img src="/public/images/offer4.png" alt="background" />
        </div>
  
        {/* Right Side - Cards and Details */}
        <div className={OfferStyle.rightSide}>
          {/* Cards */}
          <motion.div
            className={`${OfferStyle.cardsContainer} ${activeOffer ? OfferStyle.cardsShift : ''}`}
            initial={{ y: 0 }}
            animate={{ y: activeOffer ? -100 : 0 }} // Move up when a card is clicked
            transition={{ type: 'spring', stiffness: 100 }}
          >
            {OffersData.map((offer) => (
              <motion.div
                key={offer.id}
                className={`${OfferStyle.card} ${activeOffer?.id === offer.id ? OfferStyle.activeCard : ''}`}
                onClick={() => handleToggle(offer)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {offer.icon}
                <h3>{offer.title}</h3>
              </motion.div>
            ))}
          </motion.div>
  
          {/* Details - Fade In/Out */}
          <AnimatePresence>
            {activeOffer && (
              <motion.div
                className={OfferStyle.detailsCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
              >
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