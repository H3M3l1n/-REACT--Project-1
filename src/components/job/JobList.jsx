import JobListItem from "./JobListItem";
import "./joblist.sass";

const JobList = ({ jobsData }) => {
  return (
    <div className="job-list-container">
      <div className="job-list-grid">
        {jobsData.map((item) => (
          <JobListItem key={item._id} jobData={item} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
