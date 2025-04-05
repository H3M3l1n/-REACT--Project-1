import { useContext } from "react";
import { HomeContext } from "../../Home";
import "./homecataloggriditem.sass";

const HomeCatalogGridItem = ({ categoryItem }) => {
  const { handleSetCategory } = useContext(HomeContext);
  const altImage = "/img/alt_category_image.jpg";
  const imageURI =
    categoryItem.imageData && categoryItem.imageType
      ? `url(data:${categoryItem.imageType};base64,${categoryItem.imageData})`
      : `url(${altImage})`;

  const handleOnClickItem = () => {
    handleSetCategory(categoryItem._id);
  };

  return (
    <div
      className="catalog-item"
      style={{
        backgroundImage: imageURI,
      }}
      onClick={handleOnClickItem}
    >
      <div className="catalog-item-container">
        <h3 className="catalog-item-text">{categoryItem.name}</h3>
      </div>
    </div>
  );
};

export default HomeCatalogGridItem;
