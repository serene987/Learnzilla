import styles from "./index.css";

export default function Introduction() {
  return (
    <section className={styles.introSection}>
      <div className={styles.container}>
        <h1>Welcome to Learnzilla</h1>
        <p>Your one-stop platform for interactive learning and growth.</p>
        <button className={styles.exploreBtn}>Explore Courses</button>
      </div>
    </section>
  );
}
