import styles from "../styles/TrackButton.module.css";

const TrackButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      Track Order
    </div>
  );
};

export default TrackButton;
