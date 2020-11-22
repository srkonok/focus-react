import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderNotification from './notification'
import HeaderProfile from './profile'

class Header extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <div className="header-content">
                        <nav className="navbar navbar-expand">
                            <div className="collapse navbar-collapse justify-content-between">
                                <div className="header-left">
                                    <div className="search_bar dropdown">
                                        <span className="search_icon p-3 c-pointer" data-toggle="dropdown">
                                            <i className="mdi mdi-magnify"></i>
                                        </span>
                                        <div className="dropdown-menu p-0 m-0">
                                            <form>
                                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <ul className="navbar-nav header-right">
                                    <li class="nav-item notification_dropdown">
                                        <HeaderNotification />
                                    </li>
                                    
                                    <li className="nav-item header-profile">
                                        <HeaderProfile />
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;