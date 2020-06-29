import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const StyledStepButton = styled.button`
  width: 30%;
  height: 100%;
  background: none;
  display: inline-block;
  outline: 0;
  border: none;
  margin: 20px; 

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: #FFE600;
    transition: width .3s;
    margin-top: 20px;
  }

  &:hover {
    &::after {
    width: 100%;
  }
`;

export const LabelContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  color: #393939;
`;

export const Circle = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #ffe600;
  margin: 0 30px;
`;

export const StyledActionButton = styled.button`
  height: 45px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5%;
  background: #ffe600;
  text-transform: uppercase;

  outline: 0;
  border: none;

  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;

  color: #393939;
`;

export const StyledSearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 307px;
  height: 42px;
  border: 1px solid #C9C9C9;
  box-sizing: border-box;
  border-radius: 6px; 
`;

export const StyledIcon = styled(FontAwesomeIcon).attrs({
  icon: faSearch
})`
  font-size: 12px;
  cursor: pointer;
  font-weight: 500 !important;
  margin: 0 8px;
`;

export const StyledInput = styled.input`
  border: none;
  min-width: 50px;
  width: 100%;
  font-size: 12px;
  outline:none;
  color: ${({ color }) => color};
  &::placeholder {
    color: ${({ color }) => color};
  }
`;