import styles from "../../styles/Order.module.css";
import Image from "next/image";
import axios from "axios";
import api from "../../config/api";

const Order = ({ order }) => {
  const status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tr}>
                <td className={styles.item}>
                  <span className={styles.id}>{order._id}</span>
                </td>
                <td className={styles.item}>
                  <span className={styles.name}>{order.customer}</span>
                </td>
                <td className={styles.item}>
                  <span className={styles.address}>{order.address}</span>
                </td>
                <td className={styles.item}>
                  <span className={styles.total}>₦{order.total}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image
              src="/images/paid.png"
              width={30}
              height={30}
              alt="Receipt Icon"
              className={styles.icons}
            />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/images/checked.png"
                width={20}
                height={20}
                alt="checked button"
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image
              src="/images/bake.png"
              width={30}
              height={30}
              alt="Baking Icon"
              className={styles.icons}
            />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/images/checked.png"
                width={20}
                height={20}
                alt="checked button"
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image
              src="/images/bike.png"
              width={30}
              height={30}
              alt="Bike Icon"
              className={styles.icons}
            />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/images/checked.png"
                width={20}
                height={20}
                alt="checked button"
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image
              src="/images/delivered.png"
              width={30}
              height={30}
              alt="Delivered Icon"
              className={styles.icons}
            />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/images/checked.png"
                width={20}
                height={20}
                alt="checked button"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal: </b>₦{order.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount: </b>₦0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total: </b>₦{order.total}
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await api.get(`/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default Order;
