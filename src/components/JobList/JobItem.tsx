import React from "react";
import { printDate } from "../../utils/helpers";
interface JobItemProps {
  name: string,
  id: number,
  location: string,
  locations_count: number,
  start: string,
  end: string
}
const JobItem: React.FC<JobItemProps> = (props: JobItemProps) => {
  const { id, name, location, locations_count, start, end } = props;
  const dateObj = printDate(start, end);
  const { date, time } = dateObj;
  return (
    <div className="job-item">
      <div className="title text-bold">{name} <span className="id">{`(Job #${id})`}</span></div>
      <div className="location">{location}</div>
      <div className="date">{date}</div>
      {time ? <div className="text-bold">{time}</div> : <></>}
      {locations_count ? <div className="rounding text-blue location-count">
        {locations_count}
      </div> : <></>}
    </div>
  )
}

export default JobItem;