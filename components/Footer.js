import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/images/logo.png" layout="fill" alt="Crown shawarma logo" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2>Yes, our treats are irresistible and mouth-watering 🤤</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>LOCATE US</h1>
          <p className={styles.text}>
            Plot 18, Ahmadu Bello Crescent,
            <br /> Garki, Abuja.
            <br /> +234 817 312 7706
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HOURS AVAILABLE</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 10:00am - 10:00pm
          </p>
          <p className={styles.text}>
            SATURDAY & SUNDAY
            <br /> 12:00pm - 11:00pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
