import styles from "../styles/AddProduct.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

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
    setExtraOptions((prev) => [...prev, extras]);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "products");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/ddbtxfsfk/image/upload",
        data
      );
      console.log(uploadRes.data);
      const { url } = uploadRes.data;
      const newProduct = {
        alt,
        title,
        description,
        prices,
        extraOptions,
        extras,
        img: url,
      };
      await axios.post("http://localhost:3000/api/products", newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Add a new Product</h1>
        <form onSubmit={handleCreate}>
          <div className={styles.item}>
            <label className={styles.label}>
              Choose an image (max 100kb)
              <sup style={{ color: "red", fontWeight: "bold" }}>*</sup>
            </label>
            <input
              type="file"
              required
              onChange={(e) => setFile(e.target.files[0])}
              accept="image/*"
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>
              Image Description
              <sup style={{ color: "red", fontWeight: "bold" }}>*</sup>
            </label>
            <input
              type="text"
              required
              className={styles.input}
              onChange={(e) => setAlt(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>
              Product Title
              <sup style={{ color: "red", fontWeight: "bold" }}>*</sup>
            </label>
            <input
              type="text"
              required
              className={styles.input}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>
              Product Description
              <sup style={{ color: "red", fontWeight: "bold" }}>*</sup>
            </label>
            <textarea
              type="text"
              rows={4}
              required
              className={styles.textInput}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>
              Price(₦)<sup style={{ color: "red", fontWeight: "bold" }}>*</sup>
            </label>
            <input
              type="number"
              required
              className={styles.input}
              onChange={(e) => setPrices(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>
              Extras<sup style={{ color: "red", fontWeight: "bold" }}>*</sup>
            </label>
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
          <input type="submit" value="Submit" className={styles.addButton} />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
