// import React,{useEffect} from 'react'
// import CanvasJSReact from '@canvasjs/react-charts';
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// export default function Github() {
//   const options = {
//     theme: "dark2",
//     animationEnabled: true,
//     exportFileName: "New Year Resolutions",
//     exportEnabled: true,
//     title:{
//       text: "Top Categories of New Year's Resolution"
//     },
//     data: [{
//       type: "pie",
//       showInLegend: true,
//       legendText: "{label}",
//       toolTipContent: "{label}: <strong>{y}%</strong>",
//       indexLabel: "{y}%",
//       indexLabelPlacement: "inside",

//     }]
//   }
//   const person= [
//     { y: 32, label: "Health" },
//     { y: 22, label: "Finance" },
//     { y: 15, label: "Education" },
//     { y: 19, label: "Career" },
//     { y: 5, label: "Family" },
//     { y: 7, label: "Real Estate" }
//   ]
//   var chart = this.chart;
//   useEffect(() => {
//     for (var i = 0; i < person.length; i++) {
//       dataPoints.push({
//         x: data[i].x,
//         y: data[i].y
//       });
//     }

// chart.render();
//   }, [])


//   return (
//   <div>
//     <CanvasJSChart options = {options}
//       onRef={ref => this.chart = ref}
//     />
//     {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
//   </div>
//   );
// }


// import React, { Component } from "react";
// import {  Line, Pie } from "react-chartjs-2";
// import {Chart, ArcElement,CategoryScale,LinearScale} from 'chart.js'

// class Charts extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       chartData: props.data,
//       chartOptions: props.options
//     };
//   }

//   static defaultProps = {
//     displayTitle: true,
//     DisplayLegend: true,
//     LegendPosition: "right",
//     level: "Skills",

//     data: {
//       labels: ["HTML", "CSS", "Javascript", "Drupal", "ReactJS", "SQL"],
//       datasets: [
//         {
//           data: [90, 90, 60, 70, 25, 65, 100, 55, 80, 40, 30, 40, 10, 0],
//           backgroundColor: [
//             "rgba(255, 99, 132, 0.6)",
//             "rgba(54, 162, 235, 0.6)",
//             "rgba(255, 206, 86, 0.6)",
//             "rgba(75, 192, 192, 0.6)",
//             "rgba(153, 102, 235, 0.6)",
//             "rgba(255, 159, 132, 0.6)",
//             "rgba(255, 99, 132, 0.6)"
//           ]
//           //     label: 2015
//         }
//         /* {
//           data: [90, 90, 60, 70, 60, 70, 100, 55, 80, 40, 30, 20, 10, 0],
//           backgroundColor: "#FF7",
//           label: 2016
//       }*/
//       ]
//     },

//     options: {
//       scales: {
//         yAxes: [
//           {
//             ticks: {
//               callback: function(label, index, labels) {
//                 console.log("label is: " + label);
//                 if (label > 75) {
//                   return "Expert: " + label;
//                 } else if (label > 50) {
//                   return "Advanced: " + label;
//                 } else if (label > 25) {
//                   return "Intermediate: " + label;
//                 } else {
//                   return "Beginner: " + label;
//                 }
//                 //                         return '$' + label;
//               }
//             }
//           }
//         ]
//       }
//     }
//   };
//   render() {
//     return (
//       <Pie data={this.state.chartData} options={this.state.chartOptions} />
//     );
//   }
// }

// export default Charts;
import React, { useEffect, useRef } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
var dataPoints = [];
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const App = ({ data }) => {
  const chartRef = useRef(null);

    const fetchData = async () => {
      try {

        // const person= [
        //   { y: 32, label: "Health" },
        //   { y: 22, label: "Finance" },
        //   { y: 15, label: "Education" },
        //   { y: 19, label: "Career" },
        //   { y: 5, label: "Family" },
        //   { y: 7, label: "Real Estate" }
        // ]

 console.log(data.length);

        for (var i = 0; i < data.datas.length; i++) {
      
          dataPoints.push({
            x: data.datas[i],
            y: data.labels[i]
          });
          
        }
        // console.log(dataPoints);

        if (chartRef.current) {
          chartRef.current.options.data[0].dataPoints = dataPoints;
          chartRef.current.render();
        }
      } catch (error) {
        console.log(error);
      }
    };

    
 
    for (var i = 0; i < 1; i++){
      fetchData();

    }


  const options = {
    theme: 'light2',
    title: {
      text: 'Nifty 50 Index',
    },
    data: [
      {
        type: "pie",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{y}%",
        indexLabelPlacement: "inside",
        dataPoints: [],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} onRef={(ref) => (chartRef.current = ref)} />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};

export default App;
