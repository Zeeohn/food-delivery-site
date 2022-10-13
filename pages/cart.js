import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/images/chicken-shawarma-0.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>
                  CHICKEN SHAWARMA WITHOUT SAUSAGE
                </span>
              </td>
              <td>
                <span className={styles.extras}>Coke</span>
              </td>
              <td>
                <span className={styles.price}>₦1500</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>₦3200</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal: </b>₦3200
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount: </b>₦0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total: </b>₦3200
          </div>
          <button className={styles.button}>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
