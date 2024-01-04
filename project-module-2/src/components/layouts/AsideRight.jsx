import React from "react";
import zalo from "../../assets/images/icons/zalo.png";
import styles from "../styles/AsideRight.module.css";
function AsideRight() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
      <img src={zalo} />
    </div>
    </div>
  );
}

export default AsideRight;
