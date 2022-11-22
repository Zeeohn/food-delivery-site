import styles from "../styles/OrderDetails.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const OrderDetails = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    createOrder({ customer, phone, address, total, method: 0 });
    toast.success("Copy your order ID to track your order!");
  };

  return (
    <div className={styles.container}>
      <Toaster toastOptions={{ duration: 5000 }} />
      <form onSubmit={handleClick}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>You will pay ₦1,000 for delivery!</h1>
          <div className={styles.item}>
            <label className={styles.label}>
              Full Name
              <sup style={{ color: "red", fontWeight: "bold" }}>*</sup>
            </label>
            <input
              placeholder="e.g David Adebayo"
              type="text"
              className={styles.input}
              required
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>
              Phone<sup style={{ color: "red", fontWeight: "bold" }}>*</sup>
            </label>
            <input
              placeholder="e.g 08122479317"
              type="tel"
              minLength="11"
              maxLength="11"
              required
              className={styles.input}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>
              Address<sup style={{ color: "red", fontWeight: "bold" }}>*</sup>
            </label>
            <textarea
              placeholder="e.g No. 10, Nnamdi Azikiwe Street, Garki 2"
              type="text"
              required
              className={styles.input}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Complete Order"
            className={styles.button}
          />
        </div>
      </form>
    </div>
  );
};

export default OrderDetails;
