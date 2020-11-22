import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, Image } from 'react-bootstrap'



function UiImages() {

    return (
        <>
            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Shape</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={6} md={4}>
                                    <Image src={require('../../../images/card/1.png')} rounded />
                                </Col>
                                <Col xs={6} md={4}>
                                    <Image src={require('../../../images/card/1.png')} roundedCircle />
                                </Col>
                                <Col xs={6} md={4}>
                                    <Image src={require('../../../images/card/1.png')} thumbnail />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Shape</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Image src={require('../../../images/card/1.png')} fluid />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default UiImages;