import styles from "../../styles/Kitchen.module.css";
import Image from "next/image";

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.trBody}>
              <td>
                <Image
                  src="/images/chicken-shawarma-0.jpg"
                  width={50}
                  height={50}
                  objectFit="cover"
                  alt="chicken shawarma"
                />
              </td>
              <td>FoodID</td>
              <td>Title</td>
              <td>Price</td>
              <td>FoodTitle</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.item}></div>
    </div>
  );
};

export default index;
