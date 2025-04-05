import { useContext } from "react";
import { LocaleContext } from "../localeprovider/LocaleProvider";
import { ua_messagesdata } from "./ua_messagesdata";
import { ru_messagesdata } from "./ru_messagesdata";
import "./error404.sass";

const Error404 = () => {
  const { localeName, primaryLocale } = useContext(LocaleContext);

  const localeData =
    localeName === primaryLocale ? ua_messagesdata : ru_messagesdata;

  return (
    <div className="error-404-page">
      <div className="error-404-page-wrapper">
        <img
          src="../img/error.png"
          alt="Sad face"
          className="error-404-page-image"
        />
        <div className="error-404-page-text">
          <h1 className="error-404-page-title">{localeData.error404}</h1>
        </div>
      </div>
    </div>
  );
};

export default Error404;
