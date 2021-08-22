import React from "react";

import ResultItem from './ResultItem';

import './module.scss';

interface SearchResultProps {
  jobs: any[];
}
const SearchResult: React.FC<SearchResultProps> = (props: SearchResultProps) => {
  const { jobs } = props;

  return (
    <div className="search-result">
      {
        jobs && jobs.map(job => <ResultItem job={job} />)
      }
    </div>
  )

}

export default SearchResult;