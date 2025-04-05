import ListBody from "./ListBody";
import ListHead from "./ListHead";
import "./listcontainer.sass";

const ListContainer = ({ itemsData }) => {
  return (
    <div className="list-container">
      <table className="list">
        <ListHead />
        <ListBody itemsData={itemsData} />
      </table>
    </div>
  );
};

export default ListContainer;
