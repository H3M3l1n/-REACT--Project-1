import { useContext } from "react";
import { LocaleContext } from "../../../localeprovider/LocaleProvider";
import { ua_hometitleformdata } from "./ua_hometitleformdata";
import { ru_hometitleformdata } from "./ru_hometitleformdata";
import { motion } from "framer-motion";
import FormSchedule from "./FormSchedule";
import FromText from "./FormText";
import FormMain from "./FormMain";
import "./titleform.sass";

const TitleForm = () => {
  const { localeName, primaryLocale } = useContext(LocaleContext);

  const workTime = "09:00 - 17:00";

  const localeData =
    localeName === primaryLocale ? ua_hometitleformdata : ru_hometitleformdata;

  const isMoblieDevice = window.innerWidth <= 768;

  let formVariants = {};
  if (!isMoblieDevice) {
    formVariants = {
      hidden: { y: 1000, opacity: 0 },
      visible: {
        y: 0, opacity: 1,
        transition: { delay: 1.7, duration: 1, ease: [0.33, 1, 0.68, 1] },
      },
    };
  }

  return (
    <motion.div
      variants={formVariants}
      initial={"hidden"}
      animate={"visible"}
      className="title-form"
    >
      <FormSchedule locale={localeData.formSchedule} time={workTime} />
      <FromText locale={localeData.formText} />
      <FormMain locale={localeData.formMain} />
    </motion.div>
  );
};

export default TitleForm;
