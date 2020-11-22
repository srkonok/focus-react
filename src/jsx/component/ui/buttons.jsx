import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, ButtonGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'

function simulateNetworkRequest() {
    return new Promise(resolve => setTimeout(resolve, 2000));
}


function UiButtons() {

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    // 

    const [value, setValue] = useState([1, 3]);

    const handleChange = val => setValue(val);

    return (
        <>
            <Row>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Basic</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Button variant="primary">Primary</Button>{' '}
                            <Button variant="secondary">Secondary</Button>{' '}
                            <Button variant="success">Success</Button>{' '}
                            <Button variant="warning">Warning</Button>{' '}
                            <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
                            <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
                            <Button variant="link">Link</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Outline</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Button variant="outline-primary">Primary</Button>{' '}
                            <Button variant="outline-secondary">Secondary</Button>{' '}
                            <Button variant="outline-success">Success</Button>{' '}
                            <Button variant="outline-warning">Warning</Button>{' '}
                            <Button variant="outline-danger">Danger</Button>{' '}
                            <Button variant="outline-info">Info</Button>{' '}
                            <Button variant="outline-light">Light</Button>{' '}
                            <Button variant="outline-dark">Dark</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Tag</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
                            <Button as="input" type="button" value="Input" />{' '}
                            <Button as="input" type="submit" value="Submit" />{' '}
                            <Button as="input" type="reset" value="Reset" />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Size</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Button variant="primary" size="lg">Large button</Button>{' '}
                            <Button variant="secondary" size="lg">Large button</Button>
                            <Button variant="primary" size="sm">Small button</Button>{' '}
                            <Button variant="secondary" size="sm">Small button</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Block</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Button variant="primary" size="lg" block>Block level button</Button>
                            <Button variant="secondary" size="lg" block>Block level button</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Disabled</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Button variant="primary" size="lg" disabled>Primary button</Button>{' '}
                            <Button variant="secondary" size="lg" disabled>Button</Button>{' '}
                            <Button href="#" variant="secondary" size="lg" disabled>Link</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Loading</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Button
                                variant="primary"
                                disabled={isLoading}
                                onClick={!isLoading ? handleClick : null}
                            >
                                {isLoading ? 'Loading…' : 'Click to load'}
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Checkbox / Radio</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ButtonGroup toggle className="mr-2">
                                <ToggleButton type="checkbox" defaultChecked value="1">
                                    Checked
                                </ToggleButton>
                            </ButtonGroup>

                            <ButtonGroup toggle>
                                <ToggleButton type="radio" name="radio" defaultChecked value="1">
                                    Active
                                </ToggleButton>
                                <ToggleButton type="radio" name="radio" value="2">
                                    Radio
                                </ToggleButton>
                                <ToggleButton type="radio" name="radio" value="3">
                                    Radio
                                </ToggleButton>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Uncontrolled</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                                <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
                                <ToggleButton value={2}>Checkbox 2</ToggleButton>
                                <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
                            </ToggleButtonGroup>
                            <br />
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
                                <ToggleButton value={2}>Radio 2</ToggleButton>
                                <ToggleButton value={3}>Radio 3</ToggleButton>
                            </ToggleButtonGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Controlled</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                                <ToggleButton value={1}>Option 1</ToggleButton>
                                <ToggleButton value={2}>Option 2</ToggleButton>
                                <ToggleButton value={3}>Option 3</ToggleButton>
                            </ToggleButtonGroup>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default UiButtons;