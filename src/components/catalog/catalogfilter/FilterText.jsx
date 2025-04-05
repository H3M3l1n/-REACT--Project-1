import { useContext } from "react";
import { CatalogContext } from "../Catalog";
import "./filtertext.sass";

const FilterText = () => {
  const { localeData } = useContext(CatalogContext);

  return (
    <div className="filter-text">
      <h2 className="filter-text-name">{localeData.catalogfilter.title}</h2>
    </div>
  );
};

export default FilterText;
