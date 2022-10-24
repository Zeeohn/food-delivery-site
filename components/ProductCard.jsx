import styles from "../styles/ProductCard.module.css";
import Image from "next/image";
import { ProductItems } from "../data/ProductItems";
import Link from "next/link";

const ProductCard = () => {
  return (
    <>
      {ProductItems.map((item, i) => (
        <div className={styles.container} key={item.id}>
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
          <span className={styles.price}>{item.prices[1]}</span>
          <p className={styles.description}>{item.description}</p>
          <Link href={`/products/${item.id}`}>
            <a className={styles.view}>View</a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
