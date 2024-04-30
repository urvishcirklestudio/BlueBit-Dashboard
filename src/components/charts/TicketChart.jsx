import React, { useEffect, useState } from 'react'
import Card from '../Cards/Card'
import { TicketsReports } from '../../Datas/chart-data'
import ReactApexChart from 'react-apexcharts'


function TicketChart({data,options}) {
  return (
    <ReactApexChart 
            options={options}
            series={[data]} 
            type="radialBar"  
        />  
  )
}

export default TicketChart
