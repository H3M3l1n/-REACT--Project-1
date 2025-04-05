import { useContext } from "react";
import { CatalogContext } from "../Catalog";
import "./filterresetbutton.sass";

const FilterResetButton = ({ handleSetFilterReset }) => {
  const { localeData, handleResetCatalogSettings } = useContext(CatalogContext);
  const handleFilterResetButtonClick = () => {
    handleResetCatalogSettings();
    handleSetFilterReset();
  };

  return (
    <button
      className="filter-reset-button"
      onClick={handleFilterResetButtonClick}
    >
      {localeData.catalogfilter.resetbuttonname}
    </button>
  );
};

export default FilterResetButton;
