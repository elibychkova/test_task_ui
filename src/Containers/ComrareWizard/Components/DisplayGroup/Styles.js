import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faThLarge } from '@fortawesome/free-solid-svg-icons';

export const StyledBars = styled(FontAwesomeIcon).attrs({
  icon: faBars,
})`
  color: #7e7e7e;
  font-size: 35px;
  cursor: pointer;
  font-weight: 500 !important;
  margin: 0 8px;
`;

export const StyledGrid = styled(FontAwesomeIcon).attrs({
  icon: faThLarge,
})`
  color: #7e7e7e;
  font-size: 35px;
  cursor: pointer;
  font-weight: 500 !important;
  margin: 0 8px;
`;
