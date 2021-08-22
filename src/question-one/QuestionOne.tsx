import React, {useEffect, useState, useReducer, useCallback} from "react"
import reducer, {initialState} from '../store/reducer';
import {
  FetchInit,
  FetchFailure,
  FetchSuccess,
  ClearJob
} from '../store/actions';
import { IAppTabContainer } from "../common/types"

import { SectionGroup } from "../components/section/SectionGroup"
import { SectionPanel } from "../components/section/SectionPanel"
import SearchInput from "../components/SearchInput";
import SearchResult from "../components/SearchResult";
import LoadingInline from "../components/LoadingInline";

import "./QuestionOne.scss";

import {DEFAULT_ERROR_TEXT} from '../constants'

export const QuestionOne: React.FC<IAppTabContainer> = ({service}) => {
  const [{isLoading, isError, jobs}, dispatch] = useReducer(reducer, initialState);
  const [searchStr, setSearchStr] = useState('');
  const handleSetSearchStr = useCallback( (value) => setSearchStr(value), []);
  useEffect(() => {
    if(searchStr.length > 2) {
      getData();
    } else {
      dispatch(ClearJob());
    }
  }, [searchStr]);
  const getData = async () => {
    try {
      dispatch(FetchInit());
      const res = await service.getJobsWithSearchTerm(searchStr);
      setTimeout(function() {
        dispatch(FetchSuccess(res));
      }, 400)
    } catch(err) {
      dispatch(FetchFailure());
    }
    
  }
  return (
    <SectionGroup>
      <SectionPanel>
        <div className="search-title">Search Product</div>
        <SearchInput onSearch={handleSetSearchStr}/>
        {isError && 
        <div className="error-text">{DEFAULT_ERROR_TEXT}</div>}
        {isLoading && <LoadingInline/>}
        <SearchResult jobs={jobs} />
      </SectionPanel>
    </SectionGroup>
  )
}
