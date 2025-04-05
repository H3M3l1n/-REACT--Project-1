import { useContext } from "react";
import { LocaleContext } from "../../localeprovider/LocaleProvider";
import { ua_homecatalogdata } from "./ua_homecatalogdata";
import { ru_homecatalogdata } from "./ru_homecatalogdata";
import { motion } from "framer-motion";
import { MHomeCatalogGrid } from "./homecataloggrid/HomeCatalogGrid";
import "./homecatalog.sass";

const HomeCatalog = () => {
  const { localeName, primaryLocale } = useContext(LocaleContext);

  const localeData =
    localeName === primaryLocale ? ua_homecatalogdata : ru_homecatalogdata;

  const textNameVariants = {
    hidden: { y: -150 },
    visible: { y: 0 },
  };

  const gridVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <section className="home-section home-catalog">
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ amount: 0.3, once: true }}
        className="home-catalog-wrapper"
      >
        <div className="home-catalog-text">
          <motion.h2
            variants={textNameVariants}
            transition={{ type: "tween", duration: 0.5 }}
            className="catalog-text-name"
          >
            {localeData.title}
          </motion.h2>
        </div>
        <MHomeCatalogGrid variants={gridVariants} />
      </motion.div>
    </section>
  );
};

export default HomeCatalog;
