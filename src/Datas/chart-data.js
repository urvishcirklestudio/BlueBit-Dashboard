import { useState } from "react"
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom" 
 
export const RevenueGenerated={
  Earning:'97.5k',
  title:'Revenue Generated', 
  options: {
    chart: {
      height: 28,
      // type: "area",
      parentHeightOffset: 0,
      toolbar: {
        show: !1
      },
      sparkline: {
        enabled: !0
      }
    },
    
    grid: {
      show: !1
    },
    colors: ["#28c76f"],
     
    dataLabels: {
        enabled: !1
    },
    stroke: {
        width: 2,
        curve: "smooth"
    },
    xaxis: {
      show: !0,
      lines: {
          show: !1
      },
      labels: {
          show: !1
      },
      stroke: {
          width: 0
      },
      axisBorder: {
          show: !1
      }
    },
    yaxis: {
        stroke: {
            width: 0
        },
        show: !1
    },
    tooltip: {
        enabled: !1
    },
  },   
}

const getCurrentColor = (color) =>{ 
  const fullDate = new Date();
  return color.map((items,i)=>{
      if(fullDate.getDay() === i){
        return items = '#6255f8'
      }
      return items;
   })
   
  

}
export const EarningReport={
  weekEarnings:468,
  EarningsRatio:4.2,
  WeeklyOverview:{
    Earning:545.69,
    Profit:256.34,
    Expanse:74.19
  },
  options: {
    chart: { 
      type: 'bar', 
      toolbar: {
        show: !1
      },   
      parentHeightOffset: 0,

    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        // borderRadiusApplication: 'end',
        columnWidth: '45%',
 
        distributed: true,
      }
    },
    markers: {
      show:false,
      colors: "transparent",
      strokeColors: "transparent"
    },
    grid: {show: !1},
    legend: {
      show: false
    }, 
    colors: getCurrentColor(['#7267f03d', '#7267f03d', '#7267f03d', '#7267f03d', '#7267f03d', '#7267f03d','#7267f03d']), 
    dataLabels: {enabled: !1,}, 
    xaxis: {
      show: !0,
      lines: {
          show: !1
      },
      axisTicks: {
        show: false
      },
      categories: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
      // labels: {
      //     show: !1
      // },
      stroke: {
          width: 0
      },
      axisBorder: {
          show: !1
      },
      labels: {
        style: { 
          fontSize: "12px", 
          colors: getCurrentColor(['#7267f03d', '#7267f03d', '#7267f03d', '#7267f03d', '#7267f03d', '#7267f03d','#7267f03d']),
        }
    }
    },
    yaxis: {
        stroke: {
            width: 0
        },
        show: !1
    },
    tooltip: {
        enabled: !1
    },
     
  },  
}

export const TicketsReports={
  TotalTicketValue:164,
  WeeklyTicketReport:{
    NewTicket:142,
    OpenTicket:28,
    ResponseTime:1 + 'Day',
  },
  options: {
    chart: {
      height: 350,
      type: 'radialBar',
      offsetY: -10
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: { 
            color: undefined,
            offsetY: 0
          },
          value: {
            offsetY: 0,
            fontSize: '24px',
            fontWeight:600,
            color: undefined,
            formatter: function (val) {
              return val + "%";
            }
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
      },
    },
    stroke: {
      dashArray: 10
    },
    labels: ['Median Ratio'],
  },
}

 
 
