import React from "react";
import styles from "./AboutCard.module.css";
function AboutCard({ src, title, content }) {
  return (
    <div className={styles.aboutCard}>
      <img src={src} alt="MP Telecom logo" />
      <div>{title}</div>
      <div className={styles.aboutCardContent}>{content}</div>
    </div>
  );
}

export default AboutCard;
