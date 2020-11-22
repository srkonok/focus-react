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


function HeaderNotification() {


    return (
        <>
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                    <i class="mdi mdi-bell"></i>
                    <div class="pulse-css"></div>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-right" alignRight>
                    <ul class="list-unstyled">
                        <li class="media dropdown-item">
                            <span class="success"><i class="ti-user"></i></span>
                            <div class="media-body">
                                <a href="#">
                                    <p><strong>Martin</strong> has added a <strong>customer</strong> Successfully
                                                    </p>
                                </a>
                            </div>
                            <span class="notify-time">3:20 am</span>
                        </li>
                        <li class="media dropdown-item">
                            <span class="primary"><i class="ti-shopping-cart"></i></span>
                            <div class="media-body">
                                <a href="#">
                                    <p><strong>Jennifer</strong> purchased Light Dashboard 2.0.</p>
                                </a>
                            </div>
                            <span class="notify-time">3:20 am</span>
                        </li>
                        <li class="media dropdown-item">
                            <span class="danger"><i class="ti-bookmark"></i></span>
                            <div class="media-body">
                                <a href="#">
                                    <p><strong>Robin</strong> marked a <strong>ticket</strong> as unsolved.
                                                    </p>
                                </a>
                            </div>
                            <span class="notify-time">3:20 am</span>
                        </li>
                        <li class="media dropdown-item">
                            <span class="primary"><i class="ti-heart"></i></span>
                            <div class="media-body">
                                <a href="#">
                                    <p><strong>David</strong> purchased Light Dashboard 1.0.</p>
                                </a>
                            </div>
                            <span class="notify-time">3:20 am</span>
                        </li>
                        <li class="media dropdown-item">
                            <span class="success"><i class="ti-image"></i></span>
                            <div class="media-body">
                                <a href="#">
                                    <p><strong> James.</strong> has added a<strong>customer</strong> Successfully
                                                    </p>
                                </a>
                            </div>
                            <span class="notify-time">3:20 am</span>
                        </li>
                    </ul>
                    <a class="all-notification" href="#">See all notifications <i
                        class="ti-arrow-right"></i></a>

                </Dropdown.Menu>
            </Dropdown>,
        </>
    );
}

export default HeaderNotification;


