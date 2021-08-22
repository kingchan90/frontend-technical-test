import {
  Job,
  JobAllocations
} from "../common/types";

export const mapAllocationToJob = (jobs: Job[], jobAllocations: JobAllocations[]) => {
  return jobs.map((job) => {
    const { id: JobId } = job;
    return {
      ...job,
      //filter the jobAllocation by the job id
      // then return the number of jobAllocation item
      locations_count: jobAllocations.filter(
        (location) => location.jobId === JobId
      ).length,
    };
  });
};
