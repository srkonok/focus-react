import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, ButtonGroup, DropdownButton, Dropdown, FormControl, ButtonToolbar, InputGroup } from 'react-bootstrap'



function UiButtonGroup() {

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Basic </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary">Left</Button>
                                <Button variant="secondary">Middle</Button>
                                <Button variant="secondary">Right</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Button toolbar</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ButtonToolbar aria-label="Toolbar with button groups">
                                <ButtonGroup className="mr-2" aria-label="First group">
                                    <Button>1</Button>
                                    <Button>2</Button>
                                    <Button>3</Button>
                                    <Button>4</Button>
                                </ButtonGroup>

                                <ButtonGroup className="mr-2" aria-label="Second group">
                                    <Button>5</Button>
                                    <Button>6</Button>
                                    <Button>7</Button>
                                </ButtonGroup>

                                <ButtonGroup aria-label="Third group">
                                    <Button>8</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Group</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                                <ButtonGroup className="mr-2" aria-label="First group">
                                    <Button variant="secondary">1</Button>
                                    <Button variant="secondary">2</Button>
                                    <Button variant="secondary">3</Button>
                                    <Button variant="secondary">4</Button>
                                </ButtonGroup>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        type="text"
                                        placeholder="Input group example"
                                        aria-label="Input group example"
                                        aria-describedby="btnGroupAddon"
                                    />
                                </InputGroup>
                            </ButtonToolbar>

                            <ButtonToolbar
                                className="justify-content-between"
                                aria-label="Toolbar with Button groups"
                            >
                                <ButtonGroup aria-label="First group">
                                    <Button variant="secondary">1</Button>
                                    <Button variant="secondary">2</Button>
                                    <Button variant="secondary">3</Button>
                                    <Button variant="secondary">4</Button>
                                </ButtonGroup>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        type="text"
                                        placeholder="Input group example"
                                        aria-label="Input group example"
                                        aria-describedby="btnGroupAddon2"
                                    />
                                </InputGroup>
                            </ButtonToolbar>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Sizing</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-column">
                                <ButtonGroup size="lg">
                                    <Button>Left</Button>
                                    <Button>Middle</Button>
                                    <Button>Right</Button>
                                </ButtonGroup>

                                <ButtonGroup className="mt-3">
                                    <Button>Left</Button>
                                    <Button>Middle</Button>
                                    <Button>Right</Button>
                                </ButtonGroup>
                                <ButtonGroup size="sm" className="mt-3">
                                    <Button>Left</Button>
                                    <Button>Middle</Button>
                                    <Button>Right</Button>
                                </ButtonGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Nesting</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ButtonGroup>
                                <Button>1</Button>
                                <Button>2</Button>
                                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                </DropdownButton>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Vertical</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ButtonGroup vertical>
                                <Button>Button</Button>
                                <Button>Button</Button>
                                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                </DropdownButton>
                                <Button>Button</Button>
                                <Button>Button</Button>
                                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
                                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                </DropdownButton>
                                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
                                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                </DropdownButton>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                </Col>



            </Row>
        </>
    )
}

export default UiButtonGroup;