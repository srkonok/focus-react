import React from 'react';
import { Dropdown } from 'react-bootstrap'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </a>
));


function CustomDropdown() {


    return (
        <>
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                    Custom toggle
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                        Orange
                </Dropdown.Item>
                    <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>,
        </>
    );
}

export default CustomDropdown;


