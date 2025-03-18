import { FaAward, FaUniversity, FaStar } from 'react-icons/fa';
import achievementsStyles from './styling/Achievements.module.css';
import { achievementsData } from './AchievementData';


export default function Achievements() {
  return (
    <section className={achievementsStyles.achievements}>
      <h2 className={achievementsStyles.title}>Our Achievements</h2>
      <div className={achievementsStyles.cardContainer}>
        {achievementsData.map((achievement, index) => (
          <div key={index} className={achievementsStyles.card}>
            <div className={achievementsStyles.icon}>{achievement.icon}</div>
            <div className={achievementsStyles.number}>{achievement.number}</div>
            <div className={achievementsStyles.description}>{achievement.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
