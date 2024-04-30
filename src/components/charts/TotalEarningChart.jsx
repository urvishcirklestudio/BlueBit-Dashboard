import React from 'react'
import ReactApexChart from 'react-apexcharts'

function TotalEarningChart({data,options}) {
  return (
    <ReactApexChart 
              options={options}
              series={data} 
              type="bar" 
              height={250}
            />
  )
}

export default TotalEarningChart
