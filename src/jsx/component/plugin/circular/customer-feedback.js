import React, { Component } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function CustomerFeedback() {

    const percentage = 66;
    return (

        <>

            <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                    pathColor: "#A389D5",
                    trailColor: "#E5E5E5"
                })}

            />
        </>
    )
}

export default CustomerFeedback;