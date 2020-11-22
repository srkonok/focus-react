import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, Breadcrumb } from 'react-bootstrap'



function UiBreadcrumb() {

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="">
                                    Library
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>Data</Breadcrumb.Item>
                            </Breadcrumb>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default UiBreadcrumb;