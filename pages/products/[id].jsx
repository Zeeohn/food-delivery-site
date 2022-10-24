import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { ProductItems } from "./../../data/ProductItems";

const Product = () => {
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
              <div className={styles.option}>
                <input
                  type="checkbox"
                  id="coke"
                  name="coke"
                  className={styles.checkbox}
                />
                <label htmlFor="coke">Coke</label>
              </div>
              <div className={styles.option}>
                <input
                  type="checkbox"
                  id="pepsi"
                  name="pepsi"
                  className={styles.checkbox}
                />
                <label htmlFor="pepsi">Pepsi</label>
              </div>
              <div className={styles.option}>
                <input
                  type="checkbox"
                  id="fanta"
                  name="fanta"
                  className={styles.checkbox}
                />
                <label htmlFor="fanta">Fanta</label>
              </div>
              <div className={styles.option}>
                <input
                  type="checkbox"
                  id="sprite"
                  name="sprite"
                  className={styles.checkbox}
                />
                <label htmlFor="sprite">Sprite</label>
              </div>
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
