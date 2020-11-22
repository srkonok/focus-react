import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap'

import Basic from './basic';
import StrokeWidth from './stroke-width';
import SquareLineCaps from './square-linecaps';
import CustomColors from './custom-colors';
import TextSize from './text-size';
import Rotation from './rotation';
import BasicAnimation from './basic-animation';



function CircularProgress() {

    const percentage = 66;
    return (

        <>
            <Row>
                <Col xl={2}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Basic</Card.Title>
                        </Card.Header>
                        <Card.Body> 
                            <Basic />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={2}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Basic</Card.Title>
                        </Card.Header>
                        <Card.Body> 
                            <StrokeWidth />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={2}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Square linecaps</Card.Title>
                        </Card.Header>
                        <Card.Body> 
                            <SquareLineCaps />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={2}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Custom Colors</Card.Title>
                        </Card.Header>
                        <Card.Body> 
                            <CustomColors />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={2}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Text Size</Card.Title>
                        </Card.Header>
                        <Card.Body> 
                            <TextSize />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={2}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Rotation</Card.Title>
                        </Card.Header>
                        <Card.Body> 
                            <Rotation />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={2}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Basic animation speed</Card.Title>
                        </Card.Header>
                        <Card.Body> 
                            <BasicAnimation />
                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </>
    )
}

export default CircularProgress;