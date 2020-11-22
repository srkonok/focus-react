import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function Basic() {

    const percentage = 66;
    return (

        <>

            <CircularProgressbar value={percentage} />
        </>
    )
}

export default Basic;