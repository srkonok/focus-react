import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, InputGroup, FormControl, DropdownButton, Dropdown, Button } from 'react-bootstrap'



function UiInputGroup() {

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>InputGroup</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>

                            <label htmlFor="basic-url">Your vanity URL</label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon3">
                                        https://example.com/users/
                                </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="basic-url" aria-describedby="basic-addon3" />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>$</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Amount (to the nearest dollar)" />
                                <InputGroup.Append>
                                    <InputGroup.Text>.00</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>

                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>With textarea</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl as="textarea" aria-label="With textarea" />
                            </InputGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Sizing</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            </InputGroup>
                            <br />
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <br />
                            <InputGroup size="lg">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                            </InputGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Checkboxes and radios</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                </InputGroup.Prepend>
                                <FormControl aria-label="Text input with checkbox" />
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Radio aria-label="Radio button for following text input" />
                                </InputGroup.Prepend>
                                <FormControl aria-label="Text input with radio button" />
                            </InputGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Multiple inputs</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>First and last name</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl />
                                <FormControl />
                            </InputGroup>
                        </Card.Body>
                    </Card>
                </Col>


                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Multiple addons</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <InputGroup.Text>0.00</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Recipient's username"
                                    aria-label="Amount (to the nearest dollar)"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Recipient's username"
                                    aria-label="Amount (to the nearest dollar)"
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <InputGroup.Text>0.00</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Button addons</Card.Title>
                        </Card.Header>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>InputGroup</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <Button variant="outline-secondary">Button</Button>
                                </InputGroup.Prepend>
                                <FormControl aria-describedby="basic-addon1" />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary">Button</Button>
                                </InputGroup.Append>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <Button variant="outline-secondary">Button</Button>
                                    <Button variant="outline-secondary">Button</Button>
                                </InputGroup.Prepend>
                                <FormControl aria-describedby="basic-addon1" />
                            </InputGroup>

                            <InputGroup>
                                <FormControl
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary">Button</Button>
                                    <Button variant="outline-secondary">Button</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Buttons with Dropdowns#</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <InputGroup className="mb-3">
                                <DropdownButton
                                    as={InputGroup.Prepend}
                                    variant="outline-secondary"
                                    title="Dropdown"
                                    id="input-group-dropdown-1"
                                >
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                </DropdownButton>
                                <FormControl aria-describedby="basic-addon1" />
                            </InputGroup>

                            <InputGroup>
                                <FormControl
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />

                                <DropdownButton
                                    as={InputGroup.Append}
                                    variant="outline-secondary"
                                    title="Dropdown"
                                    id="input-group-dropdown-2"
                                >
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                </DropdownButton>
                            </InputGroup>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default UiInputGroup;