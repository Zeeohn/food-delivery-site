import styles from "../styles/AddButton.module.css";

const AddButton = ({ setClose }) => {
  return (
  <div onClick={() => setClose(false)} className={styles.mainAddButton}>
    Add Product
  </div>
  );
};

export default AddButton;
