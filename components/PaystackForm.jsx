import styles from "../styles/PaystackForm.module.css";
import { useState } from "react";

const PaystackForm = ({ amount }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {};

  return (
    <div className={styles.container}>
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
            required
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>
            Email<sup style={{ color: "red", fontWeight: "bold" }}>*</sup>
          </label>
          <input
            placeholder="e.g example@example.com"
            type="email"
            required
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>
            Phone<sup style={{ color: "red", fontWeight: "bold" }}>*</sup>
          </label>
          <input
            placeholder="e.g 08122479317"
            type="tel"
            minlength="11"
            maxlength="11"
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
        <button className={styles.button} onClick={handleClick}>
          Complete Order
        </button>
      </div>
    </div>
  );
};

export default PaystackForm;
