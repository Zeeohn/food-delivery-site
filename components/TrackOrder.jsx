import styles from "../styles/TrackOrder.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const TrackOrder = ({ setClose }) => {
  const [orderId, setOrderId] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    if (orderId) {
      router.push(`/orders/${orderId}`);
      setClose(true);
    } else {
      toast.error("Invalid order ID");
      router.push("/");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Enter your Order ID</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.item}>
            <label className={styles.label}>
              Order ID
              <sup style={{ color: "red", fontWeight: "bold" }}>*</sup>
            </label>
            <input
              type="text"
              placeholder="e.g 636a654cd82e0deff88e4167
              "
              required
              className={styles.input}
              onChange={(e) => setOrderId(e.target.value)}
            />
          </div>
          <input type="submit" value="Track" className={styles.submit} />
        </form>
      </div>
    </div>
  );
};

export default TrackOrder;
