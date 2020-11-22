import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Modal, Button, Tab, Nav } from 'react-bootstrap'


function EmailInbox() {
    const [lgShow, setLgShow] = useState(false);

    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

    return (
        <>


            <Modal onHide={handleClose} animation={true} size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}>
                <div className="compose-content p-3">
                    <form action="#">
                        <div className="form-group">
                            <input type="text" className="form-control bg-transparent" placeholder=" To:" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control bg-transparent" placeholder=" Subject:" />
                        </div>
                        <div className="form-group">
                            <textarea id="email-compose-editor" className="textarea_editor form-control bg-transparent" rows="15" placeholder="Enter text ..."></textarea>
                        </div>
                    </form>
                    <h5 className="mb-4"><i className="fa fa-paperclip"></i> Attatchment</h5>
                    <form action="#" className="d-flex flex-column align-items-center justify-content-center">
                        <div className="fallback w-100">
                            <input type="file" className="dropify" data-default-file="" />
                        </div>
                    </form>

                    <div className="text-left mt-4">
                        <button className="btn btn-primary btn-sl-sm mr-3" type="button"><span
                            className="mr-2"><i className="fa fa-paper-plane"></i></span> Send</button>
                    </div>
                </div>
            </Modal>

            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            {/* <MailBox /> */}

                            <Tab.Container defaultActiveKey="inbox">
                                <div class="email-app">
                                    <div class="left-part bg-white ">
                                        <div>
                                            <div class="p-3" onClick={handleShow}><span class="btn btn-danger d-block text-white">Compose</span></div>
                                            <div class="divider"></div>
                                            <ul class="email-filters list-group">
                                                <li class="list-group-item">
                                                    <Nav.Link eventKey="inbox" className="p-0">
                                                        <span class="list-group-item-action ">
                                                            <i class="fa fa-inbox mr-2"></i> Inbox
                                                        </span>
                                                    </Nav.Link>
                                                </li>
                                                <li class="list-group-item">
                                                    <Nav.Link eventKey="sent" className="p-0">
                                                        <span class="list-group-item-action ">
                                                            <i class="fa fa-paper-plane mr-2"></i> Sent
                                                            </span>
                                                    </Nav.Link>
                                                </li>
                                                <li class="list-group-item">
                                                    <Nav.Link eventKey="drafts" className="p-0">
                                                        <span class="list-group-item-action ">
                                                            <i class="fa fa-file mr-2"></i> Drafts
                                                        </span>
                                                    </Nav.Link>
                                                </li>
                                                <li class="list-group-item">
                                                    <Nav.Link eventKey="spam" className="p-0">
                                                        <span class="list-group-item-action ">
                                                            <i class="fa fa-exclamation-circle mr-2"></i> Spam
                                                        </span>
                                                    </Nav.Link>
                                                </li>
                                                <li class="list-group-item">
                                                    <Nav.Link eventKey="trash" className="p-0">
                                                        <span class="list-group-item-action ">
                                                            <i class="fa fa-trash mr-2"></i> Trash
                                                        </span>
                                                    </Nav.Link>
                                                </li>
                                                <li class="list-group-item">
                                                    <hr />
                                                </li>
                                                <li class="list-group-item">
                                                    <Nav.Link eventKey="starred" className="p-0">
                                                        <span class="list-group-item-action ">
                                                            <i class="fa fa-star mr-2"></i> Starred
                                                        </span>
                                                    </Nav.Link>
                                                </li>
                                                <li class="list-group-item" disabled="">
                                                    <Nav.Link eventKey="important" className="p-0">
                                                        <span class="list-group-item-action">
                                                            <i class="fa fa-bookmark mr-2"></i> Important
                                                        </span>
                                                    </Nav.Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div class="right-part contact-list bg-white">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="inbox">
                                                <Tab.Container defaultActiveKey="inbox-msg-1">
                                                    <div class="right-left-part show-right-left-panel"><span class="bg-primary show-left-part text-white d-block d-lg-none "><i class="fa fa-chevron-right"></i></span>
                                                        <div class="bg-light p-3">
                                                            <input type="text" class="form-control" placeholder="Search emails" value="" />
                                                        </div>
                                                        <div class="bg-light px-3 pb-3 border-bottom">
                                                            <div class="d-flex" role="group">
                                                                <button type="button" class="btn btn-outline-secondary w-100"><i class="fa fa-trash"></i></button>
                                                                <div class="w-100">
                                                                    <div class="btn-group w-100" role="group">
                                                                        <div class="w-100 dropdown">
                                                                            <button type="button" aria-haspopup="true" aria-expanded="false" class="btn  w-100 btn btn-secondary"><i class="fa fa-folder"></i></button>
                                                                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu">
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Inbox</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Sent</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Draft</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Spam</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Trash</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="w-100">
                                                                    <div class="btn-group w-100" role="group">
                                                                        <div class="w-100 dropdown">
                                                                            <button type="button" aria-haspopup="true" aria-expanded="false" class="btn  w-100 btn btn-secondary"><i class="fa fa-tags"></i></button>
                                                                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu">
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Promotional</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Social</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Health</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul class="list-group email-list">
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="inbox-msg-1" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Robert Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">Richard McClintock, a Latin professor at Hampden-Sydney</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-warning">Promotional</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">7:10 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom bg-light">
                                                                <Nav.Link eventKey="inbox-msg-2" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">David Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">The standard chunk of Lorem Ipsum used since the 1500s</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-success">Social</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">5:45 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="inbox-msg-3" className="p-0">
                                                                    <div class="row"> <div class="col-10">
                                                                        <h6 class="font-bold mb-1 mt-1">Maria Rodriguez</h6>
                                                                        <div>
                                                                            <p class="text-truncate w-100 mb-0">Cicero are also reproduced in their exact original form</p>
                                                                            <div class="mt-2 d-flex align-items-center">
                                                                                <div class="mr-2"><span class="badge badge-danger">Health</span></div>
                                                                                <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                <div class="ml-auto"><span class="text-muted font-12">11:32 AM</span></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="inbox-msg-4" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Maria Hernandez</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">the majority have suffered alteration in some form, by injected </p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge "></span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">11:55 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="inbox-msg-5" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Robert Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">Lorem Ipsum is therefore always free from repetition, injected humour</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-danger">Health</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(255, 193, 7)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">6:58 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="inbox-msg-6" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Maria Hernandez</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">scrambled it to make a type specimen book</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-warning">Promotional</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">7:03 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="inbox-msg-7" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">James Johnson</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">the 1960s with the release of Letraset sheets containings</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-success">Social</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(255, 193, 7)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">9:11 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                        </ul>

                                                    </div>

                                                    <div class="right-right-part show-right-right-panel"><span class="hide-right-right-part d-block d-md-none right-right-part-open"><i class="fa fa-times"></i></span>
                                                        <Tab.Content>
                                                            <Tab.Pane eventKey="inbox-msg-1">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>

                                                            <Tab.Pane eventKey="inbox-msg-2">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="inbox-msg-3">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="inbox-msg-4">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="inbox-msg-5">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="inbox-msg-6">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="inbox-msg-7">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>

                                                        </Tab.Content>
                                                    </div>
                                                </Tab.Container>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="sent">
                                                <Tab.Container defaultActiveKey="sent-msg-1">
                                                    <div class="right-left-part show-right-left-panel"><span class="bg-primary show-left-part text-white d-block d-lg-none "><i class="fa fa-chevron-right"></i></span>
                                                        <div class="bg-light p-3">
                                                            <input type="text" class="form-control" placeholder="Search emails" value="" />
                                                        </div>
                                                        <div class="bg-light px-3 pb-3 border-bottom">
                                                            <div class="d-flex" role="group">
                                                                <button type="button" class="btn btn-outline-secondary w-100"><i class="fa fa-trash"></i></button>
                                                                <div class="w-100">
                                                                    <div class="btn-group w-100" role="group">
                                                                        <div class="w-100 dropdown">
                                                                            <button type="button" aria-haspopup="true" aria-expanded="false" class="btn  w-100 btn btn-secondary"><i class="fa fa-folder"></i></button>
                                                                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu">
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Inbox</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Sent</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Draft</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Spam</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Trash</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="w-100">
                                                                    <div class="btn-group w-100" role="group">
                                                                        <div class="w-100 dropdown">
                                                                            <button type="button" aria-haspopup="true" aria-expanded="false" class="btn  w-100 btn btn-secondary"><i class="fa fa-tags"></i></button>
                                                                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu">
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Promotional</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Social</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Health</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul class="list-group email-list">
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="sent-msg-1" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Robert Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">Richard McClintock, a Latin professor at Hampden-Sydney</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-warning">Promotional</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">7:10 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom bg-light">
                                                                <Nav.Link eventKey="sent-msg-2" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">David Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">The standard chunk of Lorem Ipsum used since the 1500s</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-success">Social</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">5:45 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="sent-msg-3" className="p-0">
                                                                    <div class="row"> <div class="col-10">
                                                                        <h6 class="font-bold mb-1 mt-1">Maria Rodriguez</h6>
                                                                        <div>
                                                                            <p class="text-truncate w-100 mb-0">Cicero are also reproduced in their exact original form</p>
                                                                            <div class="mt-2 d-flex align-items-center">
                                                                                <div class="mr-2"><span class="badge badge-danger">Health</span></div>
                                                                                <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                <div class="ml-auto"><span class="text-muted font-12">11:32 AM</span></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="sent-msg-4" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Maria Hernandez</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">the majority have suffered alteration in some form, by injected </p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge "></span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">11:55 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="sent-msg-5" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Robert Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">Lorem Ipsum is therefore always free from repetition, injected humour</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-danger">Health</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(255, 193, 7)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">6:58 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="sent-msg-6" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Maria Hernandez</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">scrambled it to make a type specimen book</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-warning">Promotional</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">7:03 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="sent-msg-7" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">James Johnson</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">the 1960s with the release of Letraset sheets containings</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-success">Social</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(255, 193, 7)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">9:11 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                        </ul>

                                                    </div>

                                                    <div class="right-right-part show-right-right-panel"><span class="hide-right-right-part d-block d-md-none right-right-part-open"><i class="fa fa-times"></i></span>
                                                        <Tab.Content>
                                                            <Tab.Pane eventKey="sent-msg-1">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>

                                                            <Tab.Pane eventKey="sent-msg-2">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="sent-msg-3">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="sent-msg-4">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="sent-msg-5">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="sent-msg-6">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="sent-msg-7">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>

                                                        </Tab.Content>
                                                    </div>
                                                </Tab.Container>
                                            </Tab.Pane>


                                            <Tab.Pane eventKey="drafts">
                                                <Tab.Container defaultActiveKey="drafts-msg-1">
                                                    <div class="right-left-part show-right-left-panel"><span class="bg-primary show-left-part text-white d-block d-lg-none "><i class="fa fa-chevron-right"></i></span>
                                                        <div class="bg-light p-3">
                                                            <input type="text" class="form-control" placeholder="Search emails" value="" />
                                                        </div>
                                                        <div class="bg-light px-3 pb-3 border-bottom">
                                                            <div class="d-flex" role="group">
                                                                <button type="button" class="btn btn-outline-secondary w-100"><i class="fa fa-trash"></i></button>
                                                                <div class="w-100">
                                                                    <div class="btn-group w-100" role="group">
                                                                        <div class="w-100 dropdown">
                                                                            <button type="button" aria-haspopup="true" aria-expanded="false" class="btn  w-100 btn btn-secondary"><i class="fa fa-folder"></i></button>
                                                                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu">
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Inbox</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Sent</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Draft</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Spam</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Trash</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="w-100">
                                                                    <div class="btn-group w-100" role="group">
                                                                        <div class="w-100 dropdown">
                                                                            <button type="button" aria-haspopup="true" aria-expanded="false" class="btn  w-100 btn btn-secondary"><i class="fa fa-tags"></i></button>
                                                                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu">
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Promotional</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Social</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Health</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul class="list-group email-list">
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="drafts-msg-1" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Robert Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">Richard McClintock, a Latin professor at Hampden-Sydney</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-warning">Promotional</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">7:10 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom bg-light">
                                                                <Nav.Link eventKey="drafts-msg-2" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">David Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">The standard chunk of Lorem Ipsum used since the 1500s</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-success">Social</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">5:45 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="drafts-msg-3" className="p-0">
                                                                    <div class="row"> <div class="col-10">
                                                                        <h6 class="font-bold mb-1 mt-1">Maria Rodriguez</h6>
                                                                        <div>
                                                                            <p class="text-truncate w-100 mb-0">Cicero are also reproduced in their exact original form</p>
                                                                            <div class="mt-2 d-flex align-items-center">
                                                                                <div class="mr-2"><span class="badge badge-danger">Health</span></div>
                                                                                <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                <div class="ml-auto"><span class="text-muted font-12">11:32 AM</span></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="drafts-msg-4" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Maria Hernandez</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">the majority have suffered alteration in some form, by injected </p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge "></span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">11:55 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="drafts-msg-5" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Robert Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">Lorem Ipsum is therefore always free from repetition, injected humour</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-danger">Health</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(255, 193, 7)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">6:58 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="drafts-msg-6" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Maria Hernandez</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">scrambled it to make a type specimen book</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-warning">Promotional</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">7:03 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="drafts-msg-7" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">James Johnson</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">the 1960s with the release of Letraset sheets containings</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-success">Social</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(255, 193, 7)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">9:11 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                        </ul>

                                                    </div>

                                                    <div class="right-right-part show-right-right-panel"><span class="hide-right-right-part d-block d-md-none right-right-part-open"><i class="fa fa-times"></i></span>
                                                        <Tab.Content>
                                                            <Tab.Pane eventKey="drafts-msg-1">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>

                                                            <Tab.Pane eventKey="drafts-msg-2">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="drafts-msg-3">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="drafts-msg-4">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="drafts-msg-5">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="drafts-msg-6">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="drafts-msg-7">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>

                                                        </Tab.Content>
                                                    </div>
                                                </Tab.Container>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="spam">
                                                <Tab.Container defaultActiveKey="spam-msg-1">
                                                    <div class="right-left-part show-right-left-panel"><span class="bg-primary show-left-part text-white d-block d-lg-none "><i class="fa fa-chevron-right"></i></span>
                                                        <div class="bg-light p-3">
                                                            <input type="text" class="form-control" placeholder="Search emails" value="" />
                                                        </div>
                                                        <div class="bg-light px-3 pb-3 border-bottom">
                                                            <div class="d-flex" role="group">
                                                                <button type="button" class="btn btn-outline-secondary w-100"><i class="fa fa-trash"></i></button>
                                                                <div class="w-100">
                                                                    <div class="btn-group w-100" role="group">
                                                                        <div class="w-100 dropdown">
                                                                            <button type="button" aria-haspopup="true" aria-expanded="false" class="btn  w-100 btn btn-secondary"><i class="fa fa-folder"></i></button>
                                                                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu">
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Inbox</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Sent</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Draft</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Spam</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Trash</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="w-100">
                                                                    <div class="btn-group w-100" role="group">
                                                                        <div class="w-100 dropdown">
                                                                            <button type="button" aria-haspopup="true" aria-expanded="false" class="btn  w-100 btn btn-secondary"><i class="fa fa-tags"></i></button>
                                                                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu">
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Promotional</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Social</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Health</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul class="list-group email-list">
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="spam-msg-1" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Robert Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">Richard McClintock, a Latin professor at Hampden-Sydney</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-warning">Promotional</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">7:10 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom bg-light">
                                                                <Nav.Link eventKey="spam-msg-2" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">David Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">The standard chunk of Lorem Ipsum used since the 1500s</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-success">Social</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">5:45 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="spam-msg-3" className="p-0">
                                                                    <div class="row"> <div class="col-10">
                                                                        <h6 class="font-bold mb-1 mt-1">Maria Rodriguez</h6>
                                                                        <div>
                                                                            <p class="text-truncate w-100 mb-0">Cicero are also reproduced in their exact original form</p>
                                                                            <div class="mt-2 d-flex align-items-center">
                                                                                <div class="mr-2"><span class="badge badge-danger">Health</span></div>
                                                                                <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                <div class="ml-auto"><span class="text-muted font-12">11:32 AM</span></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="spam-msg-4" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Maria Hernandez</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">the majority have suffered alteration in some form, by injected </p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge "></span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">11:55 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="spam-msg-5" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Robert Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">Lorem Ipsum is therefore always free from repetition, injected humour</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-danger">Health</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(255, 193, 7)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">6:58 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="spam-msg-6" className="p-0">
                                                                    <div class="row">                                                                            <div class="col-1">
                                                                        <div class="custom-control custom-checkbox">
                                                                            <input type="checkbox" id="check18" class="custom-control-input" />
                                                                            <label class="custom-control-label" for="check18"> </label>
                                                                        </div>
                                                                    </div>
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Maria Hernandez</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">scrambled it to make a type specimen book</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-warning">Promotional</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">7:03 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="spam-msg-7" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">James Johnson</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">the 1960s with the release of Letraset sheets containings</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-success">Social</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(255, 193, 7)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">9:11 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                        </ul>

                                                    </div>

                                                    <div class="right-right-part show-right-right-panel"><span class="hide-right-right-part d-block d-md-none right-right-part-open"><i class="fa fa-times"></i></span>
                                                        <Tab.Content>
                                                            <Tab.Pane eventKey="spam-msg-1">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>

                                                            <Tab.Pane eventKey="spam-msg-2">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="spam-msg-3">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="spam-msg-4">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="spam-msg-5">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="spam-msg-6">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="spam-msg-7">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>

                                                        </Tab.Content>
                                                    </div>
                                                </Tab.Container>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="trash">
                                                <Tab.Container defaultActiveKey="trash-msg-1">
                                                    <div class="right-left-part show-right-left-panel"><span class="bg-primary show-left-part text-white d-block d-lg-none "><i class="fa fa-chevron-right"></i></span>
                                                        <div class="bg-light p-3">
                                                            <input type="text" class="form-control" placeholder="Search emails" value="" />
                                                        </div>
                                                        <div class="bg-light px-3 pb-3 border-bottom">
                                                            <div class="d-flex" role="group">
                                                                <button type="button" class="btn btn-outline-secondary w-100"><i class="fa fa-trash"></i></button>
                                                                <div class="w-100">
                                                                    <div class="btn-group w-100" role="group">
                                                                        <div class="w-100 dropdown">
                                                                            <button type="button" aria-haspopup="true" aria-expanded="false" class="btn  w-100 btn btn-secondary"><i class="fa fa-folder"></i></button>
                                                                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu">
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Inbox</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Sent</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Draft</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Spam</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Trash</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="w-100">
                                                                    <div class="btn-group w-100" role="group">
                                                                        <div class="w-100 dropdown">
                                                                            <button type="button" aria-haspopup="true" aria-expanded="false" class="btn  w-100 btn btn-secondary"><i class="fa fa-tags"></i></button>
                                                                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu">
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Promotional</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Social</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Health</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul class="list-group email-list">
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="trash-msg-1" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Robert Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">Richard McClintock, a Latin professor at Hampden-Sydney</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-warning">Promotional</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">7:10 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom bg-light">
                                                                <Nav.Link eventKey="trash-msg-2" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">David Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">The standard chunk of Lorem Ipsum used since the 1500s</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-success">Social</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">5:45 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="trash-msg-3" className="p-0">
                                                                    <div class="row"> <div class="col-10">
                                                                        <h6 class="font-bold mb-1 mt-1">Maria Rodriguez</h6>
                                                                        <div>
                                                                            <p class="text-truncate w-100 mb-0">Cicero are also reproduced in their exact original form</p>
                                                                            <div class="mt-2 d-flex align-items-center">
                                                                                <div class="mr-2"><span class="badge badge-danger">Health</span></div>
                                                                                <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                <div class="ml-auto"><span class="text-muted font-12">11:32 AM</span></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="trash-msg-4" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Maria Hernandez</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">the majority have suffered alteration in some form, by injected </p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge "></span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">11:55 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="trash-msg-5" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Robert Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">Lorem Ipsum is therefore always free from repetition, injected humour</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-danger">Health</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(255, 193, 7)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">6:58 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="trash-msg-6" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Maria Hernandez</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">scrambled it to make a type specimen book</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-warning">Promotional</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">7:03 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="trash-msg-7" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">James Johnson</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">the 1960s with the release of Letraset sheets containings</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-success">Social</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(255, 193, 7)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">9:11 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                        </ul>

                                                    </div>

                                                    <div class="right-right-part show-right-right-panel"><span class="hide-right-right-part d-block d-md-none right-right-part-open"><i class="fa fa-times"></i></span>
                                                        <Tab.Content>
                                                            <Tab.Pane eventKey="trash-msg-1">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>

                                                            <Tab.Pane eventKey="trash-msg-2">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="trash-msg-3">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="trash-msg-4">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="trash-msg-5">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="trash-msg-6">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="trash-msg-7">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>

                                                        </Tab.Content>
                                                    </div>
                                                </Tab.Container>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="starred">
                                                <Tab.Container defaultActiveKey="starred-msg-1">
                                                    <div class="right-left-part show-right-left-panel"><span class="bg-primary show-left-part text-white d-block d-lg-none "><i class="fa fa-chevron-right"></i></span>
                                                        <div class="bg-light p-3">
                                                            <input type="text" class="form-control" placeholder="Search emails" value="" />
                                                        </div>
                                                        <div class="bg-light px-3 pb-3 border-bottom">
                                                            <div class="d-flex" role="group">
                                                                <button type="button" class="btn btn-outline-secondary w-100"><i class="fa fa-trash"></i></button>
                                                                <div class="w-100">
                                                                    <div class="btn-group w-100" role="group">
                                                                        <div class="w-100 dropdown">
                                                                            <button type="button" aria-haspopup="true" aria-expanded="false" class="btn  w-100 btn btn-secondary"><i class="fa fa-folder"></i></button>
                                                                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu">
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Inbox</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Sent</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Draft</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Spam</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Trash</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="w-100">
                                                                    <div class="btn-group w-100" role="group">
                                                                        <div class="w-100 dropdown">
                                                                            <button type="button" aria-haspopup="true" aria-expanded="false" class="btn  w-100 btn btn-secondary"><i class="fa fa-tags"></i></button>
                                                                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu">
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Promotional</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Social</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Health</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul class="list-group email-list">
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="starred-msg-1" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Robert Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">Richard McClintock, a Latin professor at Hampden-Sydney</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-warning">Promotional</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">7:10 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom bg-light">
                                                                <Nav.Link eventKey="starred-msg-2" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">David Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">The standard chunk of Lorem Ipsum used since the 1500s</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-success">Social</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">5:45 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="starred-msg-3" className="p-0">
                                                                    <div class="row"> <div class="col-10">
                                                                        <h6 class="font-bold mb-1 mt-1">Maria Rodriguez</h6>
                                                                        <div>
                                                                            <p class="text-truncate w-100 mb-0">Cicero are also reproduced in their exact original form</p>
                                                                            <div class="mt-2 d-flex align-items-center">
                                                                                <div class="mr-2"><span class="badge badge-danger">Health</span></div>
                                                                                <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                <div class="ml-auto"><span class="text-muted font-12">11:32 AM</span></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="starred-msg-4" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Maria Hernandez</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">the majority have suffered alteration in some form, by injected </p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge "></span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">11:55 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="starred-msg-5" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Robert Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">Lorem Ipsum is therefore always free from repetition, injected humour</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-danger">Health</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(255, 193, 7)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">6:58 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="starred-msg-6" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Maria Hernandez</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">scrambled it to make a type specimen book</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-warning">Promotional</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">7:03 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="starred-msg-7" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">James Johnson</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">the 1960s with the release of Letraset sheets containings</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-success">Social</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(255, 193, 7)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">9:11 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                        </ul>

                                                    </div>

                                                    <div class="right-right-part show-right-right-panel"><span class="hide-right-right-part d-block d-md-none right-right-part-open"><i class="fa fa-times"></i></span>
                                                        <Tab.Content>
                                                            <Tab.Pane eventKey="starred-msg-1">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>

                                                            <Tab.Pane eventKey="starred-msg-2">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="starred-msg-3">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="starred-msg-4">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="starred-msg-5">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="starred-msg-6">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="starred-msg-7">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>

                                                        </Tab.Content>
                                                    </div>
                                                </Tab.Container>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="important">
                                                <Tab.Container defaultActiveKey="important-msg-1">
                                                    <div class="right-left-part show-right-left-panel"><span class="bg-primary show-left-part text-white d-block d-lg-none "><i class="fa fa-chevron-right"></i></span>
                                                        <div class="bg-light p-3">
                                                            <input type="text" class="form-control" placeholder="Search emails" value="" />
                                                        </div>
                                                        <div class="bg-light px-3 pb-3 border-bottom">
                                                            <div class="d-flex" role="group">
                                                                <button type="button" class="btn btn-outline-secondary w-100"><i class="fa fa-trash"></i></button>
                                                                <div class="w-100">
                                                                    <div class="btn-group w-100" role="group">
                                                                        <div class="w-100 dropdown">
                                                                            <button type="button" aria-haspopup="true" aria-expanded="false" class="btn  w-100 btn btn-secondary"><i class="fa fa-folder"></i></button>
                                                                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu">
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Inbox</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Sent</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Draft</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Spam</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Trash</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="w-100">
                                                                    <div class="btn-group w-100" role="group">
                                                                        <div class="w-100 dropdown">
                                                                            <button type="button" aria-haspopup="true" aria-expanded="false" class="btn  w-100 btn btn-secondary"><i class="fa fa-tags"></i></button>
                                                                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu">
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Promotional</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Social</button>
                                                                                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Health</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ul class="list-group email-list">
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="important-msg-1" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Robert Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">Richard McClintock, a Latin professor at Hampden-Sydney</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-warning">Promotional</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">7:10 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom bg-light">
                                                                <Nav.Link eventKey="important-msg-2" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">David Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">The standard chunk of Lorem Ipsum used since the 1500s</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-success">Social</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">5:45 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="important-msg-3" className="p-0">
                                                                    <div class="row"> <div class="col-10">
                                                                        <h6 class="font-bold mb-1 mt-1">Maria Rodriguez</h6>
                                                                        <div>
                                                                            <p class="text-truncate w-100 mb-0">Cicero are also reproduced in their exact original form</p>
                                                                            <div class="mt-2 d-flex align-items-center">
                                                                                <div class="mr-2"><span class="badge badge-danger">Health</span></div>
                                                                                <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                <div class="ml-auto"><span class="text-muted font-12">11:32 AM</span></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="important-msg-4" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Maria Hernandez</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">the majority have suffered alteration in some form, by injected </p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge "></span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">11:55 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="important-msg-5" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Robert Smith</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">Lorem Ipsum is therefore always free from repetition, injected humour</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-danger">Health</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(255, 193, 7)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">6:58 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="important-msg-6" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">Maria Hernandez</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">scrambled it to make a type specimen book</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-warning">Promotional</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(73, 80, 87)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">7:03 AM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                            <li class="list-group-item p-3 border-bottom ">
                                                                <Nav.Link eventKey="important-msg-7" className="p-0">
                                                                    <div class="row">
                                                                        <div class="col-10">
                                                                            <h6 class="font-bold mb-1 mt-1">James Johnson</h6>
                                                                            <div>
                                                                                <p class="text-truncate w-100 mb-0">the 1960s with the release of Letraset sheets containings</p>
                                                                                <div class="mt-2 d-flex align-items-center">
                                                                                    <div class="mr-2"><span class="badge badge-success">Social</span></div>
                                                                                    <div class=""><span class="d-flex "><i class="font-14 mr-2 fa fa-star" style={{ "color": "rgb(255, 193, 7)" }}></i><i class="font-14 fa fa-bookmark" style={{ "color": "rgb(255, 193, 7)" }}></i></span></div>
                                                                                    <div class="ml-auto"><span class="text-muted font-12">9:11 PM</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Nav.Link>
                                                            </li>
                                                        </ul>

                                                    </div>

                                                    <div class="right-right-part show-right-right-panel"><span class="hide-right-right-part d-block d-md-none right-right-part-open"><i class="fa fa-times"></i></span>
                                                        <Tab.Content>
                                                            <Tab.Pane eventKey="important-msg-1">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>

                                                            <Tab.Pane eventKey="important-msg-2">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="important-msg-3">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="important-msg-4">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="important-msg-5">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="important-msg-6">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="important-msg-7">
                                                                <div class="mail-details">
                                                                    <div class="card-body border-bottom">
                                                                        <h4 class="mb-0">literature from 45 BC, making<span class="ml-1 badge badge-success">Social</span></h4></div>
                                                                    <div class="card-body border-bottom">
                                                                        <div class="d-flex align-items-center"><img src={require('./../../images/avatar/1.jpg')} alt="user" class="rounded-circle" width="45" />
                                                                            <div class="ml-2">
                                                                                <h5 class="mb-0 font-16 font-medium">David Smith</h5><span>to me</span></div>
                                                                            <div class="ml-auto"><span>5:45 PM</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>

                                                        </Tab.Content>
                                                    </div>
                                                </Tab.Container>
                                            </Tab.Pane>

                                        </Tab.Content>

                                    </div>
                                </div>

                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default EmailInbox;