import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, ListGroup, Tab } from 'react-bootstrap'



function UiListGroup() {
    function alertClicked() {
        alert('You clicked the third ListGroupItem');
    }
    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Basic</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>


                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Active items</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup as="ul">
                                <ListGroup.Item as="li" active>
                                    Cras justo odio
                                </ListGroup.Item>
                                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item as="li" disabled>
                                    Morbi leo risus
                                </ListGroup.Item>
                                <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Disabled items</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Actionable items</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup defaultActiveKey="#link1">
                                <ListGroup.Item action href="#link1">
                                    Link 1
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2" disabled>
                                    Link 2
                                </ListGroup.Item>
                                <ListGroup.Item action onClick={alertClicked}>
                                    This one is a button
                                </ListGroup.Item>
                            </ListGroup>,
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Flush</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Horizontal</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup horizontal>
                                <ListGroup.Item>This</ListGroup.Item>
                                <ListGroup.Item>ListGroup</ListGroup.Item>
                                <ListGroup.Item>renders</ListGroup.Item>
                                <ListGroup.Item>horizontally!</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Contextual classes</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item>No style</ListGroup.Item>
                                <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                                <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
                                <ListGroup.Item variant="success">Success</ListGroup.Item>
                                <ListGroup.Item variant="danger">Danger</ListGroup.Item>
                                <ListGroup.Item variant="warning">Warning</ListGroup.Item>
                                <ListGroup.Item variant="info">Info</ListGroup.Item>
                                <ListGroup.Item variant="light">Light</ListGroup.Item>
                                <ListGroup.Item variant="dark">Dark</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item>No style</ListGroup.Item>
                                <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                                <ListGroup.Item action variant="secondary">
                                    Secondary
                                </ListGroup.Item>
                                <ListGroup.Item action variant="success">
                                    Success
                                </ListGroup.Item>
                                <ListGroup.Item action variant="danger">
                                    Danger
                                </ListGroup.Item>
                                <ListGroup.Item action variant="warning">
                                    Warning
                                </ListGroup.Item>
                                <ListGroup.Item action variant="info">
                                    Info
                                </ListGroup.Item>
                                <ListGroup.Item action variant="light">
                                    Light
                                </ListGroup.Item>
                                <ListGroup.Item action variant="dark">
                                    Dark
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Tabbed Interfaces</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                                <Row>
                                    <Col sm={4}>
                                        <ListGroup>
                                            <ListGroup.Item action href="#link1">
                                                Link 1
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#link2">
                                                Link 2
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={8}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="#link1">
                                                I grant thou wert not married to my Muse, And therefore mayst without attaint o'erlook The dedicated words which writers use Of their fair subject, blessing every book. Thou art as fair in knowledge as in hue, Finding thy worth a limit past my praise; And therefore art enforced to seek anew Some fresher stamp of the time-bettering days. And do so, love; yet when they have devis'd, What strained touches rhetoric can lend,
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="#link2">
                                                I grant thou wert not married to my Muse, And therefore mayst without attaint o'erlook The dedicated words which writers use Of their fair subject, blessing every book. Thou art as fair in knowledge as in hue, Finding thy worth a limit past my praise; And therefore art enforced to seek anew Some fresher stamp of the time-bettering days. And do so, love; yet when they have devis'd, What strained touches rhetoric can lend,
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </>
    )
}

export default UiListGroup;