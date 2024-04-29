import React, { useState } from 'react'
import { EarningReport } from '../../Datas/chart-data'
import ReactApexChart from 'react-apexcharts'

function EarningChart() {
const [earningReportsdata,setEarningReportsdata] = useState([30, 77, 83, 20, 67, 30,93])

  return ( 
    <ReactApexChart 
              options={EarningReport.options}
              series={[{data:earningReportsdata}]} 
              type="bar" 
              // height='310px'
            />
  )
}

export default EarningChart
