import { Link, useMatch } from "react-router-dom";
import { motion } from "framer-motion";

const CustomLink = ({ children, to, handler }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

  const navLinkVariants = {
    inactive: {
      backgroundColor: "transparent",
      textDecoration: "unset",
      textDecorationColor: "#0081c2",
    },
    active: {
      backgroundColor: "#0081c2",
      cursor: "default",
    },
    hover: { textDecoration: "underline", textDecorationColor: "#0081c2" },
  };

  return (
    <Link to={to} className="nav-link" onClick={handler}>
      <motion.span
        className="nav-link-span"
        variants={navLinkVariants}
        initial={"inactive"}
        animate={match ? "active" : "inactive"}
        whileHover={"hover"}
      >
        {children}
      </motion.span>
    </Link>
  );
};

export default CustomLink;
