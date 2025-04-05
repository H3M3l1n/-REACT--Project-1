import { useState } from "react";
import FilterContainer from "./FilterContainer";
import FilterSwitcher from "./FilterSwitcher";
import "./catalogfilter.sass";

const CatalogFilter = () => {
  const [catalogFilterActive, setCatalogFilterActive] = useState(false);

  const handleSwitchCatalogFilter = () => {
    setCatalogFilterActive(!catalogFilterActive);
  };

  return (
    <div
      className={`catalog-filter ${
        catalogFilterActive ? "catalog-filter-active" : ""
      }`}
    >
      <FilterContainer />
      <FilterSwitcher
        catalogFilterActive={catalogFilterActive}
        handleSwitchCatalogFilter={handleSwitchCatalogFilter}
      />
    </div>
  );
};

export default CatalogFilter;
