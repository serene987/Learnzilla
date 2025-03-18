import { FaChalkboardTeacher, FaUserGraduate, FaUsersCog } from 'react-icons/fa';
import OfferStyle from './styling/Offers.module.css';

const Offers = () => {
  return (
    <section className={OfferStyle.offers}>
      <h2>What Our System Offers</h2>
      <p>Empowering Teachers, Students, and Administrators</p>
      <div className={OfferStyle.offerContainer}>
        {/* Teacher's Management */}
        <div className={OfferStyle.card}>
          <FaChalkboardTeacher className={OfferStyle.icon} />
          <h3>Teacher's Management</h3>
          <p>Upload lessons, assignments, and manage attendance easily.</p>
        </div>

        {/* Student's Dashboard */}
        <div className={OfferStyle.card}>
          <FaUserGraduate className={OfferStyle.icon} />
          <h3>Student's Dashboard</h3>
          <p>Track attendance, completed assignments, and progress.</p>
        </div>

        {/* HoD's Control */}
        <div className={OfferStyle.card}>
          <FaUsersCog className={OfferStyle.icon} />
          <h3>HoD's Control</h3>
          <p>Assign teachers to subjects and monitor department progress.</p>
        </div>
      </div>
    </section>
  );
};

export default Offers;
