import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, Dropdown, DropdownButton, ButtonToolbar, ButtonGroup, Button, SplitButton } from 'react-bootstrap'

import CustomDropdown from './dropdown-custom'



function UiDropdowns() {

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Basic</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Basic</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Basic</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ButtonToolbar>
                                {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
                                    variant => (
                                        <DropdownButton className="mr-3"
                                            title={variant}
                                            variant={variant.toLowerCase()}
                                            id={`dropdown-variants-${variant}`}
                                            key={variant}
                                        >
                                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" active>
                                                Active Item
        </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </DropdownButton>
                                    ),
                                )}
                            </ButtonToolbar>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Split button</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Dropdown as={ButtonGroup}>
                                <Button variant="success">Split Button</Button>

                                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Sizing</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ButtonToolbar className="mb-3 mr-3">
                                {[DropdownButton, SplitButton].map((DropdownType, idx) => (
                                    <DropdownType className="mr-3"
                                        size="lg"
                                        title="Drop small"
                                        id={`dropdown-button-drop-${idx}`}
                                        key={idx}
                                    >
                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </DropdownType>
                                ))}
                            </ButtonToolbar>

                            <ButtonToolbar>
                                {[DropdownButton, SplitButton].map((DropdownType, idx) => (
                                    <DropdownType className="mr-3"
                                        size="sm"
                                        variant="secondary"
                                        title="Drop small"
                                        id={`dropdown-button-drop-${idx}`}
                                        key={idx}
                                    >
                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </DropdownType>
                                ))}
                            </ButtonToolbar>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Basic</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ButtonToolbar>
                                {['up', 'down', 'left', 'right'].map(direction => (
                                    <DropdownButton className="mr-3 mb-3"
                                        drop={direction}
                                        variant="secondary"
                                        title={` Drop ${direction} `}
                                        id={`dropdown-button-drop-${direction}`}
                                        key={direction}
                                    >
                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </DropdownButton>
                                ))}
                            </ButtonToolbar>

                            <ButtonToolbar>
                                {['up', 'down', 'left', 'right'].map(direction => (
                                    <SplitButton className="mr-3 mb-3"
                                        drop={direction}
                                        variant="secondary"
                                        title={`Drop ${direction}`}
                                        id={`dropdown-button-drop-${direction}`}
                                        key={direction}
                                    >
                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </SplitButton>
                                ))}
                            </ButtonToolbar>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Drop directions</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <DropdownButton className="mr-3"
                                alignRight
                                title="Dropdown right"
                                id="dropdown-menu-align-right"
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </DropdownButton>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Drop directions</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ButtonToolbar>
                                <Dropdown  className="mr-3">
                                    <Dropdown.Toggle id="dropdown-custom-1">Pow! Zoom!</Dropdown.Toggle>
                                    <Dropdown.Menu className="super-colors">
                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3" active>
                                            Active Item
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown as={ButtonGroup}>
                                    <Button variant="info">mix it up style-wise</Button>
                                    <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
                                    <Dropdown.Menu className="super-colors">
                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3" active>
                                            Active Item
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </ButtonToolbar>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Custom Dropdown</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <CustomDropdown />
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default UiDropdowns;