import React, { useState } from 'react';
import Link from 'next/link';
import HeaderTop from '@/components/HeaderTop';
import SearchHeader from '@/components/SearchHeader';
import HeaderNav from '@/components/HeaderNav';
import ServiceArea from '@/components/ServiceArea';
interface VendorListProps {}

const VendorList: React.FC<VendorListProps> = () => {
    // Define state with a type
    const [activeTab, setActiveTab] = useState<string>('profile-tab');

    // Handle tab click with type for tabId
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };
    return(
        <div>
            <HeaderTop></HeaderTop>
            <SearchHeader></SearchHeader>
            <HeaderNav></HeaderNav>
<div className="rts-navigation-area-breadcrumb bg_solid-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="navigator-breadcrumb-wrapper">
                        <Link href="/Index">Home</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link className="current" href="/Index">Vendor Grid</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="vendor-search-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="vendor-search-area-wrapper">
                        <h1 className="title">Vendors List</h1>
                        <form action="#" className="search-vendor-form">
                            <input type="text" placeholder="Search vendors (by name or ID)..."/>
                            <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                <div className="btn-text">
                                    Search
                                </div>
                                <div className="arrow-icon">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div className="arrow-icon">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="vendor-search-area rts-section-gap">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="filter-search-area-top-between filter-select-area">
                        <div className="top-filter">
                            <span>Showing 1–20 of 57 results</span>
                            <div className="right-end">
                                <span>Sort: Short By Latest</span>
                                <div className="button-tab-area">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                        <button   className={`nav-link single-button ${activeTab === 'home-tab' ? 'active' : ''}`}  id="home-tab"  onClick={() => handleTabClick('home-tab')} type="button" role="tab" aria-controls="home-tab-pane" aria-selected={activeTab === 'home-tab'} >
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width="6" height="6" rx="1.5" stroke="#2C3B28"></rect>
                                                <rect x="0.5" y="9.5" width="6" height="6" rx="1.5" stroke="#2C3B28"></rect>
                                                <rect x="9.5" y="0.5" width="6" height="6" rx="1.5" stroke="#2C3B28"></rect>
                                                <rect x="9.5" y="9.5" width="6" height="6" rx="1.5" stroke="#2C3B28"></rect>
                                                </svg>  
                                          </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                        <button className={`nav-link single-button ${activeTab === 'profile-tab' ? 'active' : ''}`} id="profile-tab" onClick={() => handleTabClick('profile-tab')}  type="button" role="tab" aria-controls="profile-tab-pane" aria-selected={activeTab === 'profile-tab'}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width="6" height="6" rx="1.5" stroke="#2C3C28"></rect>
                                                <rect x="0.5" y="9.5" width="6" height="6" rx="1.5" stroke="#2C3C28"></rect>
                                                <rect x="9" y="3" width="7" height="1" fill="#2C3C28"></rect>
                                                <rect x="9" y="12" width="7" height="1" fill="#2C3C28"></rect>
                                                </svg>
                                          </button>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content" id="myTabContent">
                    {activeTab === 'home-tab' && (   

                        <div className="mt--20 tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                            <div className="row g-4">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-vendor-area">
                                        <div className="logo-vendor">
                                            <img src="images/vendor/01.svg" alt="vendor"/>
                                        </div>
                                        <h3 className="title">Fresh Iuice Bar <span className="closed">Closed</span></h3>
                                        <div className="stars-area">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <span>4.50 out of 5</span>
                                        </div>
                                        <div className="location">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <p>530 Post Ct  El Dorado Hills
                                                California ,United States</p>
                                        </div>
                                        <div className="location">
                                            <i className="fa-solid fa-phone-volume"></i>
                                            <p>+1 (511) 934-8170
                                            </p>
                                        </div>
                                        <a href="vendor-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                            <div className="btn-text">
                                                Visit Store
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-vendor-area">
                                        <div className="logo-vendor">
                                            <img src="images/vendor/02.svg" alt="vendor"/>
                                        </div>
                                        <h3 className="title">Food Character <span className="open">Open</span></h3>
                                        <div className="stars-area">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <span>4.50 out of 5</span>
                                        </div>
                                        <div className="location">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <p>530 Post Ct  El Dorado Hills
                                                California ,United States</p>
                                        </div>
                                        <div className="location">
                                            <i className="fa-solid fa-phone-volume"></i>
                                            <p>+1 (511) 934-8170
                                            </p>
                                        </div>
                                        <a href="vendor-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                            <div className="btn-text">
                                                Visit Store
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-vendor-area">
                                        <div className="logo-vendor">
                                            <img src="images/vendor/03.svg" alt="vendor"/>
                                        </div>
                                        <h3 className="title">Food Forulard <span className="open">Open</span></h3>
                                        <div className="stars-area">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <span>4.50 out of 5</span>
                                        </div>
                                        <div className="location">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <p>530 Post Ct  El Dorado Hills
                                                California ,United States</p>
                                        </div>
                                        <div className="location">
                                            <i className="fa-solid fa-phone-volume"></i>
                                            <p>+1 (511) 934-8170
                                            </p>
                                        </div>
                                        <a href="vendor-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                            <div className="btn-text">
                                                Visit Store
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-vendor-area">
                                        <div className="logo-vendor">
                                            <img src="images/vendor/04.svg" alt="vendor"/>
                                        </div>
                                        <h3 className="title">Authentic Grocery  <span className="closed">Closed</span></h3>
                                        <div className="stars-area">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <span>4.50 out of 5</span>
                                        </div>
                                        <div className="location">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <p>530 Post Ct  El Dorado Hills
                                                California ,United States</p>
                                        </div>
                                        <div className="location">
                                            <i className="fa-solid fa-phone-volume"></i>
                                            <p>+1 (511) 934-8170
                                            </p>
                                        </div>
                                        <a href="vendor-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                            <div className="btn-text">
                                                Visit Store
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-vendor-area">
                                        <div className="logo-vendor">
                                            <img src="images/vendor/05.svg" alt="vendor"/>
                                        </div>
                                        <h3 className="title">Fresh Food<span className="open">Open</span></h3>
                                        <div className="stars-area">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <span>4.50 out of 5</span>
                                        </div>
                                        <div className="location">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <p>530 Post Ct  El Dorado Hills
                                                California ,United States</p>
                                        </div>
                                        <div className="location">
                                            <i className="fa-solid fa-phone-volume"></i>
                                            <p>+1 (511) 934-8170
                                            </p>
                                        </div>
                                        <a href="vendor-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                            <div className="btn-text">
                                                Visit Store
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-vendor-area">
                                        <div className="logo-vendor">
                                            <img src="images/vendor/06.svg" alt="vendor"/>
                                        </div>
                                        <h3 className="title">Food Forulard <span className="open">Open</span></h3>
                                        <div className="stars-area">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <span>4.50 out of 5</span>
                                        </div>
                                        <div className="location">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <p>530 Post Ct  El Dorado Hills
                                                California ,United States</p>
                                        </div>
                                        <div className="location">
                                            <i className="fa-solid fa-phone-volume"></i>
                                            <p>+1 (511) 934-8170
                                            </p>
                                        </div>
                                        <a href="vendor-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                            <div className="btn-text">
                                                Visit Store
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-vendor-area">
                                        <div className="logo-vendor">
                                            <img src="images/vendor/07.svg" alt="vendor"/>
                                        </div>
                                        <h3 className="title">Food Forulard <span className="open">Open</span></h3>
                                        <div className="stars-area">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <span>4.50 out of 5</span>
                                        </div>
                                        <div className="location">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <p>530 Post Ct  El Dorado Hills
                                                California ,United States</p>
                                        </div>
                                        <div className="location">
                                            <i className="fa-solid fa-phone-volume"></i>
                                            <p>+1 (511) 934-8170
                                            </p>
                                        </div>
                                        <a href="vendor-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                            <div className="btn-text">
                                                Visit Store
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-vendor-area">
                                        <div className="logo-vendor">
                                            <img src="images/vendor/08.svg" alt="vendor"/>
                                        </div>
                                        <h3 className="title">Botanic Natural Product<span className="open">open</span></h3>
                                        <div className="stars-area">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <span>4.50 out of 5</span>
                                        </div>
                                        <div className="location">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <p>530 Post Ct  El Dorado Hills
                                                California ,United States</p>
                                        </div>
                                        <div className="location">
                                            <i className="fa-solid fa-phone-volume"></i>
                                            <p>+1 (511) 934-8170
                                            </p>
                                        </div>
                                        <a href="vendor-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                            <div className="btn-text">
                                                Visit Store
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                {activeTab === 'profile-tab' && (   

                        <div className="with-list mt--20 tab-pane fade  show active" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="single-vendor-area">
                                        <div className="logo-vendor">
                                            <img src="images/vendor/01.svg" alt="vendor"/>
                                        </div>
                                        <div className="inner">
                                            <h3 className="title">Fresh Iuice Bar <span className="closed">Closed</span></h3>
                                            <div className="stars-area">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <span>4.50 out of 5</span>
                                            </div>
                                            <div className="location">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <p>530 Post Ct  El Dorado Hills
                                                    California ,United States</p>
                                            </div>
                                            <div className="location">
                                                <i className="fa-solid fa-phone-volume"></i>
                                                <p>+1 (511) 934-8170
                                                </p>
                                            </div>
                                            <a href="vendor-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                                <div className="btn-text">
                                                    Visit Store
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-vendor-area">
                                        <div className="logo-vendor">
                                            <img src="images/vendor/02.svg" alt="vendor"/>
                                        </div>
                                        <div className="inner">
                                            <h3 className="title">Food Character <span className="open">Open</span></h3>
                                            <div className="stars-area">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <span>4.50 out of 5</span>
                                            </div>
                                            <div className="location">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <p>530 Post Ct  El Dorado Hills
                                                    California ,United States</p>
                                            </div>
                                            <div className="location">
                                                <i className="fa-solid fa-phone-volume"></i>
                                                <p>+1 (511) 934-8170
                                                </p>
                                            </div>
                                            <a href="vendor-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                                <div className="btn-text">
                                                    Visit Store
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-vendor-area">
                                        <div className="logo-vendor">
                                            <img src="images/vendor/03.svg" alt="vendor"/>
                                        </div>
                                        <div className="inner">
                                            <h3 className="title">Food Forulard <span className="open">Open</span></h3>
                                            <div className="stars-area">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <span>4.50 out of 5</span>
                                            </div>
                                            <div className="location">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <p>530 Post Ct  El Dorado Hills
                                                    California ,United States</p>
                                            </div>
                                            <div className="location">
                                                <i className="fa-solid fa-phone-volume"></i>
                                                <p>+1 (511) 934-8170
                                                </p>
                                            </div>
                                            <a href="vendor-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                                <div className="btn-text">
                                                    Visit Store
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-vendor-area">
                                        <div className="logo-vendor">
                                            <img src="images/vendor/04.svg" alt="vendor"/>
                                        </div>
                                        <div className="inner">
                                            <h3 className="title">Authentic Grocery  <span className="closed">Closed</span></h3>
                                            <div className="stars-area">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <span>4.50 out of 5</span>
                                            </div>
                                            <div className="location">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <p>530 Post Ct  El Dorado Hills
                                                    California ,United States</p>
                                            </div>
                                            <div className="location">
                                                <i className="fa-solid fa-phone-volume"></i>
                                                <p>+1 (511) 934-8170
                                                </p>
                                            </div>
                                            <a href="vendor-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                                <div className="btn-text">
                                                    Visit Store
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-vendor-area">
                                        <div className="logo-vendor">
                                            <img src="images/vendor/05.svg" alt="vendor"/>
                                        </div>
                                        <div className="inner">
                                            <h3 className="title">Fresh Food<span className="open">Open</span></h3>
                                            <div className="stars-area">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <span>4.50 out of 5</span>
                                            </div>
                                            <div className="location">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <p>530 Post Ct  El Dorado Hills
                                                    California ,United States</p>
                                            </div>
                                            <div className="location">
                                                <i className="fa-solid fa-phone-volume"></i>
                                                <p>+1 (511) 934-8170
                                                </p>
                                            </div>
                                            <a href="vendor-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                                <div className="btn-text">
                                                    Visit Store
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-vendor-area">
                                        <div className="logo-vendor">
                                            <img src="images/vendor/06.svg" alt="vendor"/>
                                        </div>
                                        <div className="inner">
                                            <h3 className="title">Food Forulard <span className="open">Open</span></h3>
                                            <div className="stars-area">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <span>4.50 out of 5</span>
                                            </div>
                                            <div className="location">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <p>530 Post Ct  El Dorado Hills
                                                    California ,United States</p>
                                            </div>
                                            <div className="location">
                                                <i className="fa-solid fa-phone-volume"></i>
                                                <p>+1 (511) 934-8170
                                                </p>
                                            </div>
                                            <a href="vendor-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                                <div className="btn-text">
                                                    Visit Store
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-vendor-area">
                                        <div className="logo-vendor">
                                            <img src="images/vendor/07.svg" alt="vendor"/>
                                        </div>
                                        <div className="inner">
                                            <h3 className="title">Food Forulard <span className="open">Open</span></h3>
                                            <div className="stars-area">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <span>4.50 out of 5</span>
                                            </div>
                                            <div className="location">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <p>530 Post Ct  El Dorado Hills
                                                    California ,United States</p>
                                            </div>
                                            <div className="location">
                                                <i className="fa-solid fa-phone-volume"></i>
                                                <p>+1 (511) 934-8170
                                                </p>
                                            </div>
                                            <a href="vendor-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                                <div className="btn-text">
                                                    Visit Store
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-vendor-area">
                                        <div className="logo-vendor">
                                            <img src="images/vendor/08.svg" alt="vendor"/>
                                        </div>
                                        <div className="inner">
                                            <h3 className="title">Botanic Natural Product<span className="open">open</span></h3>
                                            <div className="stars-area">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <span>4.50 out of 5</span>
                                            </div>
                                            <div className="location">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <p>530 Post Ct  El Dorado Hills
                                                    California ,United States</p>
                                            </div>
                                            <div className="location">
                                                <i className="fa-solid fa-phone-volume"></i>
                                                <p>+1 (511) 934-8170
                                                </p>
                                            </div>
                                            <a href="vendor-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                                <div className="btn-text">
                                                    Visit Store
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                )}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ServiceArea></ServiceArea>
        </div>
    );
};
export default VendorList;