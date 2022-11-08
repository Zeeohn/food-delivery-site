import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { ProductItems, extras } from "./../../data/ProductItems";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ foods }) => {
  const [price, setPrice] = useState(foods.prices);
  const [extra, setExtra] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtra((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtra(extra.filter((ext) => ext._id !== option._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...foods, extra, price, quantity }));
    toast.success("Product added to cart!");
  };

  return (
    <div className={styles.container}>
      <Toaster toastOptions={{ duration: 5000 }} />
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={foods.img}
            layout="fill"
            objectFit="fill"
            objectPosition="center"
            alt={foods.alt}
            style={{ borderRadius: "50%" }}
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{foods.title}</h1>
        <span className={styles.price}>₦{price}</span>
        <p className={styles.description}>{foods.description}</p>
        <h3 className={styles.choose}>Extras: </h3>

        <div className={styles.drinks}>
          {foods.extras.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                onChange={(e) => handleChange(e, option)}
                className={styles.checkbox}
              />
              <label htmlFor={option.text}>{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      foods: res.data,
    },
  };
};

export default Product;
