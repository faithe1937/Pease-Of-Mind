import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {

  render() {
    console.log(this.props.calories)
   const data = {
    labels: ["Calories", "Fat (g)", "Carbohydrate (g)", "Protein (g) "],
    datasets: [
      {
        label: "Daily Value",
        data: [
          //calories
          this.props.calories,
          //fats 
          this.props.fat, 
          //carbs
          this.props.carb, 
          //protein
          this.props.protein],

        backgroundColor: [
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)"
        ]
      }
    ]
  }

    return (
      <div className="chart">
        <Bar
          data={data}
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
