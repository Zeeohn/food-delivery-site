import styles from "../styles/Loader.module.css";
import Image from "next/image";

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/images/infinity-spinner.svg"
          alt="Spinner"
          width={191}
          height={100}
        />
      </div>
      <div className={styles.text}>Loading...</div>
    </div>
  );
};

export default Loader;
