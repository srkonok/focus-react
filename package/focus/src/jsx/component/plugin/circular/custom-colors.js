import React, { Component } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function CustomColors() {

    const percentage = 66;
    return (

        <>

            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    textColor: "red",
                    pathColor: "turquoise",
                    trailColor: "gold"
                })}
            />
        </>
    )
}

export default CustomColors;