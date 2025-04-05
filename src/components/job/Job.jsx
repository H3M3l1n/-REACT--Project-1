import { useGetJobDataQuery } from "../../store/apiSlice";
import Loading from "../messages/Loading";
import Error from "../messages/Error";
import PageWrapper from "../pagewrapper/PageWrapper";
import PageSection from "../pagesection/PageSection";
import JobList from "./JobList";
import "./job.sass";

const Job = () => {
  const {
    data: jobData,
    isLoading: jobLoading,
    isError: jobError,
    isSuccess: jobSuccess,
    error: jobErrorCode,
  } = useGetJobDataQuery();

  if (jobLoading) return <Loading />;
  if (jobError)
    return <Error errorCode={jobErrorCode ? jobErrorCode.status : ""} />;
  if (jobSuccess) {
    const filteredJobData = jobData.filter((item) => item.completed === false);

    return (
      <PageWrapper pageWrapperClassName={"job-wrapper"}>
        <PageSection
          pageSectionClassName={"job-section"}
          pageSectionWrapperClassName={"job-section-wrapper"}
        >
          <JobList jobsData={filteredJobData} />
        </PageSection>
      </PageWrapper>
    );
  }
};

export default Job;
