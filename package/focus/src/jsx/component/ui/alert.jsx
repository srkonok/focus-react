import React, { Component, useState } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, Alert, Button } from 'react-bootstrap';

import AlertDismissible from '../element/alertDismissible';


function UiAlert() {

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Alert</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Alert variant="primary">
                                This is a primary alert—check it out!
                                </Alert>
                            <Alert variant="secondary">
                                This is a secondary alert—check it out!
                                </Alert>
                            <Alert variant="success">
                                This is a success alert—check it out!
                                </Alert>
                            <Alert variant="danger">
                                This is a danger alert—check it out!
                                </Alert>
                            <Alert variant="warning">
                                This is a warning alert—check it out!
                                </Alert>
                            <Alert variant="info">
                                This is a info alert—check it out!
                                </Alert>
                            <Alert variant="light">
                                This is a light alert—check it out!
                                </Alert>
                            <Alert variant="dark">
                                This is a dark alert—check it out!
                                </Alert>

                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>

                            </Card.Title>

                        </Card.Header>
                        <Card.Body>
                            <Alert variant="success">
                                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                                <p>
                                    Aww yeah, you successfully read this important alert message. This example
                                    text is going to run a bit longer so that you can see how spacing within an
                                    alert works with this kind of content.
                                        </p>

                                <p className="mb-0">
                                    Whenever you need to, be sure to use margin utilities to keep things nice
                                    and tidy.
                                        </p>
                            </Alert>

                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>

                            </Card.Title>

                        </Card.Header>
                        <Card.Body>
                           <AlertDismissible/>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default UiAlert;