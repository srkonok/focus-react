import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import ChartistTooltip from "chartist-plugin-tooltips-updated";



function PieChart() {
    let pieChart = {
        labels: ['facebook', 'twitter', 'youtube', 'google plus'],
        series: [{
            value: 20,
            className: "bg-facebook"
        },
        {
            value: 10,
            className: "bg-twitter"
        },
        {
            value: 30,
            className: "bg-youtube"
        },
        {
            value: 40,
            className: "bg-google-plus"
        }
        ]
    };



    let pieOptions = {
        showLabel: false,
        ignoreEmptyValues: false,
        plugins: [ChartistTooltip({ appendToBody: true })]
    };

    var pie = 'Pie'

    return (
        <>
            <ChartistGraph data={pieChart} options={pieOptions} type={pie} />
        </>
    )
}

export default PieChart;