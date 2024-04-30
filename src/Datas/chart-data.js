import { useState } from "react"
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom" 
import useDarkmode from "../components/hooks/useDarkmode";

export const GetThemeMode = () => { 
  const IsDaek = document.querySelector('body').classList
  console.log(IsDaek);
}
 
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
  weekEarnings:500,
  EarningsRatio:4.2,
  WeeklyOverview:{
    Earning:545.69,
    Profit:256.34,
    Expanse:74.19
  },
  options: {
    chart: { 
      height:202,
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
      height: 400,
      type: 'radialBar',
      offsetY: 0
    }, 
    labels: ['Completed Task'],
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: -130,
        endAngle: 170,
        hollow: {
          size: "70%"
        },
        track: {
          background: 'transperent',
          strokeWidth: "100%"
        },  
        dataLabels: {
          name: {
            offsetY: -20,
            color: 'currentColor',
            fontSize: "13px",
            fontWeight: "400", 
          },
          value: {
            fontSize: "38px",
            fontWeight: "600",
            offsetY: 10,
            color: '#6255f8',  
          }
        }
      }
    },
    colors: ['#6255f8'],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: .5,
        gradientToColors: ['#6255f8'],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: .6,
        stops: [30, 70, 100]
      }
    },
    stroke: {
      dashArray: 12
    },
    grid: {
      padding: {
        top: -0,
        bottom: 0
      } 
    },
    states: {
      hover: {
        filter: {
          type: "none"
        }
      },
      active: {
        filter: {
          type: "none"
        }
      }
    },
    responsive: [
      {
        breakpoint: 1800,
        options: {
          chart: {
            height: 350
          }
        }
      },{
        breakpoint: 1500,
        options: {
          chart: {
            height: 330
          }
        }
      },{
      breakpoint: 1280,
      options: {
        chart: {
          height: 330
        },
        plotOptions: {
          radialBar: {  
            dataLabels: {
              value: {
                fontSize: "32px", 
                offsetY: 6, 
              }
            }
          }
        },
      }
    },{
      breakpoint: 992,
      options: {
        chart: {
          height: 350
        }
      }
    },{
      breakpoint: 768,
      options: {
        chart: {
          height: 280
        }
      }
    }]
  },
}

export const Sales_By_Countries = [
  { 
    Sales:8567,
    countryCode:'US',
    CountryName:'United states',
    salesTrack:'up',
    salesRatio:25.8
  },{ 
    countryCode:'BR',
    Sales:2250,
    CountryName:'Brazil',
    salesTrack:'down',
    salesRatio:6.5
  },{
    countryCode:'IN',
    Sales:25840,
    CountryName:'India',
    salesTrack:'up',
    salesRatio:26.2
  },{
    countryCode:'AU',
    Sales:13514,
    CountryName:'Australia',
    salesTrack:'up',
    salesRatio:14.5
  },{
    countryCode:'FR',
    Sales:4001,
    CountryName:'France',
    salesTrack:'down',
    salesRatio:3.6
  },{
    countryCode:'CN',
    Sales:7632,
    CountryName:'China',
    salesTrack:'down',
    salesRatio:14.3
  },{
    countryCode:'JP',
    Sales:4771,
    CountryName:'Japan',
    salesTrack:'up',
    salesRatio:12.7
  },{
    countryCode:'ES',
    Sales:6312,
    CountryName:'Spain',
    salesTrack:'up',
    salesRatio:9.1
  },{
    countryCode:'GR',
    Sales:2615,
    CountryName:'Germany',
    salesTrack:'down',
    salesRatio:15.4
  },
]
import { BsCurrencyDollar,BsPaypal } from "react-icons/bs"; 
export const TotalEarnigs = {
  TotalEarning:87,
  earningTrack:'up',
  EarningRate:25.5,
  Earningoverview:[
    {
      icons:BsCurrencyDollar,
      iconsColor:'primary',
      title:'Total Earning',
      label:'Refund',
      earning:98
    },{
      icons:BsPaypal,
      iconsColor:'secondary',
      title:'Total Revenue',
      label:'Client Payment',
      earning:126
    }
  ],
  
  options: {
    chart: {
      type: 'bar',
      height: 440,
      stacked: true,
      toolbar: {
        show: !1
      }
    },
    tooltip: {
      enabled: !1
    },
    legend: {
      show: !1
    },
    colors: ['#6255f8','#7267f03d'],
    plotOptions: {
      bar: { 
        borderRadiusApplication: 'end', // 'around', 'end'
        borderRadiusWhenStacked: 'all', // 'all', 'last' 
        horizontal: !1, 
        columnWidth: "30%",
        borderRadius: 5,
        startingShape: "rounded",
        endingShape: "rounded"
      },
    },
    dataLabels: {
      enabled: !1
    },
    grid: {
      show: false,
      padding: {
        top: -30,
        bottom: -0,
        left: -8,
        right: -0
      }
    }, 
    xaxis: {
      labels: {
          show: !1
      },
      axisTicks: {
          show: !1
      },
      axisBorder: {
          show: !1
      }
    },
    yaxis: {
      labels: {
        show: !1
      }, 
    },
     
    states: {
      hover: {
        filter: {
          type: "none"
        }
      },
      active: {
        filter: {
          type: "none"
        }
      }
    }
  },
}
 
 
