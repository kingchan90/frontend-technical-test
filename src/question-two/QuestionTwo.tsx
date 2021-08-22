import React, { useEffect, useState } from "react"
import { IAppTabContainer } from "../common/types"

import { SectionGroup } from "../components/section/SectionGroup"
import { SectionPanel } from "../components/section/SectionPanel"

import {transformData} from "../utils/helpers"
interface ResourceSchedule {
  resourceName: string
  resourceId: number
  allocations: {
    allocType: 'job' | 'activity',
    name: string,
    start: string,
    end: string
  }[]
}

export const QuestionTwo: React.FC<IAppTabContainer> = ({ service }) => {
  const [jsonData, setJsonData] = useState<any>([]);
  useEffect(() => {
    getResourceSchedule();
  }, []);
  const getResourceSchedule = async () => {
    const [jobs, resources, activities, jobAllocations, activityAllocations] = await Promise.all([
      service.getJobs(),
      service.getResources(),
      service.getActivities(),
      service.getJobAllocations(),
      service.getActivityAllocations(),
    ])
    const transformedData = transformData(jobs, resources, activities, jobAllocations, activityAllocations)
    setJsonData(transformedData);
  }
  return (
    <SectionGroup>
      <SectionPanel>{JSON.stringify(jsonData)}</SectionPanel>
    </SectionGroup>
  )
}
