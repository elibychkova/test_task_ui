import React from 'react';
import { StyledIcon, IconContainer } from './Styles';
import { faBars, faThLarge } from '@fortawesome/free-solid-svg-icons';

export const DisplayGroup = ({ getDisplayType }) => {
  const handleDisplay = (ev) => {
    getDisplayType(ev.target.id);
  };

  return (
    <>
      <IconContainer onClick={handleDisplay} id="grid">
        <StyledIcon icon={faThLarge} />
      </IconContainer>
      <IconContainer onClick={handleDisplay} id="row">
        <StyledIcon icon={faBars} />
      </IconContainer>
    </>
  );
};

export default DisplayGroup;
