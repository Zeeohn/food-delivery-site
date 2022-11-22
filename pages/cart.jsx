import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { reset } from "../redux/cartSlice";
import OrderDetails from "./../components/OrderDetails";
import PaystackForm from "./../components/PaystackForm";
import PaystackPayment from "../components/Paystack";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const products = cart.products;
  const [open, setOpen] = useState(false);
  const [cashPayment, setCashPayment] = useState(false);
  const [cardPayment, setCardPayment] = useState(false);
  const amount = cart.total;
  const dispatch = useDispatch();
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", {
        ...data,
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
      res.status === 201 && router.push("/orders/" + res.data._id);
      dispatch(reset());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.map((product) => (
              <tr className={styles.tr} key={product._id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                </td>
                <td className={styles.nameAlign}>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td className={styles.pad}>
                  <span className={styles.extras}>
                    {product.extras.map((extra) => (
                      <span key={extra._id}>
                        {extra.text} - ₦{extra.price};{" "}
                      </span>
                    ))}
                  </span>
                </td>
                <td className={styles.pad}>
                  <span className={styles.price}>₦{product.prices}</span>
                </td>
                <td className={styles.pad}>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td className={styles.pad}>
                  <span className={styles.total}>
                    ₦{product.prices * product.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal: </b>₦{cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount: </b>₦0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total: </b>₦{cart.total}
          </div>
          {open ? (
            <div className={styles.paymentMethods}>
              <button
                className={styles.payButton}
                onClick={() => setCashPayment(true)}
              >
                CASH ON DELIVERY
              </button>
              <button
                className={styles.payButton}
                onClick={() => setCardPayment((prev) => true)}
              >
                PAY ONLINE
              </button>
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.button}>
              CHECKOUT
            </button>
          )}
        </div>
      </div>
      {cashPayment && (
        <OrderDetails total={cart.total} createOrder={createOrder} />
      )}
      {cardPayment && <PaystackForm amount={cart.total} />}
    </div>
  );
};

export default Cart;
