import { useState, useEffect } from "react";
import styles from "../styles/Scroll.module.css";
import { FaArrowCircleUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={styles.scroll}>
      {isVisible && (
        <div className='text-yellow-600' onClick={scrollToTop}>
          <FaArrowCircleUp />
        </div>
      )}
    </div>
  );
}
