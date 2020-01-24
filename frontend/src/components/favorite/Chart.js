import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        labels: ["Fats", "Carbohydrates", "Proteins"],
        datasets: [
          {
            label: "Daily Value",
            data: [835785, 297485, 938578],
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)"
            ]
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.data}
          options={{
            title: {
              display: true,
              text: "Macronutrient Data Value",
              fontSize: 30
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
