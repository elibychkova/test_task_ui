import React from 'react';
import { StyledStepButton, LabelContainer, Circle } from './Styles';

export const StepButton = ({ step, label }) => {
  return (
    <StyledStepButton>
      <LabelContainer>
        <Circle>{step}</Circle>
        {label}
      </LabelContainer>
    </StyledStepButton>
  );
};

export default StepButton;
