import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import BootsrtapValidation from './bootstrapValidation';
import { Row, Col, Card, Form, Button } from 'react-bootstrap'



function UiForms() {

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>


                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Form controls</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Example select</Form.Label>
                                    <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect2">
                                    <Form.Label>Example multiple select</Form.Label>
                                    <Form.Control as="select" multiple>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Example textarea</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Sizing</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Control size="lg" type="text" placeholder="Large text" />
                            <br />
                            <Form.Control type="text" placeholder="Normal text" />
                            <br />
                            <Form.Control size="sm" type="text" placeholder="Small text" />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Plaintext</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group as={Row} controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        Email
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                        Password
                                </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Checkboxes and Radios</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                {['checkbox', 'radio'].map(type => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={`default ${type}`}
                                        />

                                        <Form.Check
                                            disabled
                                            type={type}
                                            label={`disabled ${type}`}
                                            id={`disabled-default-${type}`}
                                        />
                                    </div>
                                ))}
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Inline</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                {['checkbox', 'radio'].map(type => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
                                        <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
                                        <Form.Check
                                            inline
                                            disabled
                                            label="3 (disabled)"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                    </div>
                                ))}
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Without labels</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check aria-label="option 1" />
                            <Form.Check type="radio" aria-label="radio 1" />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Custom</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                {['checkbox', 'radio'].map(type => (
                                    <div key={type} className="mb-3">
                                        <Form.Check type={type} id={`check-api-${type}`}>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
                                            <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
                                        </Form.Check>
                                    </div>
                                ))}
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Layout</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Form grid</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Form row#</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Row>
                                    <Col>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Form.Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" />
                                </Form.Group>

                                <Form.Group controlId="formGridAddress2">
                                    <Form.Label>Address 2</Form.Label>
                                    <Form.Control placeholder="Apartment, studio, or floor" />
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control as="select">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
  </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Horizontal forms</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        Email
    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formHorizontalPassword">
                                    <Form.Label column sm={2}>
                                        Password
    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Col>
                                </Form.Group>
                                <fieldset>
                                    <Form.Group as={Row}>
                                        <Form.Label as="legend" column sm={2}>
                                            Radios
      </Form.Label>
                                        <Col sm={10}>
                                            <Form.Check
                                                type="radio"
                                                label="first radio"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="second radio"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="third radio"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios3"
                                            />
                                        </Col>
                                    </Form.Group>
                                </fieldset>
                                <Form.Group as={Row} controlId="formHorizontalCheck">
                                    <Col sm={{ span: 10, offset: 2 }}>
                                        <Form.Check label="Remember me" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Col sm={{ span: 10, offset: 2 }}>
                                        <Button type="submit">Sign in</Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <BootsrtapValidation />
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default UiForms;