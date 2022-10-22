import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/images/telephone.png"
            alt="call icon"
            width="32"
            height="32"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>+234 817 312 7706</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <Image
            src="/images/logo.png"
            alt="Crown Shawarma Logo"
            width="200"
            height="53"
            className={styles.logo}
          />
          <li className={styles.listItem}>
            <Link href="/#menus">
              <a>Menus</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image
            src="/images/cart.png"
            alt="Cart Icon"
            width="30px"
            height="30px"
          />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;