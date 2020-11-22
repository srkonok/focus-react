import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import EventCalendar from './../component/plugin/fullcalendar'



function AppCalendar() {

    return (
        <>
            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Event Calendar</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <EventCalendar />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default AppCalendar;