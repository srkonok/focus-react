import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavHeader from './layout/navHeader';
import Header from './layout/header';
import Sidebar from './layout/sidebar';
// import Footer from './layout/footer';
import Homepage from './pages/homepage';
import Homepage2 from './pages/homepage2';
import Profile from './pages/app-profile';
import EmailInbox from './pages/email-inbox';
import UiAlert from './component/ui/alert';
import UiAccordion from './component/ui/accordion';
import UiBadge from './component/ui/badge';
import UiBreadcrumb from './component/ui/breadcrumb';
import UiButtonGroup from './component/ui/button-group';
import UiButtons from './component/ui/buttons';
import UiCards from './component/ui/cards';
import UiCarousel from './component/ui/carousel';
import UiDropdowns from './component/ui/dropdowns';
import UiFigures from './component/ui/figures';
import UiImages from './component/ui/images';
import UiInputGroup from './component/form/input-group';
import UiJumbotron from './component/ui/jumbotron';
import UiListGroup from './component/ui/list-group';
import UiModal from './component/ui/modal';
import UiNavbar from './component/ui/navbar';
import UiNavs from './component/ui/navs';
import UiOverlay from './component/ui/overlays';
import UiPagination from './component/ui/pagination';
import UiPopover from './component/ui/popovers';
import UiProgress from './component/ui/progress';
import UiSpinner from './component/ui/spinners';
import UiTabs from './component/ui/tabs';
import UiToasts from './component/ui/toasts';
import UiTooltips from './component/ui/tooltips';
import UiForms from './component/form/forms';
import UiTable from './component/table/table';
import ChartChartjs from './component/charts/chartjs';
import ChartChartist from './component/charts/chartist';
import ChartSparkline from './component/charts/sparkline';
import ChartPeity from './component/charts/peity';
import CircularProgress from './component/plugin/circular';
import SlickSlider from './component/plugin/slick';
import AppCalendar from './pages/app-calendar';
import Register from './pages/register';
import Login from './pages/login';
import Eroor400 from './pages/400';
import Eroor403 from './pages/403';
import Eroor404 from './pages/404';
import Eroor500 from './pages/500';
import Eroor503 from './pages/503';


class Markup extends Component {

    state = {
        height: ''
    };

    componentWillMount() {
        this.setState({ height: window.innerHeight + 30 + 'px' });
    }

    render() {

        return (
            <>

                <BrowserRouter basename={'/demo/focus'}>
                    {/* <BrowserRouter> */}
                    <div id="main-wrapper">
                        <NavHeader />
                        <Header />
                        <Sidebar />

                        <div className="content-body" style={{ "min-height": `${this.state.height}` }}>
                            <div className="container-fluid">
                                <Switch>
                                    <Route path='/' exact component={Homepage} />
                                    <Route path='/index2' component={Homepage2} />
                                    <Route path='/app-profile' component={Profile} />
                                    <Route path='/email-inbox' component={EmailInbox} />
                                    <Route path='/alert' component={UiAlert} />
                                    <Route path='/accordion' component={UiAccordion} />
                                    <Route path='/badge' component={UiBadge} />
                                    <Route path='/breadcrumb' component={UiBreadcrumb} />
                                    <Route path='/button-group' component={UiButtonGroup} />
                                    <Route path='/buttons' component={UiButtons} />
                                    <Route path='/cards' component={UiCards} />
                                    <Route path='/carousel' component={UiCarousel} />
                                    <Route path='/dropdowns' component={UiDropdowns} />
                                    <Route path='/figures' component={UiFigures} />
                                    <Route path='/images' component={UiImages} />
                                    <Route path='/input-group' component={UiInputGroup} />
                                    <Route path='/jumbotron' component={UiJumbotron} />
                                    <Route path='/list-group' component={UiListGroup} />
                                    <Route path='/modal' component={UiModal} />
                                    <Route path='/navbar' component={UiNavbar} />
                                    <Route path='/navs' component={UiNavs} />
                                    <Route path='/overlays' component={UiOverlay} />
                                    <Route path='/pagination' component={UiPagination} />
                                    <Route path='/popovers' component={UiPopover} />
                                    <Route path='/progress' component={UiProgress} />
                                    <Route path='/spinners' component={UiSpinner} />
                                    <Route path='/tabs' component={UiTabs} />
                                    <Route path='/toasts' component={UiToasts} />
                                    <Route path='/tooltips' component={UiTooltips} />
                                    <Route path='/forms' component={UiForms} />
                                    <Route path='/table' component={UiTable} />
                                    <Route path='/chartjs' component={ChartChartjs} />
                                    <Route path='/chartist' component={ChartChartist} />
                                    <Route path='/sparkline' component={ChartSparkline} />
                                    <Route path='/peity' component={ChartPeity} />
                                    <Route path='/circular' component={CircularProgress} />
                                    <Route path='/slick' component={SlickSlider} />
                                    <Route path='/calendar' component={AppCalendar} />
                                    <Route path='/register' component={Register} />
                                    <Route path='/login' component={Login} />
                                    <Route path='/400' component={Eroor400} />
                                    <Route path='/403' component={Eroor403} />
                                    <Route path='/404' component={Eroor404} />
                                    <Route path='/500' component={Eroor500} />
                                    <Route path='/503' component={Eroor503} />
                                </Switch>
                            </div>
                        </div>

                        {/* <Footer /> */}
                    </div>
                </BrowserRouter>


            </>
        );
    }
}

export default Markup;
