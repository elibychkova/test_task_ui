import React from 'react';
import { StyledSearchBar, StyledIcon, StyledInput } from './Styles';

export const SearchBar = ({ onChange, value, color, onKeyPress }) => {
  return (
    <StyledSearchBar>
      <StyledIcon color={color} />
      <StyledInput
        color={color}
        placeholder="Search"
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
