import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.App}>
      <section className={styles.Header}>
        <h1 className={styles.AppHeader2}>IslamIsTrueReligion - </h1>
        <h1 className={styles.AppHeader}>
          {" "}
          لَا إِلَٰهَ إِلَّا ٱللَّٰهُ مُحَمَّدٌ رَسُولُ ٱللَّٰهِ
        </h1>
      </section>
    </div>
  );
}

export default Header;
