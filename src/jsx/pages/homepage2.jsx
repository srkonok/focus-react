import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import BarChart from './../component/charts/chartist/bar';
import PieChart from './../component/charts/chartist/pie';
import Timeline from './../component/timeline/timeline';
import TodoApp from './../component/todo';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Calendar from './../component/plugin/calendar';



function Homepage2() {

    return (
        <>
            <div class="row page-titles mx-0">
                <div class="col-sm-6 p-md-0">
                    <div class="welcome-text">
                        <h4>Hi, welcome back!</h4>
                        <p class="mb-0">Your business dashboard template</p>
                    </div>
                </div>
                <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Layout</a></li>
                        <li class="breadcrumb-item active"><a href="javascript:void(0)">Blank</a></li>
                    </ol>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="card">
                        <div class="stat-widget-one card-body">
                            <div class="stat-icon d-inline-block">
                                <i class="ti-money text-success border-success"></i>
                            </div>
                            <div class="stat-content d-inline-block">
                                <div class="stat-text">Profit</div>
                                <div class="stat-digit">1,012</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="card">
                        <div class="stat-widget-one card-body">
                            <div class="stat-icon d-inline-block">
                                <i class="ti-user text-primary border-primary"></i>
                            </div>
                            <div class="stat-content d-inline-block">
                                <div class="stat-text">Customer</div>
                                <div class="stat-digit">961</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="card">
                        <div class="stat-widget-one card-body">
                            <div class="stat-icon d-inline-block">
                                <i class="ti-layout-grid2 text-pink border-pink"></i>
                            </div>
                            <div class="stat-content d-inline-block">
                                <div class="stat-text">Projects</div>
                                <div class="stat-digit">770</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="card">
                        <div class="stat-widget-one card-body">
                            <div class="stat-icon d-inline-block">
                                <i class="ti-link text-danger border-danger"></i>
                            </div>
                            <div class="stat-content d-inline-block">
                                <div class="stat-text">Referral</div>
                                <div class="stat-digit">2,781</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Fee Collections and Expenses</h4>
                        </div>
                        <div class="card-body">
                            <BarChart />
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Social Activity</h4>
                        </div>
                        <div class="card-body">
                            <PieChart />
                        </div>
                    </div>
                </div>

                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">All Exam Result</h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table student-data-table m-t-20">
                                    <thead>
                                        <tr>
                                            <th>Subject</th>
                                            <th>Grade Point</th>
                                            <th>Percent Form</th>
                                            <th>Percent Upto</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Class Test</td>
                                            <td>Mathmatics</td>
                                            <td>
                                                4.00
                                                </td>
                                            <td>
                                                95.00
                                                </td>
                                            <td>
                                                100
                                                </td>
                                            <td>20/04/2017</td>
                                        </tr>
                                        <tr>
                                            <td>Class Test</td>
                                            <td>Mathmatics</td>
                                            <td>
                                                4.00
                                                </td>
                                            <td>
                                                95.00
                                                </td>
                                            <td>
                                                100
                                                </td>
                                            <td>20/04/2017</td>
                                        </tr>
                                        <tr>
                                            <td>Class Test</td>
                                            <td>English</td>
                                            <td>
                                                4.00
                                                </td>
                                            <td>
                                                95.00
                                                </td>
                                            <td>
                                                100
                                                </td>
                                            <td>20/04/2017</td>
                                        </tr>
                                        <tr>
                                            <td>Class Test</td>
                                            <td>Bangla</td>
                                            <td>
                                                4.00
                                                </td>
                                            <td>
                                                95.00
                                                </td>
                                            <td>
                                                100
                                                </td>
                                            <td>20/04/2017</td>
                                        </tr>
                                        <tr>
                                            <td>Class Test</td>
                                            <td>Mathmatics</td>
                                            <td>
                                                4.00
                                                </td>
                                            <td>
                                                95.00
                                                </td>
                                            <td>
                                                100
                                                </td>
                                            <td>20/04/2017</td>
                                        </tr>
                                        <tr>
                                            <td>Class Test</td>
                                            <td>English</td>
                                            <td>
                                                4.00
                                                </td>
                                            <td>
                                                95.00
                                                </td>
                                            <td>
                                                100
                                                </td>
                                            <td>20/04/2017</td>
                                        </tr>
                                        <tr>
                                            <td>Class Test</td>
                                            <td>Mathmatics</td>
                                            <td>
                                                4.00
                                                </td>
                                            <td>
                                                95.00
                                                </td>
                                            <td>
                                                100
                                                </td>
                                            <td>20/04/2017</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-xl-4 col-xxl-6 col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Timeline</h4>
                        </div>
                        <div class="card-body">
                            <PerfectScrollbar style={{ "height": "380px" }}>
                                <Timeline />
                            </PerfectScrollbar>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-xxl-6 col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Notice Board</h4>
                        </div>
                        <div class="card-body">
                            <div class="recent-comment m-t-15">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#"><img class="media-object mr-3" src={require('./../../images/avatar/4.png')} alt="..." /></a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading text-primary">john doe</h4>
                                        <p>Cras sit amet nibh libero, in gravida nulla.</p>
                                        <p class="comment-date">10 min ago</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#"><img class="media-object mr-3" src={require('./../../images/avatar/2.png')} alt="..." /></a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading text-success">Mr. John</h4>
                                        <p>Cras sit amet nibh libero, in gravida nulla.</p>
                                        <p class="comment-date">1 hour ago</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#"><img class="media-object mr-3" src={require('./../../images/avatar/3.png')} alt="..." /></a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading text-danger">Mr. John</h4>
                                        <p>Cras sit amet nibh libero, in gravida nulla.</p>
                                        <div class="comment-date">Yesterday</div>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#"><img class="media-object mr-3" src={require('./../../images/avatar/4.png')} alt="..." /></a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading text-primary">john doe</h4>
                                        <p>Cras sit amet nibh libero, in gravida nulla.</p>
                                        <p class="comment-date">10 min ago</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#"><img class="media-object mr-3" src={require('./../../images/avatar/2.png')} alt="..." /></a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading text-success">Mr. John</h4>
                                        <p>Cras sit amet nibh libero, in gravida nulla.</p>
                                        <p class="comment-date">1 hour ago</p>
                                    </div>
                                </div>
                                <div class="media no-border">
                                    <div class="media-left">
                                        <a href="#"><img class="media-object mr-3" src={require('./../../images/avatar/3.png')} alt="..." /></a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading text-info">Mr. John</h4>
                                        <p>Cras sit amet nibh libero, in gravida nulla.</p>
                                        <div class="comment-date">Yesterday</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-xxl-6 col-lg-6 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Todo</h4>
                        </div>
                        <div class="card-body">
                            <TodoApp />
                        </div>
                    </div>
                </div>

                <div class="col-xl-12 col-xxl-6 col-lg-6 col-md-12">
                    <div class="row">
                        <div class="col-xl-3 col-lg-6 col-sm-6 col-xxl-6 col-md-6">
                            <div class="card">
                                <div class="social-graph-wrapper widget-facebook">
                                    <span class="s-icon"><i class="fa fa-facebook"></i></span>
                                </div>
                                <div class="row">
                                    <div class="col-6 border-right">
                                        <div class="pt-3 pb-3 pl-0 pr-0 text-center">
                                            <h4 class="m-1"><span class="counter">89</span> k</h4>
                                            <p class="m-0">Friends</p>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="pt-3 pb-3 pl-0 pr-0 text-center">
                                            <h4 class="m-1"><span class="counter">119</span> k</h4>
                                            <p class="m-0">Followers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-sm-6 col-xxl-6 col-md-6">
                            <div class="card">
                                <div class="social-graph-wrapper widget-linkedin">
                                    <span class="s-icon"><i class="fa fa-linkedin"></i></span>
                                </div>
                                <div class="row">
                                    <div class="col-6 border-right">
                                        <div class="pt-3 pb-3 pl-0 pr-0 text-center">
                                            <h4 class="m-1"><span class="counter">89</span> k</h4>
                                            <p class="m-0">Friends</p>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="pt-3 pb-3 pl-0 pr-0 text-center">
                                            <h4 class="m-1"><span class="counter">119</span> k</h4>
                                            <p class="m-0">Followers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-sm-6 col-xxl-6 col-md-6">
                            <div class="card">
                                <div class="social-graph-wrapper widget-googleplus">
                                    <span class="s-icon"><i class="fa fa-google-plus"></i></span>
                                </div>
                                <div class="row">
                                    <div class="col-6 border-right">
                                        <div class="pt-3 pb-3 pl-0 pr-0 text-center">
                                            <h4 class="m-1"><span class="counter">89</span> k</h4>
                                            <p class="m-0">Friends</p>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="pt-3 pb-3 pl-0 pr-0 text-center">
                                            <h4 class="m-1"><span class="counter">119</span> k</h4>
                                            <p class="m-0">Followers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-sm-6 col-xxl-6 col-md-6">
                            <div class="card">
                                <div class="social-graph-wrapper widget-twitter">
                                    <span class="s-icon"><i class="fa fa-twitter"></i></span>
                                </div>
                                <div class="row">
                                    <div class="col-6 border-right">
                                        <div class="pt-3 pb-3 pl-0 pr-0 text-center">
                                            <h4 class="m-1"><span class="counter">89</span> k</h4>
                                            <p class="m-0">Friends</p>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="pt-3 pb-3 pl-0 pr-0 text-center">
                                            <h4 class="m-1"><span class="counter">119</span> k</h4>
                                            <p class="m-0">Followers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <Calendar />
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">All Expense</h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table student-data-table m-t-20">
                                    <thead>
                                        <tr>
                                            <th>Expense Type</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Email</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                            <td>
                                                Salary
                                                </td>
                                            <td>
                                                $2000
                                                </td>
                                            <td>
                                                <span class="badge badge-primary">Paid</span>
                                            </td>
                                            <td>
                                                edumin@gmail.com
                                                </td>
                                            <td>
                                                10/05/2017
                                                </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                Salary
                                                </td>
                                            <td>
                                                $2000
                                                </td>
                                            <td>
                                                <span class="badge badge-warning">Pending</span>
                                            </td>
                                            <td>
                                                edumin@gmail.com
                                                </td>
                                            <td>
                                                10/05/2017
                                                </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                Salary
                                                </td>
                                            <td>
                                                $2000
                                                </td>
                                            <td>
                                                <span class="badge badge-primary">Paid</span>
                                            </td>
                                            <td>
                                                edumin@gmail.com
                                                </td>
                                            <td>
                                                10/05/2017
                                                </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                Salary
                                                </td>
                                            <td>
                                                $2000
                                                </td>
                                            <td>
                                                <span class="badge badge-danger">Due</span>
                                            </td>
                                            <td>
                                                edumin@gmail.com
                                                </td>
                                            <td>
                                                10/05/2017
                                                </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage2;