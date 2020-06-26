import React from 'react';
import { StyledActionButton } from './Styles';

export const ActionButton = ({  label }) => {
  return (
    <StyledActionButton>
        {label}
    </StyledActionButton>
  );
};

export default ActionButton;
