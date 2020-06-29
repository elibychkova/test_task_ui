import React from 'react';
import {
    ManufacturersContainer,
    Item,
    ImgContainer,
    Img,
    Name
} from './Styles';
import { sort } from '../../Utils';

export const ManufacturersList = ({ listData, search, searchStr, display, sortBy }) => {
    console.log('display :>> ', display);
    sort(listData, sortBy);
    return (
        <ManufacturersContainer>
            {listData
                .filter(data => (search && searchStr ? search(data, searchStr) : true))
                .map((manufacturer, index) => {
                    return (
                        <Item key={index}>
                            <ImgContainer>
                                <Img
                                    src={`/assets/${manufacturer.logo}`}
                                    alt={manufacturer.manufacturer}
                                />
                            </ImgContainer>
                            <Name>{manufacturer.manufacturer}</Name>
                        </Item>
                    );
                })}
        </ManufacturersContainer>
    );
};

export default ManufacturersList;
