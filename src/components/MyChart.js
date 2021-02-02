import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
    render() {

        var options = {
            chart: {
                height: 380,
                type: "area",
                background: '#001A44'
            },

            colors: ['#ff0098'],
            labels: ['white'],
            stroke: {
                // show: false,
                // curve: 'smooth',
                // lineCap: 'butt',
                // colors: undefined,
                // width: 2,
                // dashArray: 0,
            },
            grid: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            series: [
                {
                    name: "Series 1",
                    data: [45, 52, 38, 45, 19, 23, 2, 52, 38, 45, 19, 23, 2, 52, 38, 45]
                }
            ],
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 90, 100]
                }
            },
            xaxis: {
                categories: [
                    12, 3, 1, 4, 13, 4, 1, 3, 42, 41, 41, 5, 35, 67, 63, 24
                ]
            }
        };

        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={options}
                            series={options.series}
                            type="area"
                            width="100%"
                            height="280"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default BarChart;