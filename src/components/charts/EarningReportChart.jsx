import React, { useState } from 'react' 
import ReactApexChart from 'react-apexcharts'

function EarningReportChart({data,options}) {  
  return ( 
    <ReactApexChart 
              options={options}
              series={[{data}]} 
              type="bar" 
              height={202}
            />
  )
}

export default EarningReportChart
