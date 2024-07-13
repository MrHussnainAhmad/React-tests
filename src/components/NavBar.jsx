import { FaTimes, FaBars } from "react-icons/fa";
import "./Nav.module.css";
import { useRef } from "react";
import styles from './Nav.module.css'

function NavBar() {
  const navbarRef = useRef();
  const showNavBar = () => {
    navbarRef.current.classList.toggle("responsiveNav");
  };
  return (
    <header>
      <h1 className={styles.customH1}>ISLAM</h1>
      <nav ref={navbarRef}>
        <a href="https://quran.com/">The Quran</a>
        <a href="https://sunnah.com/">The Sunnah</a>
        <a href="">The Prophet</a>
        <a href="">The Mehdi</a>
        {/* <button onClick={showNavBar} className={`${styles.navBtns} navCloseBtn`}>
          <FaTimes />
        </button> */}
      </nav>
      <button className={styles.Donate}>
          Donate Us
        </button>
      {/* <button onClick={showNavBar} className={styles.navBtns}>
        <FaBars />
      </button> */}
    </header>
  );
}

export default NavBar;
