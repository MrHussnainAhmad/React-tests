import React from "react";
import "./HF2.module.css";
import img from "../assets/dua.webp";
import styles from './HF2.module.css';

function DisplayHF() {
  return (
    <>
      <center>
        <img src={img} alt="Dua" />
      </center>
      <div className={`container text-center ${styles.customDiv}`}>
        <div className="row align-items-center">
          <div className={`col ${styles.customCol} `}>
            <figure>
              <blockquote className="blockquote">
                <p>Beware of suspicion for it is the most untruthful type of speech.</p>
              </blockquote>
              <figcaption className={`blockquote-footer ${styles.customCaption} `}>
                Famous in <cite title="Source Title">Bukhari & Muslim</cite>
              </figcaption>
            </figure>
          </div>
          <div className={`col ${styles.customCol} `}>
            <figure>
              <blockquote className="blockquote">
                <p>The fire is surrounded by [unlawful] desires and paradise by difficulties.</p>
              </blockquote>
              <figcaption className={`blockquote-footer ${styles.customCaption} `}>
                Famous in <cite title="Source Title">Bukhari & Muslim</cite>
              </figcaption>
            </figure>
          </div>
          <div className={`col ${styles.customCol} `}>
            <figure>
              <blockquote className="blockquote">
                <p>Whatever of the lower garment falls below the ankles is in the fire.</p>
              </blockquote>
              <figcaption className={`blockquote-footer ${styles.customCaption} `}>
                Famous in <cite title="Source Title">Bukhari</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayHF;
