import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, Badge } from 'react-bootstrap'



function UiBadge() {

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Badge</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Badge variant="primary">Primary</Badge>{' '}
                            <Badge variant="secondary">Secondary</Badge>{' '}
                            <Badge variant="success">Success</Badge>{' '}
                            <Badge variant="danger">Danger</Badge>{' '}
                            <Badge variant="warning">Warning</Badge> <Badge variant="info">Info</Badge>{' '}
                            <Badge variant="light">Light</Badge> <Badge variant="dark">Dark</Badge>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Pill</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Badge pill variant="primary">Primary</Badge>{' '}
                            <Badge pill variant="secondary">Secondary</Badge>{' '}
                            <Badge pill variant="success">Success</Badge>{' '}
                            <Badge pill variant="danger">Danger</Badge>{' '}
                            <Badge pill variant="warning">Warning</Badge>{' '}
                            <Badge pill variant="info">Info</Badge>{' '}
                            <Badge pill variant="light">Light</Badge>{' '}
                            <Badge pill variant="dark">Dark</Badge>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default UiBadge;