// import React from "react";

// import { Bar } from "react-chartjs-2";
// import Chart from "chart.js/auto";
// import { useState, useEffect, useRef } from "react";
// import { Country, State, City } from "country-state-city";
// const GetData = () => {
//   return (
//     <div>
//       <Bar
//         data={{
//           labels: [
//             "2008",
//             "2009",
//             "2010",
//             "2011",
//             "2012",
//             "2013",
//             "2014",
//             "2015",
//             "2016",
//             "2017",
//             "2018",
//           ],
//           datasets: [
//             {
//               label: "Meteor",
//               data: [
//                 "724",
//                 "668",
//                 "941",
//                 "1653",
//                 "2172",
//                 "3556",
//                 "3778",
//                 "4233",
//                 "5371",
//                 "5470",
//                 "4301",
//               ],
//               backgroundColor: [
//                 "rgba(255, 99, 132, 0.2)",
//                 "rgba(255, 99, 182, 0.2)",
//                 "rgba(255, 99, 142, 0.2)",
//                 "rgba(255, 99, 172, 0.2)",
//                 "rgba(255, 99, 132, 0.2)",
//                 "rgba(255, 99, 112, 0.2)",
//                 "rgba(255, 99, 142, 0.2)",
//                 "rgba(255, 99, 110, 0.2)",
//                 "rgba(255, 99, 11, 0.2)",
//                 "rgba(255, 99, 102, 0.2)",
//               ],
//               borderColor: [
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(255, 99, 132, 1)",
//               ],
//               borderWidth: 1,
//             },
//           ],
//         }}
//         options={{ maintainAspectRatio: false }}
//       />{" "}
//       {/* <p>Fireball Sightings reported to the American Meteor Society </p> */}
//     </div>
//   );
// };

// export default GetData;
import { Bar, Bubble, Doughnut, Line, Pie, Scatter } from "react-chartjs-2";
import Chart from "chart.js/auto";
import React, { useState } from "react";
import data from "../../datasource/csvjson1.json";
import ConvertDMSToDD from "../../helpers/degreeTodecimal";
import parseInput from "../../helpers/parseInput";
import parsePosition from "../../helpers/degreeTodecimal";

const GetData = () => {
  const infoName = data.map((item) => item.Name);
  const [lineGraph, setLineGraph] = useState(true);
  const [barGraph, setBarGraph] = useState(false);
  const [scatterGraph, setScatterGraph] = useState(false);
  const infoAge = data.map((item) => item.Age);
  const infoDiameter = data.map((item) => item.Diameter);

  const handleLine = () => {
    setLineGraph(true);
    // lineGraph === false ? setLineGraph(true) : setLineGraph(false);
    setBarGraph(false);
    setScatterGraph(false);
  };
  const handleBar = () => {
    setBarGraph(true);
    //barGraph === false ? setBarGraph(true) : setBarGraph(false);
    setLineGraph(false);
    setScatterGraph(false);
  };
  const handleScatter = () => {
    setScatterGraph(true);
    //scatterGraph === false ? setBarGraph(true) : setBarGraph(false);
    setLineGraph(false);
    setBarGraph(false);
  };
  return (
    <div className="graph-container">
      <div className="line-graph">
        {lineGraph && (
          <Line
            data={{
              labels: infoName,
              datasets: [
                {
                  label: "million years",
                  data: infoAge,
                  borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                  ],
                  backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                  ],
                  yAxisID: "y",
                },
                {
                  label: "Diameter KM",
                  data: infoDiameter,
                  borderColor: [" rgba(42, 146, 172, 0.7)"],
                  backgroundColor: ["rgba(42, 146, 172, 0.7)"],
                  yAxisID: "y1",
                },
              ],
            }}
            height={100}
          />
        )}
      </div>
      <div>
        {barGraph && (
          <Bar
            data={{
              labels: infoName,
              datasets: [
                {
                  label: "million years",
                  data: infoAge,
                  borderColor: " rgba(166, 146, 172, 0.9)",
                  backgroundColor: ["rgba(166, 146, 172, 0.9"],
                  yAxisID: "y",
                },
                {
                  label: "Diameter KM",
                  data: infoDiameter,
                  borderColor: "rgba(157, 196, 128, 0.8)",
                  backgroundColor: ["rgba(157, 196, 128, 0.8)"],
                  yAxisID: "y1",
                },
              ],
            }}
            height={100}
          />
        )}
      </div>{" "}
      <p className="graph-title">
        <h1> List of impact craters on Earth</h1>
      </p>
      <div className="btn-container">
        <button className="line-btn" onClick={() => handleLine()}>
          Line graph
        </button>{" "}
        <button className="bar-btn" onClick={() => handleBar()}>
          Bar graph
        </button>{" "}
        {/* <button onClick={() => handleScatter()}>Scatter graph</button>  */}
      </div>{" "}
    </div>
  );
};

export default GetData;
