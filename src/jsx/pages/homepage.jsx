import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import Timeline from './../component/timeline/timeline';
import TodoList from './../component/todo';
import BarChart from './../component/charts/chartjs/bar';
import LineChart2 from './../component/charts/chartjs/line2';
import CustomerFeedback from '../component/plugin/circular/customer-feedback';
import TestimonialSlider from '../component/plugin/slick/testimonial-slider';
// import RealtimeChart from './../component/charts/apex/realtime'
import UsaMap from './../component/plugin/vectormap/usa';
import ChartPie from './../component/charts/chartjs/pie';
import PerfectScrollbar from 'react-perfect-scrollbar';



class Homepage extends Component {


    render() {
        return (
            <>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="card">
                            <div className="stat-widget-two card-body">
                                <div className="stat-content">
                                    <div className="stat-text">Today Expenses </div>
                                    <div className="stat-digit"> <i className="fa fa-usd"></i>8500</div>
                                </div>
                                <ProgressBar variant="success" now={80} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card">
                            <div className="stat-widget-two card-body">
                                <div className="stat-content">
                                    <div className="stat-text">Income Detail</div>
                                    <div className="stat-digit"> <i className="fa fa-usd"></i>7800</div>
                                </div>
                                <ProgressBar variant="primary" now={75} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card">
                            <div className="stat-widget-two card-body">
                                <div className="stat-content">
                                    <div className="stat-text">Task Completed</div>
                                    <div className="stat-digit"> <i className="fa fa-usd"></i> 500</div>
                                </div>
                                <ProgressBar variant="warning" now={50} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card">
                            <div className="stat-widget-two card-body">
                                <div className="stat-content">
                                    <div className="stat-text">Task Completed</div>
                                    <div className="stat-digit"> <i className="fa fa-usd"></i>650</div>
                                </div>
                                <ProgressBar variant="danger" now={65} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Sales Overview</h4>
                            </div>
                            <div className="card-body">
                                <BarChart />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="m-t-10">
                                    <h4 className="card-title">Customer Feedback</h4>
                                    <h2 className="mt-3">385749</h2>
                                </div>
                                <div className="widget-card-circle mt-5 mb-5" style={{ width: "100px" }}>
                                    <CustomerFeedback />
                                    <i className="ti-control-shuffle pa"></i>
                                </div>
                                <ul className="widget-line-list m-b-15">
                                    <li className="border-right">92% <br /><span className="text-success"><i
                                        className="ti-hand-point-up"></i> Positive</span></li>
                                    <li>8% <br /><span className="text-danger"><i
                                        className="ti-hand-point-down"></i>Negative</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Project</h4>
                            </div>
                            <div className="card-body">
                                <div className="current-progress">
                                    <div className="progress-content py-2">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="progress-text">Website</div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="current-progressbar">
                                                    <ProgressBar variant="primary" now={40} label={`${40}%`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-content py-2">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="progress-text">Android</div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="current-progressbar">
                                                    <ProgressBar variant="primary" now={40} label={`${40}%`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-content py-2">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="progress-text">Ios</div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="current-progressbar">
                                                    <ProgressBar variant="primary" now={40} label={`${40}%`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-content py-2">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="progress-text">Mobile</div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="current-progressbar">
                                                    <ProgressBar variant="primary" now={40} label={`${40}%`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body py-5">
                                <TestimonialSlider />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Earnings</h4>
                            </div>
                            <div className="card-body">
                                <LineChart2 />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Country</h4>
                            </div>
                            <div className="card-body">
                                <UsaMap />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">New Orders</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Product</th>
                                                <th>quantity</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="round-img">
                                                        <a href=""><img width="35" src={require('./../../images/avatar/1.png')} alt="" /></a>
                                                    </div>
                                                </td>
                                                <td>Lew Shawon</td>
                                                <td><span>Dell-985</span></td>
                                                <td><span>456 pcs</span></td>
                                                <td><span className="badge badge-success">Done</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="round-img">
                                                        <a href=""><img width="35" src={require('./../../images/avatar/1.png')} alt="" /></a>
                                                    </div>
                                                </td>
                                                <td>Lew Shawon</td>
                                                <td><span>Asus-565</span></td>
                                                <td><span>456 pcs</span></td>
                                                <td><span className="badge badge-warning">Pending</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="round-img">
                                                        <a href=""><img width="35" src={require('./../../images/avatar/1.png')} alt="" /></a>
                                                    </div>
                                                </td>
                                                <td>lew Shawon</td>
                                                <td><span>Dell-985</span></td>
                                                <td><span>456 pcs</span></td>
                                                <td><span className="badge badge-success">Done</span></td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="round-img">
                                                        <a href=""><img width="35" src={require('./../../images/avatar/1.png')} alt="" /></a>
                                                    </div>
                                                </td>
                                                <td>Lew Shawon</td>
                                                <td><span>Asus-565</span></td>
                                                <td><span>456 pcs</span></td>
                                                <td><span className="badge badge-warning">Pending</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="round-img">
                                                        <a href=""><img width="35" src={require('./../../images/avatar/1.png')} alt="" /></a>
                                                    </div>
                                                </td>
                                                <td>lew Shawon</td>
                                                <td><span>Dell-985</span></td>
                                                <td><span>456 pcs</span></td>
                                                <td><span className="badge badge-success">Done</span></td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="round-img">
                                                        <a href=""><img width="35" src={require('./../../images/avatar/1.png')} alt="" /></a>
                                                    </div>
                                                </td>
                                                <td>Lew Shawon</td>
                                                <td><span>Asus-565</span></td>
                                                <td><span>456 pcs</span></td>
                                                <td><span className="badge badge-warning">Pending</span></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-xl-4 col-xxl-6 col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Timeline</h4>
                            </div>
                            <div className="card-body">
                                <PerfectScrollbar style={{ "height": "380px" }}>
                                    <Timeline />
                                </PerfectScrollbar>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-xxl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Todo List</h4>
                            </div>
                            <div className="card-body">
                                <TodoList />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-xxl-6 col-xl-4 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Product Sold</h4>
                            </div>
                            <div className="card-body">
                                <ChartPie />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12 col-xxl-6 col-lg-6 col-md-12">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-sm-6 col-xxl-6 col-md-6">
                                <div className="card">
                                    <div className="social-graph-wrapper widget-facebook">
                                        <span className="s-icon"><i className="fa fa-facebook"></i></span>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 border-right">
                                            <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                                                <h4 className="m-1"><span className="counter">89</span> k</h4>
                                                <p className="m-0">Friends</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                                                <h4 className="m-1"><span className="counter">119</span> k</h4>
                                                <p className="m-0">Followers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-sm-6 col-xxl-6 col-md-6">
                                <div className="card">
                                    <div className="social-graph-wrapper widget-linkedin">
                                        <span className="s-icon"><i className="fa fa-linkedin"></i></span>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 border-right">
                                            <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                                                <h4 className="m-1"><span className="counter">89</span> k</h4>
                                                <p className="m-0">Friends</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                                                <h4 className="m-1"><span className="counter">119</span> k</h4>
                                                <p className="m-0">Followers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-sm-6 col-xxl-6 col-md-6">
                                <div className="card">
                                    <div className="social-graph-wrapper widget-googleplus">
                                        <span className="s-icon"><i className="fa fa-google-plus"></i></span>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 border-right">
                                            <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                                                <h4 className="m-1"><span className="counter">89</span> k</h4>
                                                <p className="m-0">Friends</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                                                <h4 className="m-1"><span className="counter">119</span> k</h4>
                                                <p className="m-0">Followers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-sm-6 col-xxl-6 col-md-6">
                                <div className="card">
                                    <div className="social-graph-wrapper widget-twitter">
                                        <span className="s-icon"><i className="fa fa-twitter"></i></span>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 border-right">
                                            <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                                                <h4 className="m-1"><span className="counter">89</span> k</h4>
                                                <p className="m-0">Friends</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                                                <h4 className="m-1"><span className="counter">119</span> k</h4>
                                                <p className="m-0">Followers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Homepage;

