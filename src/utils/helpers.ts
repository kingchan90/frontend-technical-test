import {
  Activity,
  ActivityAllocations,
  Job,
  JobAllocations,
  Resource,
} from "../common/types";
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
    date: `${startObj.format("ddd MMM D YYYY")} - ${endObj.format(
      "ddd MMM D YYYY"
    )}`,
    time: "",
  };
};

/**
 * Transform data
 * @return {array} The transformed data
 */
export const transformData = (
  jobs: Job[],
  resources: Resource[],
  activities: Activity[],
  jobAllocations: JobAllocations[],
  activityAllocations: ActivityAllocations[]
) => {
  //convert jobs and activities array to object
  const jobsObject = convertArrayToObject(jobs, "id", 'job');
  const activitiesObject = convertArrayToObject(activities, "id", "activity");
  const mappedJobAllocation = mapAllocationToResouces(jobAllocations, jobsObject, 'jobId');
  const mappedActivityAllocations = mapAllocationToResouces(activityAllocations, activitiesObject, 'activityId');
  return resources.map(({ id: resourceId, name: resourceName }) => { 
    return {
      resourceName,
      resourceId,
      allocations: [
        mappedActivityAllocations[resourceId],
        mappedJobAllocation[resourceId],
      ].filter(obj=>obj)
    };
  });
};

/**
 * Convert array to object by key
 * @return {object} The converted object
 */
const convertArrayToObject = (
  array: any[],
  key: string,
  allocType?: any
) => {
  return array.reduce((acc, curr) => {
    const {name, start, end } = curr
    acc[curr[key]] = {allocType, name, start, end, };
    return acc;
  }, {});
};

/**
 * Transform data from jobs, activities to locations
 * @return {object} The converted object
 */
const mapAllocationToResouces = (allocation: any, arrayData: any, key: string) => {
  return allocation.reduce(
    (obj: any, item: any) => ({
      ...obj,
      [item["resourceId"]]: arrayData[item[key]]
    }),
    {}
  );
}