import { useContext, useState } from "react";
import { CatalogContext } from "../Catalog";
import FilterText from "./FilterText";
import FilterResetButton from "./FilterResetButton";
import FilterItemParent from "./FilterItemParent";
import "./filtercontainer.sass";

const FilterContainer = () => {
  const { categories } = useContext(CatalogContext);

  const categoriesSorted = [...categories].sort((a, b) => {
    return a.position - b.position || a.name.localeCompare(b.name);
  });

  const [filterReset, setFilterReset] = useState(false);

  const handleSetFilterReset = () => {
    if (!filterReset) {
      setFilterReset(true);
    } else return;
  };

  const handleUnsetFilterReset = () => {
    if (filterReset) {
      setFilterReset(false);
    } else return;
  };

  return (
    <div className="filter-container">
      <FilterText />
      <div className="filter-list">
        <FilterResetButton handleSetFilterReset={handleSetFilterReset} />
        <ul className="filter-list-parent">
          {categoriesSorted.map((item) => (
            <FilterItemParent
              key={item._id}
              categoryItem={item}
              handleUnsetFilterReset={handleUnsetFilterReset}
              filterReset={filterReset}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterContainer;
