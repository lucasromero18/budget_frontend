import React, {Component} from 'react'
import "../App.css"
import { Chart } from "react-google-charts";


class BarGraph extends Component {

    render(){
      return (
        <div className="bar-graph">
          <div className="chart-container">
          <Chart
                chartType="BarChart"
                loader={<div>Loading Your Expenses</div>}
                data={[
                    [
                    'Bill',
                    'Cost',
                    { role: 'style' },
                    {
                        sourceColumn: 0,
                        role: 'annotation',
                        type: 'string',
                        calc: 'stringify',
                    },
                    ],
                    ['Car', 300, 'deepSkyBlue', 300],
                    ['Food', 400, '#888888', 400],
                    ['Rent', 1000, 'deepSkyBlue', 1000],
                    ['Gym', 35, '#888888', 35],
                    ['Spending', 500, 'deepSkyBlue', 500],
                ]}
                options={{
                    title: 'Your Budget',
                    titleTextStyle: {
                        color: "#888888",
                        fontSize: 30,
                        bold: false
                      },
                    fontName: "'Varela Round', sans-serif",
                    fontSize: 20,
                    width: '50rem',
                    height: '40rem',
                    bar: { groupWidth: '80%' },
                    legend: { position: 'none' },
                }}
                // For tests
                rootProps={{ 'data-testid': '6' }}
            />
          </div>
        </div>
      );
    }
  }

  export default BarGraph;