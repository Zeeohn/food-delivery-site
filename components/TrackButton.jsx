import styles from "../styles/TrackButton.module.css";

const TrackButton = ({ setClose }) => {
  return (
    <div className={styles.container}>
      <div onClick={() => setClose(false)} className={styles.mainAddButton}>
        Track Your Order
      </div>
    </div>
  );
};

export default TrackButton;
