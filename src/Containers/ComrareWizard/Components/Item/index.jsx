import React from 'react';
import { ImgContainer, Img, Name, ItemContainer } from './Styles';

export const Item = ({ itemData, changeValue }) => {
  return (
    <ItemContainer id={itemData.id} onClick={(ev) => changeValue(ev.target.id)}>
      <ImgContainer>
        <Img src={`/assets/${itemData.logo}`} alt={itemData.manufacturer} />
      </ImgContainer>
      <Name>{itemData.manufacturer}</Name>
    </ItemContainer>
  );
};

export default Item;
