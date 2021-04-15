import React, { useState } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Dropdown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Select {props.header}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>{props.header}</DropdownItem>
        {props.list.map((state) => (
          <DropdownItem key={state} value={state} onClick = {props.handleClick}>{state}</DropdownItem>
        ))}
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default Dropdown;
