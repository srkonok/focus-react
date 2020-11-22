import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, ProgressBar} from 'react-bootstrap'



function UiProgress() {

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Progress bars</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ProgressBar className="mb-3" variant="success" now={40} />
                            <ProgressBar className="mb-3" variant="info" now={20} />
                            <ProgressBar className="mb-3" variant="warning" now={60} />
                            <ProgressBar className="mb-3" variant="danger" now={80} />
                        </Card.Body>
                    </Card>
                </Col>


                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Striped</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ProgressBar className="mb-3" striped variant="success" now={40} />
                            <ProgressBar className="mb-3" striped variant="info" now={20} />
                            <ProgressBar className="mb-3" striped variant="warning" now={60} />
                            <ProgressBar className="mb-3" striped variant="danger" now={80} />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Animated</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ProgressBar className="mb-3" animated now={45} />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Stacked</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ProgressBar className="mb-3">
                                <ProgressBar striped variant="success" now={35} key={1} />
                                <ProgressBar variant="warning" now={20} key={2} />
                                <ProgressBar striped variant="danger" now={10} key={3} />
                            </ProgressBar>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default UiProgress;