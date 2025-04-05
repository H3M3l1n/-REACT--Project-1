import React from "react";
import "./pagesection.sass";

const PageSection = ({
  pageSectionClassName,
  pageSectionWrapperClassName,
  children,
}) => {
  return (
    <section
      className={`page-section${
        pageSectionClassName ? " " + pageSectionClassName : ""
      }`}
    >
      <div
        className={`page-section-wrapper${
          pageSectionWrapperClassName ? " " + pageSectionWrapperClassName : ""
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default PageSection;
