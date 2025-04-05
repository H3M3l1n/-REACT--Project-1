import { useContext } from "react";
import { LocaleContext } from "../../../localeprovider/LocaleProvider";
import { HomeContext } from "../../Home";
import { ua_hometitledownloadbuttontextdata } from "./ua_hometitledownloadbuttontextdata";
import { ru_hometitledownloadbuttontextdata } from "./ru_hometitledownloadbuttontextdata";
import { motion } from "framer-motion";
import "./titledownloadbutton.sass";

const TitleDownloadButton = () => {
  const { localeName, primaryLocale } = useContext(LocaleContext);
  const { linkData } = useContext(HomeContext);

  const priceLinkName = "PRICE_LINK";
  const priceLink = linkData.filter((item) => item.name === priceLinkName)[0];

  const localeData =
    localeName === primaryLocale
      ? ua_hometitledownloadbuttontextdata
      : ru_hometitledownloadbuttontextdata;

  const isMoblieDevice = window.innerWidth <= 768;

  let buttonVariants = {};
  if (!isMoblieDevice) {
    buttonVariants = {
      hidden: { x: 1000, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 1.7, duration: 1, ease: [0.33, 1, 0.68, 1] },
      },
    };
  }

  return (
    <motion.div
      variants={buttonVariants}
      initial={"hidden"}
      animate={"visible"}
      className="title-button-container"
    >
      <a href={priceLink.link} download>
        <button className="title-download-button">
          {localeData.buttonText}
        </button>
      </a>
    </motion.div>
  );
};

export default TitleDownloadButton;
