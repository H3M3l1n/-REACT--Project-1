import { useContext } from "react";
import { CatalogContext } from "../Catalog";
import "./filteritemchild.sass";

const FilterItemChild = ({ subCategoryItem }) => {
  const { handleSetSubCategory, activeSubCategoryId } =
    useContext(CatalogContext);

  const handleOnClickChild = () => {
    handleSetSubCategory(subCategoryItem._id, subCategoryItem.categoryId._id);
  };

  return (
    <li className="filter-item-child">
      <button
        className={`filter-button filter-button-child ${
          subCategoryItem._id === activeSubCategoryId
            ? "filter-button-active"
            : ""
        }`}
        onClick={handleOnClickChild}
      >
        {subCategoryItem.name}
      </button>
    </li>
  );
};

export default FilterItemChild;
