import React, { useState } from 'react';
import { Dropdown as ReactStrapDropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { StyledDropdownToggle } from './Styles';

export const Dropdown = ({ getValue }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // const [selectedItem, setSelectedItem] = useState(dropdownValue);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const handleChange = (ev) => {
        getValue(ev.target.name)
    }

    return (
        <ReactStrapDropdown isOpen={dropdownOpen} toggle={toggle} color="light">
            <StyledDropdownToggle caret>
                Order by
        </StyledDropdownToggle>
            <DropdownMenu >
                <DropdownItem name={'asc'} onClick={handleChange} >ASC</DropdownItem>
                <DropdownItem name={'desc'} onClick={handleChange} >DESC</DropdownItem>
            </DropdownMenu>
        </ReactStrapDropdown>
    );
}

export default Dropdown;