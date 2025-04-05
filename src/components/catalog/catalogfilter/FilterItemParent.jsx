import { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CatalogContext } from "../Catalog";
import FilterItemChild from "./FIlterItemChild";
import "./filteritemparent.sass";

const FilterItemParent = ({
  categoryItem,
  handleUnsetFilterReset,
  filterReset,
}) => {
  const { subCategories, handleSetCategory, activeCategoryId } =
    useContext(CatalogContext);

  const [activeParentFilter, setActiveParentFilter] = useState(false);

  const toggleParentFilter = () => {
    setActiveParentFilter(!activeParentFilter);
  };

  const handleOnClickParent = () => {
    handleUnsetFilterReset();
    handleSetCategory(categoryItem._id);
    toggleParentFilter();
  };

  useEffect(() => {
    if (activeParentFilter && filterReset) {
      setActiveParentFilter(false);
    } else return;
  }, [activeParentFilter, filterReset]);

  const fliterListChildVariants = {
    hidden: { height: 0 },
    visible: { height: "auto" },
  };

  return (
    <li className="filter-item-parent">
      <button
        className={`filter-button filter-button-parent ${
          categoryItem._id === activeCategoryId ? "filter-button-active" : ""
        }`}
        onClick={handleOnClickParent}
      >
        {categoryItem.name}
      </button>
      <motion.ul
        className={"filter-list-child"}
        variants={fliterListChildVariants}
        initial={"hidden"}
        animate={activeParentFilter ? "visible" : "hidden"}
      >
        {subCategories
          .filter((item) => item.categoryId._id === categoryItem._id)
          .map((item) => (
            <FilterItemChild key={item._id} subCategoryItem={item} />
          ))}
      </motion.ul>
    </li>
  );
};

export default FilterItemParent;
