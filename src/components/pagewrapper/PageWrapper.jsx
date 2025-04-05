import React from "react";
import "./pagewrapper.sass";

const PageWrapper = ({ pageWrapperClassName, children }) => {
  return (
    <div
      className={`page-wrapper${
        pageWrapperClassName ? " " + pageWrapperClassName : ""
      }`}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
