import React, {Component} from 'react'
import "../App.css"
import { Chart } from "react-google-charts";






class PieChartWeekly extends Component {

    render(){
      return (
        <div className="pie-chart">
          <div className="chart-container">
            <Chart
              chartType="PieChart"
              data={[
                ['bill', 'cost'],
                ['Car', 75],
                ['Food', 100],
                ['Rent', 250],
                ['Gym', 8.75],
                ['Spending', 125]
              ]}
              options={{
                title: "You are now viewing: This weeks budget.",
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
                slices: [{color: "#800080"}, {color: "#F5DEB3"}, {color: "#800080"}, {color: "#F5DEB3"}, {color: "#90EE90"}, {color: "#F5DEB3"}, {color: "#800080"}, {color: "#F5DEB3"}, {color: "#800080"}, {color: "#888888"}]
              }}
              rootProps={{ 'data-testid': '2' }}
            />  
          </div>
        </div>
      );
    }
  }

  export default PieChartWeekly;