import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap'
import SimpleSlider from './basic'



function SlickSlider() {

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SimpleSlider />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default SlickSlider;