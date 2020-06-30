import React, { useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import * as actions from '../../../../Store/Actions/compareWizard.action';
import { selected } from '../../../../Store/Selectors/CompareWizard';

export const ManufacturersList = ({
  listData,
  search,
  searchStr,
  display,
  sortBy,
}) => {
  const dispatch = useDispatch();
  const filtered = useSelector(selected);
  const changeValue = useCallback(
    (newItem) => {
      dispatch({ type: actions.setSelectedManufactures, payload: newItem });
    },
    [dispatch]
  );
  
  console.log('filtered :>> ', filtered);
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

export default memo(ManufacturersList);
