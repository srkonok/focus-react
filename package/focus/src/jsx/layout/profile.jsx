import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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


function HeaderProfile() {


    return (
        <>
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                    <i class="mdi mdi-account"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-right" alignRight>
                    <Link to={"./app-profile"} class="dropdown-item">
                        <i class="icon-user"></i>
                        <span class="ml-2">Profile </span>
                    </Link>
                    <Link to={"./email-inbox"} class="dropdown-item">
                        <i class="icon-envelope-open"></i>
                        <span class="ml-2">Inbox </span>
                    </Link>
                    <Link to={"./login"} class="dropdown-item">
                        <i class="icon-key"></i>
                        <span class="ml-2">Logout </span>
                    </Link>

                </Dropdown.Menu>
            </Dropdown>,
        </>
    );
}

export default HeaderProfile;


