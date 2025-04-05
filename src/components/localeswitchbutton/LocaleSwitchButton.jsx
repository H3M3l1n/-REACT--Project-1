import { useContext } from "react";
import { LocaleContext } from "../localeprovider/LocaleProvider";
import "./localeswitchbutton.sass";

const LocaleSwitchButton = () => {
  const { localeName, setLocaleName, primaryLocale, secondaryLocale } =
    useContext(LocaleContext);

  const handleSwitchLocale = () => {
    setLocaleName(
      localeName === primaryLocale ? secondaryLocale : primaryLocale
    );
  };

  return (
    <button
      id="locale-switch-button"
      className="locale-switch-button"
      onClick={handleSwitchLocale}
    >
      {localeName === primaryLocale ? secondaryLocale : primaryLocale}
    </button>
  );
};

export default LocaleSwitchButton;
