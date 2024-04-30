import React, { useState } from 'react'
import { EarningReport } from '../../Datas/chart-data'
import ReactApexChart from 'react-apexcharts'

function EarningChart({data,options}) {  
  return ( 
    <ReactApexChart 
              options={options}
              series={[{data}]} 
              type="bar" 
              // height='310px'
            />
  )
}

export default EarningChart
