import { useContext } from "react";
import { CatalogContext } from "../Catalog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./filterswitcher.sass";

const FilterSwitcher = ({ catalogFilterActive, handleSwitchCatalogFilter }) => {
  const { localeData } = useContext(CatalogContext);

  const filterSwitcherIconRotate = catalogFilterActive
    ? { transform: "rotate(180deg)" }
    : "";

  return (
    <div className="filter-switcher-container">
      <button className="filter-switcher" onClick={handleSwitchCatalogFilter}>
        <FontAwesomeIcon
          icon={faPlay}
          size="2x"
          className="filter-switcher-icon"
          style={filterSwitcherIconRotate}
        />
        <span className="filter-switcher-text">
          {localeData.catalogfilter.switchbuttonname}
        </span>
        <FontAwesomeIcon
          icon={faPlay}
          size="2x"
          className="filter-switcher-icon"
          style={filterSwitcherIconRotate}
        />
      </button>
    </div>
  );
};

export default FilterSwitcher;
