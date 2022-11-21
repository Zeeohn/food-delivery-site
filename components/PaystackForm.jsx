import styles from "../styles/PaystackForm.module.css";
import { useState } from "react";
import PaystackPayment from "./Paystack";
import axios from "axios";
import { useSelector } from "react-redux";

const PaystackForm = ({ amount }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const cart = useSelector((state) => state.cart);
  const products = cart.products;

  const createOrder = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/api/orders", {
        customer,
        address,
        phone,
        email,
        method: 1,
        total: cart.total,
        items: products.map((product) => ({
          productId: product._id,
          productName: product.title,
          price: product.price,
          qtn: +product.quantity,
          extras: product.extras.map((extra) => ({
            text: extra.text,
            price: extra.price,
          })),
        })),
      });
      setOrderId(data._id);
      setShowPayment(true);
    } catch (err) {
      console.log(err);
    }
  };

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
        {showPayment ? (
          <PaystackPayment
            email={email}
            orderId={orderId}
            amount={amount * 100}
            onComplete={() => console.log("Order completed")}
          />
        ) : (
          <button className={styles.button} onClick={createOrder}>
            Save Order
          </button>
        )}
      </div>
    </div>
  );
};

export default PaystackForm;
