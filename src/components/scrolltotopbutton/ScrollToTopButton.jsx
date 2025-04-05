import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./scrolltotopbutton.sass";

const ScrollToTopButton = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 160) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <button
      id="button-scroll"
      className={`button-scroll ${isActive ? "button-scroll-visible" : ""}`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon
        icon={faChevronUp}
        size="2x"
        className="button-scroll-icon"
      />
    </button>
  );
};

export default ScrollToTopButton;
