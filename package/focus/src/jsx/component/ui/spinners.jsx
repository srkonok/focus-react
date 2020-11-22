import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, Spinner, ButtonToolbar, Button } from 'react-bootstrap'



function UiSpinner() {

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Border Spinner</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </Card.Body>
                    </Card>
                </Col>



                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Grow Spinner</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Spinner animation="grow" />
                        </Card.Body>
                    </Card>
                </Col>


                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Variants</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Spinner animation="border" variant="primary" />
                            <Spinner animation="border" variant="secondary" />
                            <Spinner animation="border" variant="success" />
                            <Spinner animation="border" variant="danger" />
                            <Spinner animation="border" variant="warning" />
                            <Spinner animation="border" variant="info" />
                            <Spinner animation="border" variant="light" />
                            <Spinner animation="border" variant="dark" />
                            <Spinner animation="grow" variant="primary" />
                            <Spinner animation="grow" variant="secondary" />
                            <Spinner animation="grow" variant="success" />
                            <Spinner animation="grow" variant="danger" />
                            <Spinner animation="grow" variant="warning" />
                            <Spinner animation="grow" variant="info" />
                            <Spinner animation="grow" variant="light" />
                            <Spinner animation="grow" variant="dark" />
                        </Card.Body>
                    </Card>
                </Col>


                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Sizing</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Spinner animation="border" size="sm" />
                            <Spinner animation="border" />
                            <Spinner animation="grow" size="sm" />
                            <Spinner animation="grow" />
                        </Card.Body>
                    </Card>
                </Col>


                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Buttons</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ButtonToolbar>
                                <Button variant="primary" disabled>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">Loading...</span>
                                </Button>
                                <Button variant="primary" disabled>
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    Loading...
                                </Button>
                            </ButtonToolbar>
                        </Card.Body>
                    </Card>
                </Col>



            </Row>
        </>
    )
}

export default UiSpinner;