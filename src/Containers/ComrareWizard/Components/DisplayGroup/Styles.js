import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const IconContainer = styled.span`
  cursor: pointer;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: #7e7e7e;
  font-size: 35px;
  cursor: pointer;
  font-weight: 500 !important;
  margin: 0 8px;
  pointer-events: none;
`;
