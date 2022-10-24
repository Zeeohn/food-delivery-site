import styles from "../styles/Scroll.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  
  const toggleVisible = () => {
    if (window.pageYOffset > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };  

    const scrollToTop = () => {
      if ( typeof window !== "undefined") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
    })};
    };
    
 useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={scrollToTop}
        className={styles.button}
        style={{ display: visible ? "inline-flex" : "none" }}
      >
        ^
      </button>
    </div>
  );
};

export default ScrollToTop;
