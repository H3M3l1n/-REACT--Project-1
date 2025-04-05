import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JobListItemList = ({ data, titleIcon, titleText }) => {
  if (data.length !== 0) {
    return (
      <ul className="item-list">
        <li className="item-list-title">
          <FontAwesomeIcon icon={titleIcon} /> {titleText}
        </li>
        {data.map((item, index) => (
          <li key={index} className="item-list-entry">
            <FontAwesomeIcon icon={faChevronRight} /> {item}
          </li>
        ))}
      </ul>
    );
  } else return <></>;
};

export default JobListItemList;
