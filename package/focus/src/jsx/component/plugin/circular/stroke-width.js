import React, { Component } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function StrokeWidth() {

    const percentage = 66;
    return (

        <>

            <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={3} />
        </>
    )
}

export default StrokeWidth;