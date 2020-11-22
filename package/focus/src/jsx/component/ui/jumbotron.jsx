import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, Jumbotron, Button, Container } from 'react-bootstrap'



function UiJumbotron() {

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Jumbotron>
                                <h1>Hello, world!</h1>
                                <p>
                                    This is a simple hero unit, a simple jumbotron-style component for calling
                                    extra attention to featured content or information.
  </p>
                                <p>
                                    <Button variant="primary">Learn more</Button>
                                </p>
                            </Jumbotron>
                        </Card.Body>
                    </Card>
                </Col>


                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Jumbotron fluid>
                                <Container>
                                    <h1>Fluid jumbotron</h1>
                                    <p>
                                        This is a modified jumbotron that occupies the entire horizontal space of
                                        its parent.
    </p>
                                </Container>
                            </Jumbotron>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </>
    )
}

export default UiJumbotron;