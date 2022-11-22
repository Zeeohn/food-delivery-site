import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.logo}>
            <Image
              src="/images/logo.png"
              layout="fill"
              objectFit="contain"
              alt="Crown shawarma logo"
            />
          </div>
          <h3 className={styles.text}>
            Yes, our treats are irresistible and mouth-watering 🤤
          </h3>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>LOCATE US</h1>
          <p className={styles.text}>
            DeCaptains Lounge, FHA-ENL Paradise
            <br /> Hill Estate, Guzape, Abuja.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
              paddingBottom: "5px",
            }}
          >
            <div className={styles.callButton}>
              <Image
                src="/images/telephone.png"
                alt="call icon"
                width="32"
                height="32"
              />
            </div>
            <span>
              <a href="tel: +2348173127706" style={{ color: "white" }}>
                +234 817 312 7706
              </a>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <div className={styles.callButton}>
              <Image
                src="/images/telephone.png"
                alt="call icon"
                width="32"
                height="32"
              />
            </div>
            <span>
              <a href="tel: +2348032519487" style={{ color: "white" }}>
                +234 803 251 9487
              </a>
            </span>
          </div>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>HOURS AVAILABLE</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 10:00am - 09:00pm
          </p>
          <p className={styles.text}>
            SATURDAY & SUNDAY
            <br /> 12:00pm - 09:00pm
          </p>
        </div>
      </div>
      <div className={styles.dev}>
        Powered<span>💪</span> by&nbsp;
        <a
          href="https://wa.me/message/ACG6T4NMBL2EE1"
          target="_blank"
          rel="noreferrer"
        >
          <span
            style={{
              color: "#d1411e",
              textDecoration: "underline",
              fontWeight: "500",
            }}
          >
            Z-CODES
          </span>
        </a>
        . All rights reserved @ {new Date().getFullYear()}.
      </div>
    </>
  );
};

export default Footer;
