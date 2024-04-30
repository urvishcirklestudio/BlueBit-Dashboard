import React, { useState } from 'react'
import Card from '../Cards/Card'
import { TicketsReports } from '../../Datas/chart-data'
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux';
import useDarkmode from '../hooks/useDarkmode';


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
