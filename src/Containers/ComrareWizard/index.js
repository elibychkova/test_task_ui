import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getManufacturers } from '../../Store/Actions/compareWizard.thunk';
import { getManufacturersData } from '../../Store/Selectors/CompareWizard';
import {
  Container,
  ModelsSection,
  ManufacturersContainer,
  Item,
  Img,
  ImgContainer,
  Name,
  Title
} from './Styles';


export class CompareWizard extends PureComponent {
  componentDidMount() {
    this.props.getManufacturers()
  }

  render() {

    const { manufacturersData } = this.props;
    console.log('manufacturersData :>> ', manufacturersData);

    return (
      <Container>
        <Title>
          <span>CompareWizard</span>
        </Title>
        <ModelsSection>
          <ManufacturersContainer>
            {manufacturersData.data.map(manufacturer => {
              return (
                <Item>
                  <ImgContainer>
                    <Img src={`/assets/${manufacturer.logo}`} alt={manufacturer.manufacturer} />
                  </ImgContainer>
                  <Name>{manufacturer.manufacturer}</Name>
                </Item>
              )
            })}
          </ManufacturersContainer>
        </ModelsSection>
      </Container>
    )
  }
}

export default withRouter(
  connect(
    (state) => ({
      manufacturersData: getManufacturersData(state)
    }),
    {
      getManufacturers
    }
  )(CompareWizard)
);