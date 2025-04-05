import { useContext } from "react";
import { LocaleContext } from "../../../localeprovider/LocaleProvider";
import { ua_hometitletextdata } from "./ua_hometitletextdata";
import { ru_hometitletextdata } from "./ru_hometitletextdata";
import { motion } from "framer-motion";
import "./titletext.sass";

const TitleText = () => {
  const { localeName, primaryLocale } = useContext(LocaleContext);

  const textData =
    localeName === primaryLocale ? ua_hometitletextdata : ru_hometitletextdata;

  const textVariants = {
    hidden: { x: -1000, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.5 + i, duration: 1 },
    }),
  };
  return (
    <div className="title-text">
      <motion.h3
        variants={textVariants}
        initial={"hidden"}
        animate={"visible"}
        custom={0.25}
        className="title-text-name"
      >
        {textData.title}
      </motion.h3>
      <motion.p
        variants={textVariants}
        initial={"hidden"}
        animate={"visible"}
        custom={0.5}
        className="title-text-content"
      >
        {textData.text}
      </motion.p>
    </div>
  );
};

export default TitleText;
