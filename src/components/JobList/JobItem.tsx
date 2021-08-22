import React from "react";

interface JobItemProps {
  name: String,
  id: Number,
  location: String,
  locations_count: Number
}
const JobItem:React.FC<JobItemProps> = (props: JobItemProps) => {
  const { id, name, location, locations_count } = props;
  return (
    <div className="job-item">
      <div className="title text-bold">{name} <span className="id">{`(Job #${id})`}</span></div>
      <div className="location">{location}</div>
      <div className="date">Sat Sep 01 2018</div>
      <div className="text-bold">20:00 - 20:15</div>
      {locations_count && <div className="rounding text-blue location-count">
        {locations_count}
      </div>}
    </div>
  )
}

export default JobItem;