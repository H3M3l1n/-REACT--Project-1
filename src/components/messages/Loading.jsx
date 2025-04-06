import { useContext } from "react";
import { LocaleContext } from "../localeprovider/LocaleProvider";
import { ua_messagesdata } from "./ua_messagesdata";
import { ru_messagesdata } from "./ru_messagesdata";
import "./loading.sass";

const Loading = () => {
  const { localeName, primaryLocale } = useContext(LocaleContext);

  const localeData =
    localeName === primaryLocale ? ua_messagesdata : ru_messagesdata;

  return (
    <div className="loading-page">
      <div className="loading-page-wrapper">
        <img
          src={`${process.env.PUBLIC_URL}/img/loading.png`}
          alt="Smile face"
          className="loading-page-image"
        />
        <div className="loading-page-text">
          <h1 className="loading-page-title">{localeData.loading}</h1>
          <div className="loading-page-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
