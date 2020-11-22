import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';



function HorizontalChart() {
    var data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [
            [5, 4, 3, 7, 5, 10, 3],
            [3, 2, 9, 5, 4, 6, 4]
        ]
    };

    var options = {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
            offset: 70
        },
    };

    ;

    var type = 'Bar'

    return (
        <>
            <ChartistGraph data={data} options={options} type={type} />
        </>
    )
}

export default HorizontalChart;