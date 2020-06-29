import React, { useState } from 'react';
import {
  GridDisplay,
  //   Item,
  Img,
  Name,
  RowDisplay,
  Row,
  ImgRowContainer,
  Info,
} from './Styles';
import { sort } from '../../Utils';
import { Item } from '../Item';
import moment from 'moment';

export const ManufacturersList = ({
  listData,
  search,
  searchStr,
  display,
  sortBy,
}) => {
  const selectedItems = new Set();
  const changeValue = (selectId) => {
    if (selectedItems.has(selectId)) {
      selectedItems.delete(selectId);
    } else {
      selectedItems.add(selectId);
    }
  };
  console.log('selectedItems :>> ', selectedItems);

  sort(listData, sortBy);
  return display === 'grid' ? (
    <GridDisplay>
      {listData
        .filter((data) =>
          search && searchStr ? search(data, searchStr) : true
        )
        // .filter(selected => {
        //     if (selectedItems.has('1')) {
        //         console.log('selected :>> ', selected);
        //     }

        //     return selected
        // })
        .map((manufacturer) => {
          return (
            <Item
              key={manufacturer.id}
              itemData={manufacturer}
              changeValue={changeValue}
            />
          );
        })}
    </GridDisplay>
  ) : (
    <RowDisplay>
      {listData
        .filter((data) =>
          search && searchStr ? search(data, searchStr) : true
        )
        .map((manufacturer) => {
          const { company_info } = manufacturer;
          const date = moment(company_info.founded_At).format('MMMM D, YYYY');
          return (
            <Row key={manufacturer.id}>
              <ImgRowContainer>
                <Img
                  src={`/assets/${manufacturer.logo}`}
                  alt={manufacturer.manufacturer}
                />
              </ImgRowContainer>
              <Name>{manufacturer.manufacturer}</Name>
              <Info>
                {date},{company_info.city},{' '}
                {company_info.state ? `${company_info.state},` : ''}{' '}
                {company_info.country}
              </Info>
            </Row>
          );
        })}
    </RowDisplay>
  );
};

export default ManufacturersList;
