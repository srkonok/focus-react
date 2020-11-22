import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, Figure } from 'react-bootstrap'



function UiFigures() {

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Figure</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src={require('../../../images/card/1.png')}
                                />
                                <Figure.Caption>
                                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                                </Figure.Caption>
                            </Figure>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default UiFigures;