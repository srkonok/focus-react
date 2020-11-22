import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap'
import LineChart from './line'
import BarChart from './bar'
import ChartDoughnut from './donught'
import ChartPie from './pie'


function ChartChartjs() {

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Line</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <LineChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Bar</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <BarChart />
                        </Card.Body>
                    </Card>
                </Col>

                
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Doughnut</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ChartDoughnut />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Pie</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ChartPie />
                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </>
    )
}

export default ChartChartjs;