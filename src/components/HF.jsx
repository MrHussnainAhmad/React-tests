import React from "react";
import styles from "./HF.module.css";

function Hf({ Time, dayname }) {
  return (
    <center className={styles.Hf}>
      <p>
        Current Time is : <b>{Time.toLocaleTimeString()}</b>
      </p>
      <p>
        Current Date is : <b>{Time.toLocaleDateString()}</b>
      </p>
    </center>
  );
}

export default Hf;
