import React from "react";

import './module.scss';

interface SearchInputProps {
  onSearch: any;
}
const SearchInput: React.FC<SearchInputProps> = (props: SearchInputProps) => {
  const { onSearch } = props;
  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onSearch(event.target.value);
  };
  return (
    <div className="search-wrapper">
      <input type="text" className="search-input" placeholder="Search..." onChange={onChangeInput} />
    </div>
  )

}

export default SearchInput;