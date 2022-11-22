import styles from "../styles/AddProduct.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { axios } from "axios";

const AddProduct = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [alt, setAlt] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [prices, setPrices] = useState(null);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extras, setExtras] = useState(null);

  const handleExtraInput = (e) => {
    setExtras({ ...extras, [e.target.name]: e.target.value });
  };

  const handleExtra = (e) => {
    setExtraOptions((prev) => [...prev, extra]);
  };

  const handleCreate = async () => {};

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Add a new Product</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            accept="image/*"
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Image Alt Text</label>
          <input
            type="text"
            className={styles.input}
            onChange={(e) => setAlt(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Product Title</label>
          <input
            type="text"
            className={styles.input}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Product Description</label>
          <textarea
            type="text"
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Price(₦)</label>
          <input
            type="number"
            className={styles.input}
            onChange={(e) => setPrices(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Extras</label>
          <div className={styles.extra}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="text"
              placeholder="Coke"
              name="text"
              onChange={handleExtraInput}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="150"
              name="price"
              onChange={handleExtraInput}
            />
            <button className={styles.extraButton} onClick={handleExtra}>
              Add
            </button>
          </div>
          <div className={styles.extraItems}>
            {extraOptions?.map((option) => (
              <span key={option.text} className={styles.extraItem}>
                {option.text}
              </span>
            ))}
          </div>
        </div>
        <button className={styles.addButton} onClick={handleCreate}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
