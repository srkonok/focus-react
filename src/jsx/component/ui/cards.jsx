import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Nav, CardGroup, CardDeck, CardColumns } from 'react-bootstrap'



function UiCards() {
    
    return (
        <>
            <Row>
                <Col xl={3}>
                    <Card className="text-center">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card>
                        <Card.Header>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                        erat a ante.{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card>
                        <Card.Header as="h5">Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3}>
                    <Card>
                        <Card.Img variant="top" src={require('../../../images/card/1.png')} alt="" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3}>
                    <Card className="bg-dark text-white">
                        <Card.Img src={require('../../../images/card/1.png')} alt="" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>

                <Col xl={3}>
                    <Card>
                        <Card.Header>
                            <Nav variant="tabs" defaultActiveKey="#first">
                                <Nav.Item>
                                    <Nav.Link href="#first">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#disabled" disabled>
                                        Disabled
                                        </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3}>
                    <Card bg="primary" text="white">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title className="text-white">Primary Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col xl={3}>
                    <Card bg="secondary" text="white">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title className="text-white">Secondary Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col xl={3}>
                    <Card bg="success" text="white">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title className="text-white">Success Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col xl={3}>
                    <Card bg="warning" text="white">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title className="text-white">Warning Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col xl={3}>
                    <Card bg="info" text="white">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title className="text-white">Info Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col xl={3}>
                    <Card bg="dark" text="white">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title className="text-white">Dark Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3}>
                    <Card bg="light">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Light Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={12} className="mb-4">
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={require('../../../images/card/1.png')} alt="" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={require('../../../images/card/1.png')} alt="" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={require('../../../images/card/1.png')} alt="" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                    </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Col>

                <Col xl={12} className="mb-4">
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={require('../../../images/card/1.png')} alt="" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={require('../../../images/card/1.png')} alt="" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={require('../../../images/card/1.png')} alt="" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                    </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </Col>

                <Col xl={12} className="mb-4">
                    <CardColumns>
                        <Card>
                            <Card.Img variant="top" src={require('../../../images/card/1.png')} alt="" />
                            <Card.Body>
                                <Card.Title>Card title that wraps to a new line</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
      </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="p-3">
                            <blockquote className="blockquote mb-0 card-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.
      </p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={require('../../../images/card/1.png')} alt="" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
        content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card bg="primary" text="white" className="text-center p-3">
                            <blockquote className="blockquote mb-0 card-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.
      </p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </Card>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
        content.{' '}
                                </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img src={require('../../../images/card/1.png')} alt="" />
                        </Card>
                        <Card className="text-right">
                            <blockquote className="blockquote mb-0 card-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.
      </p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
      </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Col>


            </Row>
        </>
    )

}
export default UiCards;