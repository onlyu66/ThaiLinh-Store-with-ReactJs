import React from "react";
import fb from "../../assets/images/icons/facebook.png";
import ins from "../../assets/images/icons/instagram.png";
import youtube from "../../assets/images/icons/play.png";
import tiktok from "../../assets/images/icons/tiktok.png";
import styles from "../styles/AsideLeft.module.css";
function AsideLeft() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <img src={fb} />
        <img src={youtube} />
        <img src={ins} />
        <img src={tiktok} />
      </div>
    </div>
  );
}

export default AsideLeft;
