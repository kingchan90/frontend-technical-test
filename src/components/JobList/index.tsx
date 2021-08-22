import React, { useEffect, useState } from "react";
import JobItem from "./JobItem";
import { mapAllocationToJob } from '../../utils/helpers';
import Loading from '../Loading';

interface JobListProps {
  service: any;
}
const JobList: React.FC<JobListProps> = (props: JobListProps) => {
  const { service } = props;
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [jobError, setJobError] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await Promise.all([service.getJobs(), service.getJobAllocations()]);
        const [jobs, jobAllocations] = res;
        const transferDataJobs: any = mapAllocationToJob(jobs, jobAllocations);
        setJobs(transferDataJobs);
      } catch (err) {
        setJobError('Error fetching.')
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [service])

  return (
    <>
      <div className="job-list relative">
        {loading ? (
          <Loading/>
        ) : (<>
          {jobError && <div className="error-message">{jobError}</div>}
          {jobs && jobs.map((item: any) => (
            <JobItem key={item.id} {...item} />
          ))}
        </>
        )}

      </div>
    </>
  );
};

export default JobList;
