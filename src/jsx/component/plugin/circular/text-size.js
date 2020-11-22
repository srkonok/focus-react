import React, { Component } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function TextSize() {

    const percentage = 66;
    return (

        <>

            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    textSize: "14px"
                })}
            />
        </>
    )
}

export default TextSize;