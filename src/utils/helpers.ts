import { Job, JobAllocations } from "../common/types";
import dayjs from "dayjs";

/**
 * Transger jobAllocations to the Job array.
 * @param {Job} jobs jobs array.
 * @param {JobAllocations} jobAllocations jobAllocations array.
 * @return {Array} The transfered jobs array
 */
export const mapAllocationToJob = (
  jobs: Job[],
  jobAllocations: JobAllocations[]
) => {
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

/**
 * Print out the date
 * @param {string} start start date string.
 * @param {string} end end date string.
 * @return {objcet} The sum of the two parameters.
 */

export const printDate = (start: string, end: string) => {
  // check if start is same date to end
  const startObj = dayjs(start);
  const endObj = dayjs(end);
  const isSameDate: boolean = !startObj.diff(end, "day");
  if (isSameDate) {
    return {
      date: startObj.format("ddd MMM D YYYY"),
      time: `${startObj.hour()} - ${endObj.hour()}`,
    };
  } 
  return {
    date: `${startObj.format("ddd MMM D YYYY")} - ${endObj.format("ddd MMM D YYYY")}`,
    time: ''
  }
};
