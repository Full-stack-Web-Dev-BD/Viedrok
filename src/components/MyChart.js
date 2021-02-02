import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
    render() {

        var options = {
            chart: {
                height: 280,
                type: "area"
            },
            dataLabels: {
                enabled: false
            },
            series: [
                {
                    name: "Series 1",
                    data: [45, 52, 38, 45, 19, 23, 2]
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
                    "01 Jan",
                    "02 Jan",
                    "03 Jan",
                    "04 Jan",
                    "05 Jan",
                    "06 Jan",
                    "07 Jan"
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
                            height="200"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default BarChart;