import React, {Component} from 'react'
import "../App.css"
import { Chart } from "react-google-charts";






class PieChartMonthly extends Component {

    render(){
      return (
        <div className="pie-chart">
          <div className="chart-container">
            <Chart
              chartType="PieChart"
              loader={<div>Loading Your Expenses</div>}
              data={[
                ['bill', 'cost'],
                ['Car', 300],
                ['Food', 400],
                ['Rent', 1000],
                ['Gym', 35],
                ['Spending', 500]
              ]}
              options={{
                title: "You are now viewing: This month's budget.",
                titleTextStyle: {
                  color: "#888888",
                  fontSize: 30,
                  bold: false
                },
                is3D: true,
                fontName: "'Varela Round', sans-serif",
                fontSize: 20,
                width:'51rem',
                height:'40rem',
                slices: [{color: "deepSkyBlue"}, {color: "#888888"}, {color: "deepSkyBlue"}, {color: "#888888"}, {color: "#90EE90"}, {color: "#888888"}, {color: "deepSkyBlue"}, {color: "#888888"}, {color: "deepSkyBlue"}, {color: "#888888"}]
              }}
              rootProps={{ 'data-testid': '2' }}
            />  
          </div>
        </div>
      );
    }
  }

  export default PieChartMonthly;