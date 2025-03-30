import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OfferStyle from './styling/Offers.module.css';
import { OffersData } from './OffersData';

function Offers() {
    const [activeOffer, setActiveOffer] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Update isMobile state on window resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggle = (offer) => {
        if (activeOffer?.id === offer.id) {
            setActiveOffer(null);
        } else {
            setActiveOffer(offer);
        }
    };

    return (
        <section className={OfferStyle.offersSection}>
            {/* Left Side - Image Always Visible */}
            <div className={OfferStyle.leftSide}>
                <img src="/images/offer4.png" alt="background" />
            </div>

            {/* Right Side - Cards */}
            <div className={OfferStyle.rightSide}>
                <motion.div 
                    className={OfferStyle.cardsContainer}
                    initial={{ y: 0 }}
                    animate={{ y: activeOffer && !isMobile ? -100 : 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                    {OffersData.map((offer) => (
                        <div key={offer.id} className={OfferStyle.cardWrapper}>
                            <motion.div
                                className={`${OfferStyle.card} ${activeOffer?.id === offer.id ? OfferStyle.activeCard : ''}`}
                                onClick={() => handleToggle(offer)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {offer.icon}
                                <h3>{offer.title}</h3>
                            </motion.div>

                            {/* 📌 Mobile: Show details directly under clicked card */}
                            {isMobile && activeOffer?.id === offer.id && (
                                <motion.div
                                    className={OfferStyle.detailsCardMobile}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2>{activeOffer.title}</h2>
                                    <p>{activeOffer.description}</p>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* 📌 Desktop: Details still appear below all cards */}
                <AnimatePresence>
                    {!isMobile && activeOffer && (
                        <motion.div
                            className={OfferStyle.detailsCardDesktop}
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
