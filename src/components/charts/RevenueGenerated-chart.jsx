import React, { useEffect, useState } from 'react'
import Card from '../Cards/Card'
import { RevenueGenerated } from '../../Datas/chart-data'
import { IoCardOutline } from "react-icons/io5";
import ReactApexChart from 'react-apexcharts';
function RevenueGeneratedChart() {
const [revenueChart,setRevenueChart] = useState([200, 55, 801, 250])
 
  return (
    <Card className="revenue_generated">
        <div className="top_wpr">
            <div className="icons bg-label-sucess d-flex"><IoCardOutline /></div>
            <div className="earnings fw-bold"><h5>{RevenueGenerated.Earning}</h5></div>
            <div className="title">{RevenueGenerated.title}</div>
        </div>
        <div className="chart_wpr">
        <ReactApexChart 
              options={RevenueGenerated.options}
              series={[{data:revenueChart}]} 
              type="area" 
              height='110px'
            />
        </div>
    </Card>
  )
}

export default RevenueGeneratedChart
