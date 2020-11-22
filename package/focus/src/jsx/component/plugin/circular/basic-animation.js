import React, { Component } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// import ChangingProgressProvider from "./ChangingProgressProvider";



function BasicAnimation() {

    const percentage = 66;
    return (

        <>

            {/* <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
                {percentage => (
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                )}
            </ChangingProgressProvider> */}
        </>
    )
}

export default BasicAnimation;