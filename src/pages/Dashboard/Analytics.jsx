import React from 'react'
import Card from '../../components/Cards/Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './dashboard.scss' 
import { PiShoppingCartSimple,PiLinkLight,PiChartLineDown,PiChartLineUp } from "react-icons/pi";
import { AnalyticsSliderData } from '../../Datas/data';
import RevenueGeneratedChart from '../../components/charts/RevenueGenerated-chart';
import { useState } from 'react';
import { useEffect } from 'react';
import CardsHeading from '../../components/Cards/CardsHeading';
import CardBody from '../../components/Cards/CardBody';
import EarningChart from '../../components/charts/EarningChart';
import { EarningReport, TicketsReports } from '../../Datas/chart-data';
import { BsCurrencyDollar } from "react-icons/bs"; 
import { IoTicketOutline } from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import TicketChart from '../../components/charts/TicketChart';
function Analytics() { 
  const [earningReportsdata,setEarningReportsdata] = useState([30, 77, 83, 20, 67, 30,93])
  const [ticketReportsdata,setTicketReportsdata] = useState([60])
   
  return (
    <div className="analytics_dashboard">
      <div className='row'>
        <div className="mt-4 col-12 col-lg-6 ">
          <Card className='webanalytics_slider p-0'>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              className='w-100 position-relative'
            >
              {AnalyticsSliderData.map((items,i)=>
                <SwiperSlide className='analytics_slide_items row d-flex justify-content-between' key={i}> 
                  <div className="slide_items_cont col-12 col-sm-7 ps-0">
                      <div className="heading"><h3>{items.MainHeading}</h3><p className='fs-5 mt-2'>{items.Description}</p></div>
                      <div className="pe-0 d-sm-none"><div className="image_box"><img src={items.Image} alt="" /></div></div> 

                      <div className="revenue_sources_wpr">
                        <div className="title"><h4>{items.TagsHeading}</h4></div>
                        <div className="sources_grp_wpr d-grid mt-4">
                          {
                            items.tagsItems.map((tags,i)=><div className="col-6 p-0 d-flex align-items-center sources_items" key={i}><div className="number_label">{tags.number}</div><p>{tags.label}</p></div>)
                          }  
                        </div>
                      </div>
                  </div>
                  <div className="col-5 pe-0 d-none d-sm-block"><div className="image_box"><img src={items.Image} alt="" /></div></div> 
                </SwiperSlide>
              )} 
            </Swiper>        
          </Card>
        </div>
        <div className="p-md-0 mt-4 col-12 col-lg-6">
          <div className="row SalesRevenue">
              <div className="col-sm-6 SalesRevenue_items">
                  <Card className="sales_overview">
                      <div className="heading">
                        <div className="d-flex align-items-center justify-content-between card_name">
                          <p>Sales Overview</p>
                          <span className='rating'>+18.2%</span>
                        </div>
                        <h4 className='earning mt-2'>$42.5k</h4>
                      </div>
                      <div className="sales_grp d-flex justify-content-between">
                        <div className="sales_items">
                          <div className="title d-flex align-items-center">
                            <div className=" icons bg-label-info"><PiShoppingCartSimple /></div>
                            <p>Order</p>
                          </div>
                          <div className="percentage"><h4>65%</h4></div>
                          <div className="total">5413,2</div>
                        </div>
                        <div className="line_div"></div>
                        <div className="sales_items text-end">
                          <div className="title d-flex align-items-center">
                            <p>Visits</p>
                            <div className=" icons bg-label-primary"><PiLinkLight /></div>
                          </div>
                          <div className="percentage"><h4>25.5%</h4></div>
                          <div className="total">12,749</div>
                        </div>
                      </div>
                      <div className="progress_grp d-grid">
                      <div className="progress order_progress">
                        <div className="progress-bar" style={{width: 25.5+'%'}}></div>
                      </div> 
                      <div className="progress visit_progress">
                        <div className="progress-bar" style={{width: 65+'%'}}></div>
                      </div>
                      </div>
                  </Card>
              </div>

              <div className="col-sm-6 SalesRevenue_items">
                  <RevenueGeneratedChart/>
              </div>
          </div>
        </div>
        <div className="mt-4 col-12 col-lg-6">
          <Card className='earningChart'>
            <CardsHeading>
              <h5>Earning Reports</h5>
              <p>Weekly Earnings Overview</p>
            </CardsHeading>
            <CardBody>
              <div className="row ChartWpr align-items-end">
                <div className="col-12 col-sm-4 ps-0">
                  <div className="income d-flex align-items-center">
                    <h2>${EarningReport.weekEarnings}</h2>
                    <div className="bg-label-sucess rating">+{EarningReport.EarningsRatio}%</div>
                  </div>
                  <div className="desc">
                    <p>You informed of this week compared to last week</p>
                  </div>
                </div>
                <div className="col-12 col-sm-8 ps-e">
                  <EarningChart data={earningReportsdata} options={EarningReport.options}/>
                </div>
                <div className="col-12 p-0 mt-5 mt-lg-4">
                  <div className="report_wpr d-grid">
                    <div className="report_items">
                      <div className="title d-flex align-items-center">
                        <div className="icons bg-label-primary d-flex"><BsCurrencyDollar/></div>
                        <p class="ms-3">Earnings</p>
                      </div>
                      <div className="report_price my-4 my-sm-3">
                        <h4>${EarningReport.WeeklyOverview.Earning}</h4>
                      </div>
                      <div class="progress earning_progress">
                        <div class="progress-bar" style={{width: 60.5+'%'}}></div></div>
                    </div>
                    <div className="report_items">
                      <div className="title d-flex align-items-center">
                        <div className="icons bg-label-info d-flex"><PiChartLineUp/></div>
                        <p class="ms-3">Profits</p>
                      </div>
                      <div className="report_price my-4 my-sm-3">
                        <h4>${EarningReport.WeeklyOverview.Profit}</h4>
                      </div>
                      <div class="progress profit_progress">
                        <div class="progress-bar" style={{width: 60.5+'%'}}></div></div>
                    </div>
                    <div className="report_items">
                      <div className="title d-flex align-items-center">
                        <div className="icons bg-label-danger d-flex"><PiChartLineDown /></div>
                        <p class="ms-3">Expance</p>
                      </div>
                      <div className="report_price my-4 my-sm-3">
                        <h4>${EarningReport.WeeklyOverview.Expanse}</h4>
                      </div>
                      <div class="progress expanse_progress">
                        <div class="progress-bar" style={{width: 60.5+'%'}}></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="mt-4 col-12 col-lg-6">
          <Card className='ticketChart'>
            <CardsHeading>
              <h5>Support Tracker</h5>
              <p>Last 7 Days</p>
            </CardsHeading>
            <CardBody>
              <div className="row">
                <div className="col-12 col-md-4 ps-0">
                  <div className="total-ticket">
                    <h2>168</h2>
                    <p className='mt-2'>Total Tickets</p>
                  </div>
                  <div className="TicketsWpr d-grid">
                    <div className="ticketsItems d-flex align-items-center">
                      <div className="icons d-flex bg-label-primary"><IoTicketOutline/></div>
                      <div className="ticketsCont">
                        <p>New Tickets</p>
                        <span>{TicketsReports.WeeklyTicketReport.NewTicket}</span>
                      </div>
                    </div>
                    <div className="ticketsItems d-flex align-items-center">
                      <div className="icons d-flex bg-label-info"><HiOutlineBookOpen/></div>
                      <div className="ticketsCont">
                        <p>Open Tickets</p>
                        <span>{TicketsReports.WeeklyTicketReport.OpenTicket}</span>
                      </div>
                    </div>
                    <div className="ticketsItems d-flex align-items-center">
                      <div className="icons d-flex bg-label-warning"><IoMdTime/></div>
                      <div className="ticketsCont">
                        <p>Response Time</p>
                        <span>{TicketsReports.WeeklyTicketReport.ResponseTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8 ps-0">
                  <TicketChart data={ticketReportsdata} options={TicketsReports.options}/>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>


      </div>
    </div>
  )
}

export default Analytics
