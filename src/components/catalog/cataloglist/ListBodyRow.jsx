import "./listbodyrow.sass";

const ListBodyRow = ({ name, price }) => {
  return (
    <tr className="list-body-row">
      <th className="list-body-column column-name">{name}</th>
      <th className="list-body-column column-price">{price}</th>
    </tr>
  );
};

export default ListBodyRow;
