import React from 'react';
import { StyledBars, StyledGrid } from './Styles';

export const DisplayGroup = ({getDisplayType}) => {

  const handleDisplay = (ev) => {
    console.log('ev.target.name :>> ', ev.target.name);
    // getDisplayType(ev.target.id);
  };


  return (
    <>
      <StyledGrid name={'grid'} onClick={handleDisplay} />
      <StyledBars name={'row'} onClick={handleDisplay} />
    </>
  );
};

export default DisplayGroup;
