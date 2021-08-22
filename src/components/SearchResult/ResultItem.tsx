import React from "react";

interface SearchResultItemProps {
  job: any;
}
const ResultItem: React.FC<SearchResultItemProps> = (props: SearchResultItemProps) => {
  const { job: { name = '', start = '', end = '', contact = '' } } = props;
  const { name: contactName = '' } = contact

  return (
    <div className="search-result-item">
      <div className="title">{name}</div>
      <div>{contactName}</div>
      <div>{start} - {end}</div>
    </div>
  )

}

export default ResultItem;