import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, Modal, Button, ButtonToolbar } from 'react-bootstrap'



function UiModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Markup</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Modal.Dialog>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>Modal body text goes here.</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary">Close</Button>
                                    <Button variant="primary">Save changes</Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </Card.Body>
                    </Card>
                </Col>


                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Modal</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Button variant="primary" onClick={handleShow}>
                                Launch demo modal
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Optional Sizes</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ButtonToolbar>
                                <Button onClick={() => setSmShow(true)}>Small modal</Button>
                                <Button onClick={() => setLgShow(true)}>Large modal</Button>

                                <Modal
                                    size="sm"
                                    show={smShow}
                                    onHide={() => setSmShow(false)}
                                    aria-labelledby="example-modal-sizes-title-sm"
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="example-modal-sizes-title-sm">
                                            Small Modal
          </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>...</Modal.Body>
                                </Modal>

                                <Modal
                                    size="lg"
                                    show={lgShow}
                                    onHide={() => setLgShow(false)}
                                    aria-labelledby="example-modal-sizes-title-lg"
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="example-modal-sizes-title-lg">
                                            Large Modal
          </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>...</Modal.Body>
                                </Modal>
                            </ButtonToolbar>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Custom Width Modal</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Button variant="primary" onClick={() => setShow(true)}>
                                Custom Width Modal
                            </Button>

                            <Modal
                                show={show}
                                onHide={() => setShow(false)}
                                dialogClassName="modal-90w"
                                aria-labelledby="example-custom-modal-styling-title"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-custom-modal-styling-title">
                                        Custom Modal Styling
                                </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>
                                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                                        ipsam atque a dolores quisquam quisquam adipisci possimus
                                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                                        deleniti rem!
          </p>
                                </Modal.Body>
                            </Modal>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Title</Card.Title>
                        </Card.Header>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </>
    )
}

export default UiModal;