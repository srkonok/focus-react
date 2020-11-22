import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, Tabs, Tab, Nav } from 'react-bootstrap'



function UiTabs() {
    const [key, setKey] = useState('home');
    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Basic</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                <Tab eventKey="home" title="Home" className="pt-4">
                                    Look in thy glass and tell the face thou viewest Now is the time that face should form another; Whose fresh repair if now thou not renewest, Thou dost beguile the world, unbless some mother. For where is she so fair whose unear'd womb Disdains the tillage of thy husbandry? Or who is he so fond will be the tomb, Of his self-love to stop posterity? Thou art thy mother's glass and she in thee Calls back the lovely April of her prime; 
                                </Tab>
                                <Tab eventKey="profile" title="Profile" className="pt-4">
                                    Look in thy glass and tell the face thou viewest Now is the time that face should form another; Whose fresh repair if now thou not renewest, Thou dost beguile the world, unbless some mother. For where is she so fair whose unear'd womb Disdains the tillage of thy husbandry? Or who is he so fond will be the tomb, Of his self-love to stop posterity? Thou art thy mother's glass and she in thee Calls back the lovely April of her prime;
                                </Tab>
                                <Tab eventKey="contact" title="Contact" disabled className="pt-4">
                                    Look in thy glass and tell the face thou viewest Now is the time that face should form another; Whose fresh repair if now thou not renewest, Thou dost beguile the world, unbless some mother. For where is she so fair whose unear'd womb Disdains the tillage of thy husbandry? Or who is he so fond will be the tomb, Of his self-love to stop posterity? Thou art thy mother's glass and she in thee Calls back the lovely April of her prime;
                                </Tab>
                            </Tabs>
                        </Card.Body>
                    </Card>
                </Col>


                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Controlled</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                                <Tab eventKey="home" title="Home" className="pt-4">
                                    Look in thy glass and tell the face thou viewest Now is the time that face should form another; Whose fresh repair if now thou not renewest, Thou dost beguile the world, unbless some mother. For where is she so fair whose unear'd womb Disdains the tillage of thy husbandry? Or who is he so fond will be the tomb, Of his self-love to stop posterity? Thou art thy mother's glass and she in thee Calls back the lovely April of her prime;
                                </Tab>
                                <Tab eventKey="profile" title="Profile" className="pt-4">
                                    Look in thy glass and tell the face thou viewest Now is the time that face should form another; Whose fresh repair if now thou not renewest, Thou dost beguile the world, unbless some mother. For where is she so fair whose unear'd womb Disdains the tillage of thy husbandry? Or who is he so fond will be the tomb, Of his self-love to stop posterity? Thou art thy mother's glass and she in thee Calls back the lovely April of her prime;
                                </Tab>
                                <Tab eventKey="contact" title="Contact" disabled className="pt-4">
                                    Look in thy glass and tell the face thou viewest Now is the time that face should form another; Whose fresh repair if now thou not renewest, Thou dost beguile the world, unbless some mother. For where is she so fair whose unear'd womb Disdains the tillage of thy husbandry? Or who is he so fond will be the tomb, Of his self-love to stop posterity? Thou art thy mother's glass and she in thee Calls back the lovely April of her prime;
                                </Tab>
                            </Tabs>
                        </Card.Body>
                    </Card>
                </Col>


                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>No animation</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                                <Tab eventKey="home" title="Home" className="pt-4">
                                    Take all my loves, my love, yea take them all; What hast thou then more than thou hadst before? No love, my love, that thou mayst true love call; All mine was thine, before thou hadst this more. Then, if for my love, thou my love receivest, I cannot blame thee, for my love thou usest; But yet be blam'd, if thou thy self deceivest By wilful taste of what thyself refusest. I do forgive thy robbery, gentle thief, Although thou steal thee all my poverty:
                                </Tab>
                                <Tab eventKey="profile" title="Profile" className="pt-4">
                                    Take all my loves, my love, yea take them all; What hast thou then more than thou hadst before? No love, my love, that thou mayst true love call; All mine was thine, before thou hadst this more. Then, if for my love, thou my love receivest, I cannot blame thee, for my love thou usest; But yet be blam'd, if thou thy self deceivest By wilful taste of what thyself refusest. I do forgive thy robbery, gentle thief, Although thou steal thee all my poverty:
                                </Tab>
                                <Tab eventKey="contact" title="Contact" disabled className="pt-4">
                                    Take all my loves, my love, yea take them all; What hast thou then more than thou hadst before? No love, my love, that thou mayst true love call; All mine was thine, before thou hadst this more. Then, if for my love, thou my love receivest, I cannot blame thee, for my love thou usest; But yet be blam'd, if thou thy self deceivest By wilful taste of what thyself refusest. I do forgive thy robbery, gentle thief, Although thou steal thee all my poverty:
                                </Tab>
                            </Tabs>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Custom Tab Layout</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={3}>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={9}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                Take all my loves, my love, yea take them all; What hast thou then more than thou hadst before? No love, my love, that thou mayst true love call; All mine was thine, before thou hadst this more. Then, if for my love, thou my love receivest, I cannot blame thee, for my love thou usest; But yet be blam'd, if thou thy self deceivest By wilful taste of what thyself refusest. I do forgive thy robbery, gentle thief, Although thou steal thee all my poverty:
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                Take all my loves, my love, yea take them all; What hast thou then more than thou hadst before? No love, my love, that thou mayst true love call; All mine was thine, before thou hadst this more. Then, if for my love, thou my love receivest, I cannot blame thee, for my love thou usest; But yet be blam'd, if thou thy self deceivest By wilful taste of what thyself refusest. I do forgive thy robbery, gentle thief, Although thou steal thee all my poverty:
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

export default UiTabs;