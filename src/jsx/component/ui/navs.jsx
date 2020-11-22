import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, Nav, } from 'react-bootstrap'



function UiNavs() {

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Base Nav</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Nav
                                activeKey="/home"
                                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                            >
                                <Nav.Item>
                                    <Nav.Link href="/home">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="disabled" disabled>
                                        Disabled
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Nav defaultActiveKey="/home" as="ul">
                                <Nav.Item as="li">
                                    <Nav.Link href="/home">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Alignment and orientation</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Nav className="justify-content-center" activeKey="/home">
                                <Nav.Item>
                                    <Nav.Link href="/home">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="disabled" disabled>
                                        Disabled
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <p className="text-center mt-4 mb-4">Or right-aligned</p>
                            <Nav className="justify-content-end" activeKey="/home">
                                <Nav.Item>
                                    <Nav.Link href="/home">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="disabled" disabled>
                                        Disabled
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Vertical</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/home">Active</Nav.Link>
                                <Nav.Link eventKey="link-1">Link</Nav.Link>
                                <Nav.Link eventKey="link-2">Link</Nav.Link>
                                <Nav.Link eventKey="disabled" disabled>
                                    Disabled
                            </Nav.Link>
                            </Nav>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Tabs</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Nav variant="tabs" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link href="/home">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="disabled" disabled>
                                        Disabled
                                </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Pills</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link href="/home">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="disabled" disabled>
                                        Disabled
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Body>
                    </Card>
                </Col>


                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Fill and justify</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Nav fill variant="tabs" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link href="/home">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="disabled" disabled>
                                        Disabled
                                </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Nav justify variant="tabs" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link href="/home">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="disabled" disabled>
                                        Disabled
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </>
    )
}

export default UiNavs;