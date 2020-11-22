import React, {useState } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, Carousel } from 'react-bootstrap'



function UiCarousel() {

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Carousel</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={require('../../../images/card/1.png')}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 style={{"color":"#fff"}}>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={require('../../../images/card/1.png')}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3 style={{"color":"#fff"}}>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={require('../../../images/card/1.png')}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3 style={{"color":"#fff"}}>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Carousel</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={require('../../../images/card/1.png')}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 style={{"color":"#fff"}}>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={require('../../../images/card/1.png')}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3 style={{"color":"#fff"}}>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={require('../../../images/card/1.png')}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3 style={{"color":"#fff"}}>Third slide label</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default UiCarousel;