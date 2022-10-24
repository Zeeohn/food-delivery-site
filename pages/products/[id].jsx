import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { ProductItems, extras } from "./../../data/ProductItems";
import { useState } from "react";

const Product = () => {
  const [price, setPrice] = useState(0);
  const addPrice = (e) => {
    const el = e.target;
    if (el.checked) {
      setPrice((prev) => prev + Number(el.dataset.price));
    } else {
      setPrice((prev) => prev - Number(el.dataset.price));
    }
  };
  
  return (
    <>
      {ProductItems.map((item) => (
        <div className={styles.container} key={item.id}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image
                src={item.img}
                layout="fill"
                objectFit="fill"
                objectPosition="center"
                alt={item.alt}
                style={{ borderRadius: "50%" }}
              />
            </div>
          </div>
          <div className={styles.right}>
            <h1 className={styles.title}>{item.titles}</h1>
            <span className={styles.price}>₦{item.prices[0]}</span>
            <p className={styles.description}>{item.description}</p>
            <h3 className={styles.choose}>Extras: </h3>
            <div className={styles.drinks}>
              {extras.map((items) => (
                <div className={styles.option} key={items.id}>
                  <input
                    type="checkbox"
                    id={items.id}
                    name={items.name}
                    data-price={items.price}
                    onChange={addPrice}
                    className={styles.checkbox}
                  />
                  <label htmlFor={items.id}>{items.title}</label>
                </div>
              ))}
            </div>
            <div className={styles.add}>
              <input
                type="number"
                defaultValue={1}
                className={styles.quantity}
              />
              <button className={styles.button}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
