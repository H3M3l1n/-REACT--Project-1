import React, { createContext, useState, useEffect } from "react";

const LocaleContext = createContext();

const LocaleProvider = ({ children }) => {
  const primaryLocale = "UA";
  const secondaryLocale = "RU";

  const getLocaleData = () => {
    const storedLocale = localStorage.getItem("locale");
    return storedLocale || primaryLocale;
  };

  const [localeName, setLocaleName] = useState(getLocaleData());

  useEffect(() => {
    if (localeName !== null) {
      localStorage.setItem("locale", localeName);
    }
  }, [localeName]);

  return (
    <LocaleContext.Provider
      value={{ localeName, setLocaleName, primaryLocale, secondaryLocale }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export { LocaleContext, LocaleProvider };
