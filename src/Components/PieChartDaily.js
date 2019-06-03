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
                ['Car', 300],
                ['Food', 400],
                ['Rent', 1000],
                ['Gym', 35],
              ]}
              options={{
                title: "You are now viewing: Todays budget",
                titleTextStyle: {
                  color: "deepSkyBlue",
                  fontSize: 23,
                  bold: false
                },
                is3D: true,
                fontName: "'Varela Round', sans-serif",
                fontSize: 25,
                width:'50rem',
                height:'40rem',
                slices: [{color: "deepSkyBlue"}, {color: "#888888"}, {color: "deepSkyBlue"}, {color: "#888888"}, {color: "deepSkyBlue"}, {color: "#888888"}, {color: "deepSkyBlue"}, {color: "#888888"}, {color: "deepSkyBlue"}, {color: "#888888"}]
              }}
              rootProps={{ 'data-testid': '2' }}
            />  
          </div>
        </div>
      );
    }
  }

  export default PieChartDaily;