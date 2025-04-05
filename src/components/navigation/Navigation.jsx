import { useContext } from "react";
import { LocaleContext } from "../localeprovider/LocaleProvider";
import { motion } from "framer-motion";
import { ua_navigationdata } from "./ua_navigationdata";
import { ru_navigationdata } from "./ru_navigationdata";
import CustomLink from "../customlink/CustomLink";
import LocaleSwitchButton from "../localeswitchbutton/LocaleSwitchButton";
import "./navigation.sass";

const Navigation = () => {
  const { localeName, primaryLocale } = useContext(LocaleContext);

  const itemsData =
    localeName === primaryLocale
      ? ua_navigationdata.items
      : ru_navigationdata.items;

  const isMoblieDevice = window.innerWidth <= 768;

  let navVariants = {};
  if (!isMoblieDevice) {
    navVariants = {
      hidden: { y: -250 },
      visible: { y: 0, transition: { duration: 1 } },
    };
  }

  return (
    <motion.nav
      variants={navVariants}
      initial={"hidden"}
      animate={"visible"}
      id="nav"
      className="nav"
    >
      {itemsData.map((item) => (
        <CustomLink key={item.id} to={item.path}>
          {item.name}
        </CustomLink>
      ))}
      <LocaleSwitchButton />
    </motion.nav>
  );
};

export default Navigation;
