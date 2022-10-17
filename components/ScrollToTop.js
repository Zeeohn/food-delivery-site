import styles from "../styles/Scroll.module.css";
import Image from "next/image";
import { useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollToTop;

    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className={styles.button}
      style={{ display: visible ? "inline" : "none" }}
    >
      <span style={{ transform: "rotate(90deg)" }}>&gt;</span>
    </button>
  );
};

export default ScrollToTop;
