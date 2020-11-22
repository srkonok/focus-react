import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Profile extends Component {


    render() {
        return (
            <>

                <div className="row page-titles mx-0">
                    <div className="col-sm-6 p-md-0">
                        <div className="welcome-text">
                            <h4>Hi, welcome back!</h4>
                            <p className="mb-0">Your business dashboard template</p>
                        </div>
                    </div>
                    <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={' '}>App</Link></li>
                            <li className="breadcrumb-item active"><Link to={' '}>Profile</Link></li>
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="profile">
                            <div className="profile-head">
                                <div className="photo-content">
                                    <div className="cover-photo"></div>
                                    <div className="profile-photo">
                                        <img src={require('./../../images/profile/profile.png')} className="img-fluid rounded-circle" alt="" />
                                    </div>
                                </div>
                                <div className="profile-info">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-8">
                                            <div className="row">
                                                <div className="col-xl-4 col-sm-4 border-right-1 prf-col">
                                                    <div className="profile-name">
                                                        <h4 className="text-primary">Mitchell C. Shay</h4>
                                                        <p>UX / UI Designer</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-sm-4 border-right-1 prf-col">
                                                    <div className="profile-email">
                                                        <h4 className="text-muted">hello@email.com</h4>
                                                        <p>Email</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="profile-statistics">
                                    <div className="text-center mt-4 border-bottom-1 pb-3">
                                        <div className="row">
                                            <div className="col">
                                                <h3 className="m-b-0">150</h3><span>Follower</span>
                                            </div>
                                            <div className="col">
                                                <h3 className="m-b-0">140</h3><span>Place Stay</span>
                                            </div>
                                            <div className="col">
                                                <h3 className="m-b-0">45</h3><span>Reviews</span>
                                            </div>
                                        </div>
                                        <div className="mt-4"><Link to={'#'} className="btn btn-primary pl-5 pr-5 mr-3 mb-4">Follow</Link> <Link to={'#'} className="btn btn-dark pl-5 pr-5 mb-4">Send
                                                Message</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-blog pt-3 border-bottom-1 pb-1">
                                    <h5 className="text-primary d-inline">Today Highlights</h5><Link to={'#'} className="pull-right f-s-16">More</Link>
                                    <img src={require('./../../images/profile/1.jpg')} alt="" className="img-fluid mt-4 mb-4 w-100" />
                                    <h4>Darwin Creative Agency Theme</h4>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                                <div className="profile-interest mt-4 pb-2 border-bottom-1">
                                    <h5 className="text-primary d-inline">Interest</h5>
                                    <div className="row mt-4">
                                        <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col">
                                            <Link to={'#'} className="interest-cat">
                                                <img src={require('./../../images/profile/2.jpg')} alt="" className="img-fluid" />
                                                <p>Shopping Mall</p>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col">
                                            <Link to={'#'} className="interest-cat">
                                                <img src={require('./../../images/profile/3.jpg')} alt="" className="img-fluid" />
                                                <p>Photography</p>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col">
                                            <Link to={'#'} className="interest-cat">
                                                <img src={require('./../../images/profile/4.jpg')} alt="" className="img-fluid" />
                                                <p>Art &amp; Gallery</p>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col">
                                            <Link to={'#'} className="interest-cat">
                                                <img src={require('./../../images/profile/2.jpg')} alt="" className="img-fluid" />
                                                <p>Visiting Place</p>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col">
                                            <Link to={'#'} className="interest-cat">
                                                <img src={require('./../../images/profile/3.jpg')} alt="" className="img-fluid" />
                                                <p>Shopping</p>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col">
                                            <Link to={'#'} className="interest-cat">
                                                <img src={require('./../../images/profile/4.jpg')} alt="" className="img-fluid" />
                                                <p>Biking</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-news mt-4 pb-3">
                                    <h5 className="text-primary d-inline">Our Latest News</h5>
                                    <div className="media pt-3 pb-3">
                                        <img src={require('./../../images/profile/5.jpg')} alt="img" className="mr-3" />
                                        <div className="media-body">
                                            <h5 className="m-b-5">John Tomas</h5>
                                            <p>I shared this on my fb wall a few months back, and I thought I'd share it here again because it's such a great read</p>
                                        </div>
                                    </div>
                                    <div className="media pt-3 pb-3">
                                        <img src={require('./../../images/profile/6.jpg')} alt="img" className="mr-3" />
                                        <div className="media-body">
                                            <h5 className="m-b-5">John Tomas</h5>
                                            <p>I shared this on my fb wall a few months back, and I thought I'd share it here again because it's such a great read</p>
                                        </div>
                                    </div>
                                    <div className="media pt-3 pb-3">
                                        <img src={require('./../../images/profile/7.jpg')} alt="img" className="mr-3" />
                                        <div className="media-body">
                                            <h5 className="m-b-5">John Tomas</h5>
                                            <p>I shared this on my fb wall a few months back, and I thought I'd share it here again because it's such a great read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="profile-tab">
                                    <div className="custom-tab-1">
                                        <ul className="nav nav-tabs">
                                            <li className="nav-item"><Link href="#my-posts" data-toggle="tab" className="nav-link active show">Posts</Link>
                                            </li>
                                            {/* <li className="nav-item"><Link href="#about-me" data-toggle="tab" className="nav-link">About Me</Link>
                                            </li>
                                            <li className="nav-item"><Link href="#profile-settings" data-toggle="tab" className="nav-link">Setting</Link>
                                            </li> */}
                                        </ul>
                                        <div className="tab-content">
                                            <div id="my-posts" className="tab-pane fade active show">
                                                <div className="my-post-content pt-3">
                                                    <div className="post-input">
                                                        <textarea name="textarea" id="textarea" cols="30" rows="5" className="form-control bg-transparent" placeholder="Please type what you want...."></textarea> <Link to={'#'}><i className="ti-clip"></i> </Link>
                                                        <Link
                                                            to={'#'}><i className="ti-camera"></i> </Link><Link to={'#'} className="btn btn-primary">Post</Link>
                                                    </div>
                                                    <div className="profile-uoloaded-post border-bottom-1 pb-5">
                                                        <img src={require('./../../images/profile/8.jpg')} alt="" className="img-fluid" />
                                                        <Link className="post-title" to={'#'}>
                                                            <h4>Collection of textile samples lay spread</h4>
                                                        </Link>
                                                        <p>A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning
                                                            of spare which enjoy whole heart.</p>
                                                        <button className="btn btn-primary mr-3"><span className="mr-3" ><i
                                                            className="fa fa-heart"></i></span>Like</button>
                                                        <button className="btn btn-secondary"><span className="mr-3" ><i
                                                            className="fa fa-reply"></i></span>Reply</button>
                                                    </div>
                                                    <div className="profile-uoloaded-post border-bottom-1 pb-5">
                                                        <img src={require('./../../images/profile/9.jpg')} alt="" className="img-fluid" />
                                                        <Link className="post-title" to={'#'}>
                                                            <h4>Collection of textile samples lay spread</h4>
                                                        </Link>
                                                        <p>A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning
                                                            of spare which enjoy whole heart.</p>
                                                        <button className="btn btn-primary mr-3"><span className="mr-3" ><i
                                                            className="fa fa-heart"></i></span>Like</button>
                                                        <button className="btn btn-secondary"><span className="mr-3" ><i
                                                            className="fa fa-reply"></i></span>Reply</button>
                                                    </div>
                                                    <div className="profile-uoloaded-post pb-5">
                                                        <img src={require('./../../images/profile/8.jpg')} alt="" className="img-fluid" />
                                                        <Link className="post-title" to={'#'}>
                                                            <h4>Collection of textile samples lay spread</h4>
                                                        </Link>
                                                        <p>A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning
                                                            of spare which enjoy whole heart.</p>
                                                        <button className="btn btn-primary mr-3"><span className="mr-3" ><i
                                                            className="fa fa-heart"></i></span>Like</button>
                                                        <button className="btn btn-secondary"><span className="mr-3" ><i
                                                            className="fa fa-reply"></i></span>Reply</button>
                                                    </div>
                                                    <div className="text-center mb-2"><Link to={'#'} className="btn btn-primary">Load More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="about-me" className="tab-pane fade">
                                                <div className="profile-about-me">
                                                    <div className="pt-4 border-bottom-1 pb-4">
                                                        <h4 className="text-primary">About Me</h4>
                                                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence was created for the
                                                            bliss of souls like mine.I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.</p>
                                                        <p>A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed
                                                            in a nice, gilded frame.</p>
                                                    </div>
                                                </div>
                                                <div className="profile-skills pt-2 border-bottom-1 pb-2">
                                                    <h4 className="text-primary mb-4">Skills</h4>
                                                    <Link to={'#'} className="btn btn-outline-dark btn-rounded pl-4 my-3 my-sm-0 pr-4 mr-3 m-b-10">Admin</Link>
                                                    <Link to={'#'} className="btn btn-outline-dark btn-rounded pl-4 my-3 my-sm-0 pr-4 mr-3 m-b-10">Dashboard</Link>
                                                    <Link to={'#'} className="btn btn-outline-dark btn-rounded pl-4 my-3 my-sm-0 pr-4 mr-3 m-b-10">Photoshop</Link>
                                                    <Link to={'#'} className="btn btn-outline-dark btn-rounded pl-4 my-3 my-sm-0 pr-4 mr-3 m-b-10">Bootstrap</Link>
                                                    <Link to={'#'} className="btn btn-outline-dark btn-rounded pl-4 my-3 my-sm-0 pr-4 mr-3 m-b-10">Responsive</Link>
                                                    <Link to={'#'} className="btn btn-outline-dark btn-rounded pl-4 my-3 my-sm-0 pr-4 mr-3 m-b-10">Crypto</Link>
                                                </div>
                                                <div className="profile-lang pt-5 border-bottom-1 pb-5">
                                                    <h4 className="text-primary mb-4">Language</h4><Link to={'#'} className="text-muted pr-3 f-s-16"><i
                                                        className="flag-icon flag-icon-us"></i> English</Link> <Link to={'#'} className="text-muted pr-3 f-s-16"><i
                                                            className="flag-icon flag-icon-fr"></i> French</Link>
                                                    <Link to={'#'} className="text-muted pr-3 f-s-16"><i
                                                        className="flag-icon flag-icon-bd"></i> Bangla</Link>
                                                </div>
                                                <div className="profile-personal-info">
                                                    <h4 className="text-primary mb-4">Personal Information</h4>
                                                    <div className="row mb-4">
                                                        <div className="col-3">
                                                            <h5 className="f-w-500">Name <span className="pull-right">:</span>
                                                            </h5>
                                                        </div>
                                                        <div className="col-9"><span>Mitchell C.Shay</span>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <div className="col-3">
                                                            <h5 className="f-w-500">Email <span className="pull-right">:</span>
                                                            </h5>
                                                        </div>
                                                        <div className="col-9"><span>example@examplel.com</span>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <div className="col-3">
                                                            <h5 className="f-w-500">Availability <span className="pull-right">:</span></h5>
                                                        </div>
                                                        <div className="col-9"><span>Full Time (Free Lancer)</span>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <div className="col-3">
                                                            <h5 className="f-w-500">Age <span className="pull-right">:</span>
                                                            </h5>
                                                        </div>
                                                        <div className="col-9"><span>27</span>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <div className="col-3">
                                                            <h5 className="f-w-500">Location <span className="pull-right">:</span></h5>
                                                        </div>
                                                        <div className="col-9"><span>Rosemont Avenue Melbourne,
                                                                Florida</span>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <div className="col-3">
                                                            <h5 className="f-w-500">Year Experience <span className="pull-right">:</span></h5>
                                                        </div>
                                                        <div className="col-9"><span>07 Year Experiences</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="profile-settings" className="tab-pane fade">
                                                <div className="pt-3">
                                                    <div className="settings-form">
                                                        <h4 className="text-primary">Account Setting</h4>
                                                        <form>
                                                            <div className="form-row">
                                                                <div className="form-group col-md-6">
                                                                    <label>Email</label>
                                                                    <input type="email" placeholder="Email" className="form-control" />
                                                                </div>
                                                                <div className="form-group col-md-6">
                                                                    <label>Password</label>
                                                                    <input type="password" placeholder="Password" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Address</label>
                                                                <input type="text" placeholder="1234 Main St" className="form-control" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Address 2</label>
                                                                <input type="text" placeholder="Apartment, studio, or floor" className="form-control" />
                                                            </div>
                                                            <div className="form-row">
                                                                <div className="form-group col-md-6">
                                                                    <label>City</label>
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                                <div className="form-group col-md-4">
                                                                    <label>State</label>
                                                                    <select className="form-control" id="inputState">
                                                                        <option selected="">Choose...</option>
                                                                        <option>Option 1</option>
                                                                        <option>Option 2</option>
                                                                        <option>Option 3</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-group col-md-2">
                                                                    <label>Zip</label>
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="gridCheck" />
                                                                    <label for="gridCheck" className="form-check-label">Check me out</label>
                                                                </div>
                                                            </div>
                                                            <button className="btn btn-primary" type="submit">Sign
                                                                in</button>
                                                        </form>
                                                    </div>
                                                </div>
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
export default Profile;