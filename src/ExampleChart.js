import React from 'react'
import { Chart } from "react-google-charts";
 
const ExampleChart=(props)=>{
  const {files}=props
const data = [
  ["Participants", "Duration"],
]

for(const key in files){
  data.push([files[key]['Name (Original Name)'], Number(files[key]['Total Duration (Minutes)'])])
}
 
const options = {
  title: "Participants vs. Duration",
  hAxis: { title: "Participants", viewWindow: { min: 0} },
  vAxis: { title: "Duration" },
  legend: "toggle"
}
  return (
  <div style={{display :'flex', maxWidth : 800}}>
    <Chart
      chartType="ColumnChart"
      data={data}
      options={options}
      graphID="ScatterChart"
      width={600}
      height={350}
    />
  </div>
  )
}
export default ExampleChart;