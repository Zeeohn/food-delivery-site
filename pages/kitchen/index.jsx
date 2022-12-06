import styles from "../../styles/Kitchen.module.css";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import AddButton from "./../../components/AddButton";
import AddProduct from "./../../components/AddProduct";
import api from "../../config/api";

const index = ({ orders, products }) => {
  const [productList, setProductList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const [close, setClose] = useState(true);

  const status = ["preparing", "On the way", "Delivered"];

  const handleDelete = async (id) => {
    try {
      const res = await api.delete(
        `/products/${id}`
      );
      setProductList(productList.filter((food) => food._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await api.patch(`/orders/${id}`, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        {!close && <AddProduct setClose={setClose} />}
        <AddButton setClose={setClose} />
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
          {productList.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trBody}>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt={product.alt}
                  />
                </td>
                <td title={String(product._id)}>
                  {product._id.slice(0, 5)}...
                </td>
                <td>{product.title}</td>
                <td>₦{product.prices}</td>
                <td>
                  <button className={styles.addButton}>Edit</button>
                  <button
                    className={styles.buttonDelete}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {orderList.map((order) => (
            <tbody key={order._id}>
              <tr className={styles.trBody}>
                <td title={String(order._id)}>{order._id.slice(0, 5)}...</td>
                <td>
                  <span>Name:</span> {order.customer} <br />
                  <span>Phone:</span> {order.phone} <br />
                  <span>Address:</span> {order.address} <br />
                </td>
                <td>₦{order.total}</td>
                <td>
                  {order.method === 0 ? (
                    <span>cash on delivery</span>
                  ) : (
                    <span>Paid</span>
                  )}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button
                    className={styles.addButton}
                    onClick={() => handleStatus(order._id)}
                  >
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/kitchen/login",
        permanent: false,
      },
    };
  }

  const productRes = await api.get("/products");
  const orderRes = await api.get("/orders");

  return {
    props: {
      products: productRes.data,
      orders: orderRes.data,
    },
  };
};

export default index;
