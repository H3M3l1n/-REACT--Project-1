import { useContext } from "react";
import { LocaleContext } from "../../localeprovider/LocaleProvider";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ua_homeinfodata } from "./ua_homeinfodata";
import { ru_homeinfodata } from "./ru_homeinfodata";
import "./homeinfo.sass";

const HomeInfo = () => {
  const { localeName, primaryLocale } = useContext(LocaleContext);

  const localeData =
    localeName === primaryLocale ? ua_homeinfodata : ru_homeinfodata;

  const textNameVariants = {
    hidden: { y: -150 },
    visible: { y: 0 },
  };

  const gridItemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 5, ease: [0, 0.55, 0.45, 1] },
    },
  };

  const gridItemContentVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <motion.section
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ amount: 0.4, once: true }}
      className="home-section home-info"
    >
      <div className="home-info-wrapper">
        <motion.div
          variants={textNameVariants}
          transition={{ type: "tween", duration: 0.5 }}
          className="info-text"
        >
          <h1 className="info-text-name">{localeData.title}</h1>
        </motion.div>
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ amount: 0.5, once: true }}
          className="info-grid"
        >
          {localeData.items.map((item) => (
            <motion.div
              variants={gridItemVariants}
              key={item.id}
              className="info-grid-item"
            >
              <motion.div
                variants={gridItemContentVariants}
                custom={item.id}
                className="item-icon"
              >
                <FontAwesomeIcon icon={item.icon} className="grid-fa-icon" />
              </motion.div>
              <motion.div
                variants={gridItemContentVariants}
                custom={item.id}
                className="item-text-container"
              >
                <p className="item-text">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeInfo;
