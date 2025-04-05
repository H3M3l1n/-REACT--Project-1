import { useContext } from "react";
import { LocaleContext } from "../../localeprovider/LocaleProvider";
import { motion } from "framer-motion";
import { ua_homeadditionaldata } from "./ua_homeadditionaldata";
import { ru_homeadditionaldata } from "./ru_homeadditionaldata";
import AnimatedNumber from "./AnimatedNumber";
import "./homeadditional.sass";

const HomeAdditional = () => {
  const { localeName, primaryLocale } = useContext(LocaleContext);

  const localeData =
    localeName === primaryLocale
      ? ua_homeadditionaldata
      : ru_homeadditionaldata;

  const textNameVariants = {
    hidden: { y: -150 },
    visible: { y: 0 },
  };

  const additionalItemVariants = {
    hidden: { y: 300 },
    visible: (i) => ({
      y: 0,
      transition: {
        delay: 0.35 * i - 0.35,
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  };

  return (
    <motion.section
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ amount: 0.8, once: true }}
      className="home-section home-additional"
    >
      <div className="home-additional-wrapper">
        <motion.div
          variants={textNameVariants}
          transition={{ type: "tween", duration: 0.5 }}
          className="additional-text"
        >
          <h2 className="additional-text-name">{localeData.title}</h2>
        </motion.div>
        <div className="additional-container">
          {localeData.items.map((item) => (
            <motion.div
              variants={additionalItemVariants}
              custom={item.id}
              key={item.id}
              className="additional-item"
            >
              <AnimatedNumber num={item.text} className={"item-name"} />
              <p className="item-text">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HomeAdditional;
