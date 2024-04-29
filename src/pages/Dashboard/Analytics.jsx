import React from 'react'
import Card from '../../components/Cards/Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './dashboard.scss' 
import { PiShoppingCartSimple,PiLinkLight } from "react-icons/pi";
import { AnalyticsSliderData } from '../../Datas/data';
import RevenueGeneratedChart from '../../components/charts/RevenueGenerated-chart';
import { useState } from 'react';
import { useEffect } from 'react';
import CardsHeading from '../../components/Cards/CardsHeading';
import CardBody from '../../components/Cards/CardBody';
import EarningChart from '../../components/charts/EarningChart';
function Analytics() {
  const [data, setData] = useState([35, 51, 49, 62, 69, 91]);

  useEffect(() => {
    const interval = setInterval(() => {
      const val = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
      let array = [...data, val];
      array.shift();
      setData(array);
    }, 2000);
    return () => {
      window.clearInterval(interval); // clear the interval in the cleanup function
    };
  }, [data]);
  return (
    <div className="analytics_dashboard">
      <div className='row'>
        <div className="mt-4 col-12 col-md-6 ">
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
                <div className="col-7">
                    <div className="heading"><h3>{items.MainHeading}</h3><p className='fs-5 mt-2'>{items.Description}</p></div>
                    <div className="revenue_sources_wpr">
                      <div className="title"><h4>{items.TagsHeading}</h4></div>
                      <div className="sources_grp_wpr row mt-4">
                        {
                          items.tagsItems.map((tags,i)=><div className="col-6 d-flex align-items-center sources_items" key={i}><div className="number_label">{tags.number}</div><p>{tags.label}</p></div>)
                        }  
                      </div>
                    </div>
                </div>
                <div className="col-5"><div className="image_box"><img src={items.Image} alt="" /></div></div> 
              </SwiperSlide>
            )} 
          </Swiper>        
          </Card>
        </div>
        <div className="p-md-0 mt-4 col-12 col-md-6">
          <div className="row h-100">
              <div className="col-md-6 h-100">
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

              <div className="col-md-6 h-100">
                  <RevenueGeneratedChart/>
              </div>
          </div>
        </div>
        <div className="mt-4 col-12 col-md-6">
          <Card className='earningChart'>
            <CardsHeading>
              <h5>Earning Reports</h5>
              <p>Weekly Earnings Overview</p>
            </CardsHeading>
            <CardBody>
              <div className="row ChartWpr align-items-end">
                <div className="col-4 ps-0">
                  <div className="income d-flex align-items-center">
                    <h2>$468</h2>
                    <div className="bg-label-sucess rating">+4.2%</div>
                  </div>
                  <div className="desc">
                    <p>You informed of this week compared to last week</p>
                  </div>
                </div>
                <div className="col-8 ps-e">
                  <EarningChart/>
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
