import {
  faSackDollar,
  faHandHolding,
  faHammer,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import JobListItemList from "./JobListItemList";
import "./joblistitem.sass";

const JobListItem = ({ jobData }) => {
  return (
    <div className="job-list-item">
      <h3 className="item-name">{jobData.name}</h3>
      <div className="item-lists">
        <JobListItemList
          data={jobData.salary}
          titleIcon={faSackDollar}
          titleText={"Оплата:"}
        />
        <JobListItemList
          data={jobData.offers}
          titleIcon={faHandHolding}
          titleText={"Ми пропонуємо:"}
        />
        <JobListItemList
          data={jobData.requirements}
          titleIcon={faHammer}
          titleText={"Ми вимагаємо:"}
        />
        <JobListItemList
          data={jobData.additional}
          titleIcon={faPlus}
          titleText={"Додатково:"}
        />
      </div>
    </div>
  );
};

export default JobListItem;
