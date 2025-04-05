import { useContext } from "react";
import { CatalogContext } from "../Catalog";
import "./listhead.sass";

const ListHead = () => {
  const { localeData } = useContext(CatalogContext);
  return (
    <thead className="list-head">
      <tr className="list-head-row">
        <th className="list-head-column column-name">
          {localeData.cataloglist.listhead.name}
        </th>
        <th className="list-head-column column-price">
          {localeData.cataloglist.listhead.price}
        </th>
      </tr>
    </thead>
  );
};

export default ListHead;
