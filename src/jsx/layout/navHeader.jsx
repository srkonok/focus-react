import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavHeader extends Component {
    render() {
        return (
            <>
                <div className="nav-header">
                    <Link to={'./'} className="brand-logo">
                        <img className="logo-abbr" src={require('../../images/logo.png')} alt="" />
                        <img className="brand-title" src={require('../../images/logo-text.png')} alt="" />
                    </Link>

                    <div className="nav-control wave-effect wave-effect-x">
                        <div className="hamburger">
                            <span className="toggle-icon"><i className="icon-menu"></i></span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default NavHeader;