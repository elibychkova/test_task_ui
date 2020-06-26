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
  Title,
  StepsSection,
  ActionSection,
  ActionContainer,
} from './Styles';
import { StepButton, ActionButton } from './Components';

export class CompareWizard extends PureComponent {
  componentDidMount() {
    this.props.getManufacturers();
  }

  render() {
    const { manufacturersData } = this.props;
    console.log('manufacturersData :>> ', manufacturersData);

    return (
      <Container>
        <Title>
          <h1>Compare Wizard</h1>
        </Title>
        <StepsSection>
          <StepButton step={1} label="Select manufacturer" />
          <StepButton step={2} label="Select model" />
          <StepButton step={3} label="Compare" />
        </StepsSection>
        <ActionSection>
          <ActionContainer>
            <span>{manufacturersData.data.length} Manufacturers available</span>
            <ActionButton label="Select model" />
          </ActionContainer>
        </ActionSection>
        <AdjustmentSection>
          
        </AdjustmentSection>
        <ModelsSection>
          <ManufacturersContainer>
            {manufacturersData.data.map((manufacturer, index) => {
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
        </ModelsSection>
      </Container>
    );
  }
}

export default withRouter(
  connect(
    (state) => ({
      manufacturersData: getManufacturersData(state),
    }),
    {
      getManufacturers,
    }
  )(CompareWizard)
);
