import React, {Component} from 'react'
import "../App.css"
import { Chart } from "react-google-charts";






class PieChartDaily extends Component {

    render(){
      return (
        <div className="pie-chart">
          <div className="chart-container">
            <Chart
              chartType="PieChart"
              data={[
                ['bill', 'cost'],
                ['Car', 10],
                ['Food', 13.30],
                ['Rent', 33.33],
                ['Gym', 1.16],
                ['Spending', 16.6]
              ]}
              options={{
                title: "You are now viewing: Todays budget.",
                titleTextStyle: {
                  color: "#888888",
                  fontSize: 30,
                  bold: false
                },
                is3D: true,
                fontName: "'Varela Round', sans-serif",
                fontSize: 20,
                width:'50rem',
                height:'40rem',
                slices: [{color: "#990014"}, {color: "#FF4500"}, {color: "#990014"}, {color: "#FF4500"}, {color: "#90EE90"}, {color: "#FF4500"}, {color: "#990014"}, {color: "#FF4500"}, {color: "#990014"}, {color: "#888888"}]
              }}
              rootProps={{ 'data-testid': '2' }}
            />  
          </div>
        </div>
      );
    }
  }

  export default PieChartDaily;