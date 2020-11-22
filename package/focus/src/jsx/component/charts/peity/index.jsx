import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import { Line, Bar } from 'peity-react';



function ChartPeity() {

    return (
        <>
            <Row>
                <Col xl={3}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Line</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Line
                                values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2]}
                                height="16" min="0" width="100"
                            />

                            

                        </Card.Body>
                    </Card>
                </Col>




            </Row>
        </>
    )
}

export default ChartPeity;