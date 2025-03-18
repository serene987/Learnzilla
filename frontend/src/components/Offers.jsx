import { FaChalkboardTeacher, FaUserGraduate, FaUsersCog } from 'react-icons/fa';
import OfferStyle from './styling/Offers.module.css';
import { OffersData } from './OffersData';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';



function Offers() {
    const [activeOffer, setActiveOffer] = useState(OffersData[0]);
    const [showCards, setShowCards] = useState(false);
  
    return (
      <section className={OfferStyle.offers}>
        {/* Background Overlay */}
        <div className={OfferStyle.overlay}>
          {/* Button to show offers */}
          {!showCards && (
            <motion.button
              className={OfferStyle.showButton}
              onClick={() => setShowCards(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Show Offers
            </motion.button>
          )}
  
          {/* Left Side - Cards */}
          <AnimatePresence>
            {showCards && (
              <motion.div
                className={OfferStyle.container}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div className={OfferStyle.cards}>
                  {OffersData.map((offer) => (
                    <motion.div
                      key={offer.id}
                      className={`${OfferStyle.card} ${
                        offer.id === activeOffer.id ? OfferStyle.active : ''
                      }`}
                      onClick={() => setActiveOffer(offer)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <h3>{offer.title}</h3>
                    </motion.div>
                  ))}
                </div>
  
                {/* Right Side - Slideshow */}
                <motion.div
                  key={activeOffer.id}
                  className={OfferStyle.slideshow}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <img src={activeOffer.image} alt={activeOffer.title} />
                  <h2>{activeOffer.title}</h2>
                  <p>{activeOffer.description}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    );
  }
  
  export default Offers;