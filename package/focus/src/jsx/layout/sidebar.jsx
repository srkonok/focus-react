import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MetisMenu from 'metismenujs';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'metismenujs/dist/metismenujs.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

class MM extends Component {
    componentDidMount() {
        this.$el = this.el;
        this.mm = new MetisMenu(this.$el);
    }
    componentWillUnmount() {
        this.mm('dispose');
    }
    render() {
        return (
            <div className="mm-wrapper">
                <ul className="metismenu" ref={el => this.el = el}>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

class Sidebar extends Component {



    componentDidMount() {
        // sidebar open/close

        var btn = document.querySelector('.nav-control');
        var aaa = document.querySelector('#main-wrapper ');

        function toggleFunc() {
            return aaa.classList.toggle("menu-toggle");
        }

        btn.addEventListener('click', toggleFunc);


        //



    }

    render() {
        return (
            <>
                <div className="quixnav">
                    <PerfectScrollbar className="quixnav-scroll">
                        <MM id="menu">
                            <li className="nav-label first">Main Menu</li>
                            <li><Link className="has-arrow" to={''} aria-expanded="false"><i
                                className="icon icon-single-04"></i><span className="nav-text">Dashboard</span></Link>
                                <ul aria-expanded="false">
                                    <li><Link to={'./'}>Dashboard 1</Link></li>
                                    <li><Link to={'./index2'}>Dashboard 2</Link></li>
                                </ul>
                            </li>
                            <li className="nav-label">Apps</li>
                            <li><Link className="has-arrow" to={''} aria-expanded="false"><i
                                className="icon icon-app-store"></i><span className="nav-text">Apps</span></Link>
                                <ul aria-expanded="false">
                                    <li><Link to={'./app-profile'}>Profile</Link></li>
                                    <li><Link to={'./email-inbox'}>Email</Link> </li>
                                    <li><Link to={'./calendar'}>Calendar</Link></li>
                                </ul>
                            </li>
                            <li><Link className="has-arrow" to={''} aria-expanded="false"><i
                                className="icon icon-chart-bar-33"></i><span className="nav-text">Charts</span></Link>
                                <ul aria-expanded="false">
                                    <li><Link to={'./chartjs'}>Chartjs</Link></li>
                                    <li><Link to={'./chartist'}>Chartist</Link></li>
                                    <li><Link to={'./sparkline'}>Sparkline</Link></li>
                                    {/* <li><Link to={'./peity'}>Peity</Link></li> */}
                                </ul>
                            </li>
                            <li className="nav-label">Components</li>
                            <li><Link className="has-arrow" to={''} aria-expanded="false"><i
                                className="icon icon-world-2"></i><span className="nav-text">Bootstrap</span></Link>
                                <ul aria-expanded="false">
                                    <li><Link to={'./accordion'}>Accordion</Link></li>
                                    <li><Link to={'./alert'}>Alert</Link></li>
                                    <li><Link to={'./badge'}>Badge</Link></li>
                                    <li><Link to={'./buttons'}>Button</Link></li>
                                    <li><Link to={'./modal'}>Modal</Link></li>
                                    <li><Link to={'./button-group'}>Button Group</Link></li>
                                    <li><Link to={'./list-group'}>List Group</Link></li>
                                    {/* <li><Link to={'./media-object'}>Media Object</Link></li> */}
                                    <li><Link to={'./cards'}>Cards</Link></li>
                                    <li><Link to={'./carousel'}>Carousel</Link></li>
                                    <li><Link to={'./dropdowns'}>Dropdown</Link></li>
                                    {/* <li><Link to={'./popover'}>Popover</Link></li> */}
                                    <li><Link to={'./progress'}>Progressbar</Link></li>
                                    <li><Link to={'./tabs'}>Tab</Link></li>
                                    {/* <li><Link to={'./typography'}>Typography</Link></li> */}
                                    <li><Link to={'./pagination'}>Pagination</Link></li>
                                    {/* <li><Link to={'./grid'}>Grid</Link></li> */}

                                </ul>
                            </li>

                            {/* <li><Link className="has-arrow" to={''} aria-expanded="false"><i
                                className="icon icon-plug"></i><span className="nav-text">Plugins</span></Link>
                                <ul aria-expanded="false">
                                    <li><Link to={'./uc-select2'}>Select 2</Link></li>
                                    <li><Link to={'./uc-nestable'}>Nestedable</Link></li>
                                    <li><Link to={'./uc-noui-slider'}>Noui Slider</Link></li>
                                    <li><Link to={'./uc-sweetalert'}>Sweet Alert</Link></li>
                                    <li><Link to={'./uc-toastr'}>Toastr</Link></li>
                                    <li><Link to={'./map-jqvmap'}>Jqv Map</Link></li>
                                </ul>
                            </li> */}

                            {/* <li><Link to={'widget-basic'} aria-expanded="false"><i className="icon icon-globe-2"></i><span
                                className="nav-text">Widget</span></Link>
                            </li> */}

                            <li className="nav-label">Forms</li>
                            <li>
                                <Link to={'./forms'}>
                                    <i className="icon icon-form"></i>
                                    <span className="nav-text">Form Elements</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={'./table'}>
                                    <i className="icon icon-form"></i>
                                    <span className="nav-text">Table</span>
                                </Link>
                            </li>
                            

                            <li className="nav-label">Extra</li>
                            <li><Link className="has-arrow" to={''} aria-expanded="false"><i
                                className="icon icon-single-copy-06"></i><span className="nav-text">Pages</span></Link>
                                <ul aria-expanded="false">
                                    <li><Link to={'./register'}>Register</Link></li>
                                    <li><Link to={'./login'}>Login</Link></li>
                                    <li><Link className="has-arrow" to={''} aria-expanded="false">Error</Link>
                                        <ul aria-expanded="false">
                                            <li><Link to={'./400'}>Error 400</Link></li>
                                            <li><Link to={'./403'}>Error 403</Link></li>
                                            <li><Link to={'./404'}>Error 404</Link></li>
                                            <li><Link to={'./500'}>Error 500</Link></li>
                                            <li><Link to={'./503'}>Error 503</Link></li>
                                        </ul>
                                    </li>
                                    {/* <li><Link to={'./lock-screen'}>Lock Screen</Link></li> */}
                                </ul>
                            </li>
                        </MM>
                    </PerfectScrollbar>
                </div>

            </>
        );
    }
}

export default Sidebar;