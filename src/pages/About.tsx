// pages/about-us.tsx

import Footer from '@/components/Footer';
import HeaderNav from '@/components/HeaderNav';
import HeaderTop from '@/components/HeaderTop';
import SearchHeader from '@/components/SearchHeader';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Import Navigation module
import 'swiper/css';
import 'swiper/css/navigation';
import ServiceArea from '@/components/ServiceArea';


const AboutUs: React.FC = () => {
  return (
    <>
    
<HeaderTop></HeaderTop>
<SearchHeader></SearchHeader>
<HeaderNav></HeaderNav>
      <div className="about-banner-area-bg rts-section-gap bg_iamge">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content-about-area">
                <h1 className="title">Do You Want To Know Us?</h1>
                <p className="disc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu finibus nunc ullamcorper et.
                </p>
                <a href="#" className="rts-btn btn-primary">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts-counter-area">
        <div className="container-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="counter-area-main-wrapper">
                <div className="single-counter-area">
                  <h2 className="title"><span className="counter">60</span>M+</h2>
                  <p>Happy <br /> Customers</p>
                </div>
                <div className="single-counter-area">
                  <h2 className="title"><span className="counter">105</span>M+</h2>
                  <p>Grocery <br /> Products</p>
                </div>
                <div className="single-counter-area">
                  <h2 className="title"><span className="counter">80</span>K+</h2>
                  <p>Active <br /> Salesman</p>
                </div>
                <div className="single-counter-area">
                  <h2 className="title"><span className="counter">60</span>K+</h2>
                  <p>Store <br /> Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts-about-area rts-section-gap2">
        <div className="container-3">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="thumbnail-left">
                <img src="images/about/02.jpg" alt="About Us" />
              </div>
            </div>
            <div className="col-lg-8 pl--60 pl_md--10 pt_md--30 pl_sm--10 pt_sm--30">
              <div className="about-content-area-1">
                <h2 className="title">
                  Your Destination for Quality Produce <br /> and Pantry Essentials
                </h2>
                <p className="disc">
                  Venenatis augue consequat class magnis sed purus, euismod ligula nibh congue quis vestibulum nostra, cubilia varius velit vitae rhoncus. Turpis malesuada fringilla urna dui est torquent aliquet, mi nec fermentum placerat nisi venenatis sapien, mattis nunc nullam rutrum feugiat porta. Pharetra mi nisl consequat semper quam litora aenean eros conubia molestie erat, et cursus integer rutrum sollicitudin auctor curae inceptos senectus sagittis est,
                </p>
                <div className="check-main-wrapper">
                  <div className="single-check-area">
                    Elementum sociis rhoncus aptent auctor urna justo
                  </div>
                  <div className="single-check-area">
                    Habitasse venenatis gravida nisl, sollicitudin posuere
                  </div>
                  <div className="single-check-area">
                    Uisque cum convallis nostra in sapien nascetur, netus
                  </div>
                  <div className="single-check-area">
                    Class nunc aliquet nulla dis senectus lputate porta
                  </div>
                  <div className="single-check-area">
                    Aenean gravida a est ante nisl nostra dui hendrerit
                  </div>
                  <div className="single-check-area">
                    Bibendum venenatis dignissim non himenaeos eget
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-seperator">
        <div className="container-3">
          <hr className="section-seperator" />
        </div>
      </div>

      <div className="meet-our-expert-team rts-section-gap2">
        <div className="container-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-center-area-main">
                <h2 className="title">Meet Our Expert Team</h2>
                <p className="disc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit...
                </p>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--40">
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="single-team-style-one">
                <a href="#" className="thumbnail">
                  <img src="images/team/01.jpg" alt="team_single" />
                </a>
                <div className="bottom-content-area">
                  <div className="top">
                    <h3 className="title">Samuel Alexander</h3>
                    <span className="designation">Design Director</span>
                  </div>
                  <div className="bottom">
                    <a href="#" className="number">
                      <i className="fa-light fa-phone-rotary"></i>
                      +25896 3158 3228
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="single-team-style-one">
                <a href="#" className="thumbnail">
                  <img src="images/team/02.jpg" alt="team_single" />
                </a>
                <div className="bottom-content-area">
                  <div className="top">
                    <h3 className="title">Isabella Charlotte</h3>
                    <span className="designation">Design Director</span>
                  </div>
                  <div className="bottom">
                    <a href="#" className="number">
                      <i className="fa-light fa-phone-rotary"></i>
                      +25896 3158 3228
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="single-team-style-one">
                <a href="#" className="thumbnail">
                  <img src="images/team/03.jpg" alt="team_single" />
                </a>
                <div className="bottom-content-area">
                  <div className="top">
                    <h3 className="title">William Ethan</h3>
                    <span className="designation">Design Director</span>
                  </div>
                  <div className="bottom">
                    <a href="#" className="number">
                      <i className="fa-light fa-phone-rotary"></i>
                      +25896 3158 3228
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="single-team-style-one">
                <a href="#" className="thumbnail">
                  <img src="images/team/04.jpg" alt="team_single" />
                </a>
                <div className="bottom-content-area">
                  <div className="top">
                    <h3 className="title">Sophia Amelia</h3>
                    <span className="designation">Design Director</span>
                  </div>
                  <div className="bottom">
                    <a href="#" className="number">
                      <i className="fa-light fa-phone-rotary"></i>
                      +25896 3158 3228
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts-service-area rts-section-gap2 bg_light-1">
        <div className="container-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-center-area-main">
                <h2 className="title">Why You Choose Us?</h2>
                <p className="disc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit...
                </p>
              </div>
            </div>
          </div>
          <div className="row mt--30 g-5">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="single-service-area-style-one">
                <div className="icon-area">
                  <span className="bg-text">01</span>
                  <img src="images/service/01.svg" alt="service" />
                </div>
                <div className="bottom-content">
                  <h3 className="title">Organic Food Services</h3>
                  <p className="disc">
                    When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="single-service-area-style-one">
                <div className="icon-area">
                  <span className="bg-text">02</span>
                  <img src="images/service/02.svg" alt="service" />
                </div>
                <div className="bottom-content">
                  <h3 className="title">Organic Food Services</h3>
                  <p className="disc">
                    When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="single-service-area-style-one">
                <div className="icon-area">
                  <span className="bg-text">03</span>
                  <img src="images/service/03.svg" alt="service" />
                </div>
                <div className="bottom-content">
                  <h3 className="title">Organic Food Services</h3>
                  <p className="disc">
                    When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rts-cuystomers-feedback-area rts-section-gap2">
        <div className="container-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-left pl--0">
                <h2 className="title-left mb--0">Customer Feedbacks</h2>
              </div>
            </div>
          </div>
          <div className="row mt--50">
            <div className="col-lg-12">
              <div className="customers-feedback-area-main-wrapper">
                <Swiper
                  spaceBetween={24}
                  slidesPerView={2}
                  loop={true}
                  speed={1000}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 24 },
                    320: { slidesPerView: 1, spaceBetween: 24 },
                    480: { slidesPerView: 1, spaceBetween: 24 },
                    640: { slidesPerView: 1, spaceBetween: 24 },
                    840: { slidesPerView: 1, spaceBetween: 24 },
                    1140: { slidesPerView: 2, spaceBetween: 24 },
                  }}
                >
                  <SwiperSlide>
                    <div className="single-customers-feedback-area">
                      <div className="top-thumbnail-area">
                        <div className="left">
                          <img src="images/testimonial/01.png" alt="Andrew D. Smith" />
                          <div className="information">
                            <h4 className="title">Andrew D. Smith</h4>
                            <span>Manager</span>
                          </div>
                        </div>
                        <div className="right">
                          <img src="images/testimonial/02.png" alt="Testimonial" />
                        </div>
                      </div>
                      <div className="body-content">
                        <p className="disc">
                          “According to the council of supply chain professionals the council of logistics management logistics is the process of planning, implementing and controlling procedures”
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-customers-feedback-area">
                      <div className="top-thumbnail-area">
                        <div className="left">
                          <img src="images/testimonial/01.png" alt="Andrew D. Smith" />
                          <div className="information">
                            <h4 className="title">Andrew D. Smith</h4>
                            <span>Manager</span>
                          </div>
                        </div>
                        <div className="right">
                          <img src="images/testimonial/02.png" alt="Testimonial" />
                        </div>
                      </div>
                      <div className="body-content">
                        <p className="disc">
                          “According to the council of supply chain professionals the council of logistics management logistics is the process of planning, implementing and controlling procedures”
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Add more SwiperSlide components as needed */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceArea></ServiceArea>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
