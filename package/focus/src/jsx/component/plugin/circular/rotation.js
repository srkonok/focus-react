import React, { Component } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function Rotation() {

    const percentage = 66;
    return (

        <>

            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    rotation: 0.5 + (1 - percentage / 100) / 2
                })}
            />
        </>
    )
}

export default Rotation;