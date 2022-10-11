import styles from "../styles/ProductCard.module.css";
import Image from "next/image";
import { ProductItems } from "./ProductItems";

const ProductCard = () => {
  return (
    <>
      {ProductItems.map((item, i) => (
        <div className={styles.container} key={i}>
          <div className={styles.imgContainer}>
            <Image
              src={item.img}
              alt={item.alt}
              width="500"
              height="500"
              className={styles.image}
            />
          </div>
          <h1 className={styles.title}>{item.titles}</h1>
          <span className={styles.price}>{item.prices}</span>
          <p className={styles.description}>{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
