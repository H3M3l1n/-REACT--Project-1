import ListBodyRow from "./ListBodyRow";

const ListBody = ({ itemsData }) => {
  return (
    <tbody className="list-body">
      {itemsData.map((item) => (
        <ListBodyRow key={item._id} {...item} />
      ))}
    </tbody>
  );
};

export default ListBody;
