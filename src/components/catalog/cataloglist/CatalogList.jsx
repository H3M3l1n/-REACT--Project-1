import { useContext } from "react";
import { CatalogContext } from "../Catalog";
import ListContainer from "./ListContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./cataloglist.sass";

const CatalogList = () => {
  const {
    localeData,
    categories,
    subCategories,
    items,
    activeCategoryId,
    activeSubCategoryId,
  } = useContext(CatalogContext);

  const categoryName = activeCategoryId
    ? categories.find((item) => item._id === activeCategoryId).name
    : localeData.cataloglist.categorynameall;

  const subCategoryName = activeSubCategoryId ? (
    <>
      <FontAwesomeIcon
        icon={faChevronRight}
        size="1x"
        className="list-text-icon"
      />
      {subCategories.find((item) => item._id === activeSubCategoryId).name}
    </>
  ) : (
    ""
  );

  const subCategoriesId = activeCategoryId
    ? subCategories
        .filter((item) => item.categoryId._id === activeCategoryId)
        .map((item) => item._id)
    : [];

  const itemsData =
    activeCategoryId && activeSubCategoryId
      ? items.filter((item) => item.subCategoryId._id === activeSubCategoryId)
      : activeCategoryId && !activeSubCategoryId
      ? items.filter((item) => subCategoriesId.includes(item.subCategoryId._id))
      : items;

  return (
    <div className="catalog-list">
      <div className="list-text">
        <h1 className="list-text-name">
          {categoryName}
          {subCategoryName}
        </h1>
      </div>
      <ListContainer itemsData={itemsData} />
    </div>
  );
};

export default CatalogList;
