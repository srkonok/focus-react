import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, Nav, NavDropdown, Form, FormControl, Button, Navbar, InputGroup } from 'react-bootstrap'



function UiNavbar() {

    return (
        <>
            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Basic</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar bg="light" expand="lg">
                                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#link">Link</Nav.Link>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <Form inline>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                        <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>


                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Brand</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar bg="light">
                                <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                            </Navbar>
                            <br />
                            <Navbar bg="light">
                                <Navbar.Brand>Brand text</Navbar.Brand>
                            </Navbar>
                            <br />
                            <Navbar bg="dark">
                                <Navbar.Brand href="#home">
                                    <img
                                        src="/logo.svg"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                        alt="React Bootstrap logo"
                                    />
                                </Navbar.Brand>
                            </Navbar>
                            <br />
                            <Navbar bg="dark" variant="dark">
                                <Navbar.Brand href="#home">
                                    <img
                                        alt=""
                                        src="/logo.svg"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    />{' '}
                                    React Bootstrap
                                </Navbar.Brand>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Forms</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar className="bg-light justify-content-between">
                                <Form inline>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </Form>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                                    <Button type="submit">Submit</Button>
                                </Form>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Text and Non-nav links</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar>
                                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                                <Navbar.Toggle />
                                <Navbar.Collapse className="justify-content-end">
                                    <Navbar.Text>
                                        Signed in as: <a href="#login">Mark Otto</a>
                                    </Navbar.Text>
                                </Navbar.Collapse>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Color schemes</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar bg="dark" variant="dark">
                                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#features">Features</Nav.Link>
                                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                                </Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-info">Search</Button>
                                </Form>
                            </Navbar>
                            <br />
                            <Navbar bg="primary" variant="dark">
                                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#features">Features</Nav.Link>
                                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                                </Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-light">Search</Button>
                                </Form>
                            </Navbar>

                            <br />
                            <Navbar bg="light" variant="light">
                                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#features">Features</Nav.Link>
                                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                                </Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-primary">Search</Button>
                                </Form>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </>
    )
}

export default UiNavbar;