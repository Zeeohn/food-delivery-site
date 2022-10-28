import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = ({ productList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SHAWARMA AND BURGER PLACE</h1>
      <p className={styles.description}>
        Are you craving for a burger or shawarma? Place an order now! We use the
        finest and nutritious ingredients to prepare some of the hottest
        desserts 😋🔥🔥.
      </p>
      <div className={styles.wrapper} id="menus">
        {productList.map((foods) => (
          <ProductCard key={foods._id} foods={foods} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
