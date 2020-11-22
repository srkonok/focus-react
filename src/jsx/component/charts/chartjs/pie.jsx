import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

const data = {
  datasets: [{
    data: [45, 25, 20, 10],
    borderWidth: 0,
    backgroundColor: [
      "rgba(89, 59, 219, .9)",
      "rgba(89, 59, 219, .7)",
      "rgba(89, 59, 219, .5)",
      "rgba(89, 59, 219, .07)"
    ],
    hoverBackgroundColor: [
      "rgba(89, 59, 219, .9)",
      "rgba(89, 59, 219, .7)",
      "rgba(89, 59, 219, .5)",
      "rgba(89, 59, 219, .07)"
    ]

  }],
  labels: [
    "one",
    "two",
    "three",
    "four"
  ]
};

const options = {
  responsive: true,
  legend: false,
  maintainAspectRatio: false
}

class ChartPie extends Component {

  render() {
    return (
      <>
        <Pie data={data} height={330} options={options} />
      </>
    );
  }
}

export default ChartPie;
