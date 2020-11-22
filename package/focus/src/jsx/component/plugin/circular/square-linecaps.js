import React, { Component } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function SquareLineCaps() {

    const percentage = 66;
    return (

        <>

            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    strokeLinecap: "butt"
                })}
            />
        </>
    )
}

export default SquareLineCaps;