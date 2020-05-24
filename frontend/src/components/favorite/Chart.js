import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
  render() {
    const data = {
      labels: ["Carbohydrate", "Fat", "Protein"],
      datasets: [
        {
          label: "gram",
          data: [42, 18, 27],

          backgroundColor: [
            "rgba(224, 210, 62, 1)",
            "rgba(165, 44, 135, 1)",
            "rgba(36, 41, 137, 1)",
          ],
        },
      ],
    };

    return (
      <div className='chart'>
        <Bar
          data={data}
          options={{
            title: {
              display: true,
              text: "Thai Turkey Lettuce Wraps",
              fontSize: 30,
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;

// data: [
//       //calories
//       this.props.calories,
//       //fats
//       this.props.fat,
//       //carbs
//       this.props.carb,
//       //protein
//       this.props.protein,
//     ],
