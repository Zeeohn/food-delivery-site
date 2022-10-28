import styles from "../styles/ProductCard.module.css";
import Image from "next/image";
import { ProductItems } from "../data/ProductItems";
import Link from "next/link";

const ProductCard = ({ foods }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={foods.img}
          alt={foods.alt}
          width="500"
          height="500"
          className={styles.image}
        />
      </div>
      <h1 className={styles.title}>{foods.title}</h1>
      <span className={styles.price}>₦{foods.prices}</span>
      <p className={styles.description}>{foods.description}</p>
      <Link href={`/products/${foods._id}`}>
        <a className={styles.view}>View</a>
      </Link>
    </div>
  );
};

export default ProductCard;
