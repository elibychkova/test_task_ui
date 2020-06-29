import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getManufacturers } from '../../Store/Actions/compareWizard.thunk';
import { getManufacturersData } from '../../Store/Selectors/CompareWizard';
import {
  Container,
  ModelsSection,
  Title,
  StepsSection,
  ActionSection,
  ActionContainer,
  AdjustmentSection,
} from './Styles';
import { StepButton, ActionButton, SearchBar, Dropdown, DisplayGroup } from './Components';
import { ManufacturersList } from './Components/ManufacturersList';

export class CompareWizard extends PureComponent {
  state = {
    inputValue: '',
    dropdownValue: 'asc',
    displayType: 'grid'
  };

  componentDidMount() {
    this.props.getManufacturers();
  }

  inputChange = (ev) => this.setState({ inputValue: ev.target.value });
  toggle = () => this.setState({ dropdownOpen: !this.state.dropdownOpen });
  getValue = (value) => this.setState({ dropdownValue: value });
  getDisplayType = (value) => this.setState({ displayType: value });

  render() {
    const { manufacturersData } = this.props;
    const { inputValue, dropdownValue, displayType } = this.state;

        // console.log('manufacturersData :>> ', manufacturersData);
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
            <span>{manufacturersData.length} Manufacturers available</span>
            <ActionButton label="Select model" />
          </ActionContainer>
        </ActionSection>
        <AdjustmentSection>
          <SearchBar color={'#7E7E7E'} onChange={this.inputChange} />
          <Dropdown getValue={this.getValue} />
          <DisplayGroup getDisplayType={this.getDisplayType}/>
        </AdjustmentSection>
        <ModelsSection>
          <ManufacturersList
            listData={manufacturersData}
            search={(item, searchStr) =>
              !!item.manufacturer
                .toLowerCase()
                .match(new RegExp(searchStr.toLowerCase()))
            }
            searchStr={inputValue}
            sortBy={dropdownValue}
            display={displayType}
          />
        </ModelsSection>
      </Container>
    );
  }
}

export default withRouter(
  connect(
    (state) => ({
      manufacturersData: getManufacturersData(state).data,
    }),
    {
      getManufacturers,
    }
  )(CompareWizard)
);
