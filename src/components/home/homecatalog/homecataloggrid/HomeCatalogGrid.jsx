import { useContext, forwardRef } from "react";
import { motion } from "framer-motion";
import { HomeContext } from "../../Home";
import { Link } from "react-router-dom";
import HomeCatalogGridItem from "./HomeCatalogGridItem";
import "./homecataloggird.sass";

const HomeCatalogGrid = forwardRef(({ props }, ref) => {
  const { categories } = useContext(HomeContext);

  return (
    <div ref={ref} className="catalog-grid">
      {categories.map((item) => (
        <Link key={item._id} to="/catalog" className="catalog-grid-link">
          <HomeCatalogGridItem key={item.id} categoryItem={item} />
        </Link>
      ))}
    </div>
  );
});

export const MHomeCatalogGrid = motion(HomeCatalogGrid);
