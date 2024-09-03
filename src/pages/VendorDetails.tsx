import Footer from "@/components/Footer";
import HeaderNav from "@/components/HeaderNav";
import HeaderTop from "@/components/HeaderTop";
import SearchHeader from "@/components/SearchHeader";
import ServiceArea from "@/components/ServiceArea";
import Link from "next/link";
import React from "react";
const VendorDetail:React.FC=()=>{
    return(
<div>
    <HeaderTop></HeaderTop>
    <SearchHeader></SearchHeader>
    <HeaderNav></HeaderNav>
<div className="rts-navigation-area-breadcrumb">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="navigator-breadcrumb-wrapper">
                        <a href="index-2.html">Home</a>
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link className="current" href="/Index">Food Forulard</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="section-seperator">
        <div className="container">
            <hr className="section-seperator"/>
        </div>
    </div>

    <div className="vendor-name">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="vendor-name-area-details">
                        <h1 className="title">Food Forulard</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="store-details-area rts-section-gap">
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-lg-12 pr--60 pr_md--10 pr_sm--10">
                    <div className="filter-area-vendor-details">
                        <div className="single-filter-box">
                            <h5 className="title">Product Categories</h5>
                            <div className="filterbox-body">
                                <div className="category-wrapper">
                                   
                                    <div className="single-category">
                                        <input id="cat1" type="checkbox"/>
                                        <label htmlFor="cat1">Beverages
                                        </label>
                                    </div>
                                   
                                    <div className="single-category">
                                        <input id="cat2" type="checkbox"/>
                                        <label htmlFor="cat2">Biscuits &amp; Snacks

                                        </label>
                                    </div>
                                    
                                    <div className="single-category">
                                        <input id="cat3" type="checkbox"/>
                                        <label htmlFor="cat3">Breads &amp; Bakery            
                                        </label>
                                    </div>
                                    
                                    <div className="single-category">
                                        <input id="cat4" type="checkbox"/>
                                        <label htmlFor="cat4">Breakfast &amp; Dairy
                                        </label>
                                    </div>
                                   
                                    <div className="single-category with-more">
                                        <input id="cat5" type="checkbox"/>
                                        <label htmlFor="cat5">Frozen Foods

                                        </label>
                                    </div>
                                   
                                    <div className="single-category">
                                        <input id="cat6" type="checkbox"/>
                                        <label htmlFor="cat6">Fruits &amp; Vegetables

                                        </label>
                                    </div>
                                    
                                    <div className="single-category with-more">
                                        <input id="cat7" type="checkbox"/>
                                        <label htmlFor="cat7">Grocery &amp; Staples
                                            
                                        </label>
                                    </div>
                           
                                    <div className="single-category">
                                        <input id="cat8" type="checkbox"/>
                                        <label htmlFor="cat8">Household Needs

                                        </label>
                                    </div>
                                   
                                    <div className="single-category">
                                        <input id="cat10" type="checkbox"/>
                                        <label htmlFor="cat10">Meats &amp; Seafood

                                        </label>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="single-filter-box">
                            <h5 className="title">Store Time</h5>
                            <div className="filterbox-body vendor-time-opening">
                                <h6 className="title-opeing">Open Hours</h6>
                                <span className="single-opening-hour">
                                   <span className="day"> Mon </span>            :   8:00 am     -   10:00 pm
                                </span>
                                <span className="single-opening-hour">
                                    <span className="day">Tue   </span>           :   8:00 am     -   10:00 pm
                                </span>
                                <span className="single-opening-hour">
                                    <span className="day">Wed  </span>           :   8:00 am    -   10:00 pm
                                </span>
                                <span className="single-opening-hour">
                                    <span className="day">Thu    </span>          :   8:00 am     -  10:00 pm
                                </span>
                                <span className="single-opening-hour">
                                    <span className="day">Fri    </span>            :   8:00 am     -   10:00 pm
                                </span>
                                <span className="single-opening-hour">
                                   <span className="day"> Sat    </span>           :   8:00 am     -  10:00 pm
                                </span>
                                <span className="single-opening-hour">
                                    <span className="day">Sun  </span>            :  <span> Off Day</span>
                                </span>
                            </div>
                        </div>
                        <div className="single-filter-box">
                            <h5 className="title">Contact Vendor</h5>
                            <div className="filterbox-body vendor-contact-info-wrapper">
                                <form action="#">
                                    <input type="text" placeholder="Your Name" required/>
                                    <input type="text" placeholder="Email Address"/>
                                    <input type="text" placeholder="Type Message"/>
                                    <button className="rts-btn btn-primary">Submit Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-12 mt-lg--30">
                    <div className="vendor-details-banner--area">
                        <div className="row g-5">
                            <div className="col-lg-3">
                                <div className="vendor-banner-left">
                                    <img src="images/vendor/09.svg" alt="vendor"/>
                                    <div className="header-area">
                                        <h4 className="title">Food Forulard <span>Open</span></h4>
                                    </div>
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <span>(4.50 out of 5)</span>
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
                                    <div className="location">
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        <p>3214 Product Available 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="banner-vendor-details bg_image">
                                    <div className="content-area">
                                        <a href="#" className="rts-btn btn-primary">Weekend Discount</a>
                                        <h3 className="title animated fadeIn">
                                            Drink Fresh Corn Juice <br/>
                                            <span>Good Taste</span>
                                        </h3>
                                        <a href="#" className="shop-now-goshop-btn">
                                            <span className="text">Shop Now</span>
                                            <div className="plus-icon">
                                                <i className="fa-sharp fa-regular fa-plus"></i>
                                            </div>
                                            <div className="plus-icon">
                                                <i className="fa-sharp fa-regular fa-plus"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-area-add-wrapper bg_image">
                                <h2 className="title">Products</h2>
                                <img src="images/vendor/01.png" alt="" className="one"/>
                                <img src="images/vendor/02.png" alt="" className="two"/>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50 ml-v-dec-m">
                        <div className="col-lg-12">
                            <div className="product-filter-area-vendors-details">
                                <div className="search-area">
                                    <form action="#" className="search-header">
                                        <input type="text" placeholder="Enter Product Name" required/>
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
                                <div className="single-select">
  <select>
    <option value="all">All Categories</option>
    <option value="1">Some option</option>
    <option value="2">Another option</option>
    <option value="3" disabled>A disabled option</option>
    <option value="4">Potato</option>
  </select>
</div>


                            </div>
                        </div>
                    </div>
                    <div className="row g-4 ml-v-dec-m mt--40">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-shopping-card-one tranding-product">
                                <a href="shop-details.html" className="thumbnail-preview">
                                    <img src="images/grocery/08.jpg" alt="grocery"/>
                                </a>
                                <div className="body-content">
                                    <div className="time-tag">
                                        <i className="fa-solid fa-clock"></i>
                                        9 MINS
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <span className="availability">500g Pack</span>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-shopping-card-one tranding-product">
                                <a href="shop-details.html" className="thumbnail-preview">
                                    <img src="images/grocery/09.jpg" alt="grocery"/>
                                </a>
                                <div className="body-content">
                                    <div className="time-tag">
                                        <i className="fa-solid fa-clock"></i>
                                        9 MINS
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <span className="availability">500g Pack</span>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-shopping-card-one tranding-product">
                                <a href="shop-details.html" className="thumbnail-preview">
                                    <img src="images/grocery/10.jpg" alt="grocery"/>
                                </a>
                                <div className="body-content">
                                    <div className="time-tag">
                                        <i className="fa-solid fa-clock"></i>
                                        9 MINS
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <span className="availability">500g Pack</span>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-shopping-card-one tranding-product">
                                <a href="shop-details.html" className="thumbnail-preview">
                                    <img src="images/grocery/11.jpg" alt="grocery"/>
                                </a>
                                <div className="body-content">
                                    <div className="time-tag">
                                        <i className="fa-solid fa-clock"></i>
                                        9 MINS
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <span className="availability">500g Pack</span>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-shopping-card-one tranding-product">
                                <a href="shop-details.html" className="thumbnail-preview">
                                    <img src="images/grocery/12.jpg" alt="grocery"/>
                                </a>
                                <div className="body-content">
                                    <div className="time-tag">
                                        <i className="fa-solid fa-clock"></i>
                                        9 MINS
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <span className="availability">500g Pack</span>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-shopping-card-one tranding-product">
                                <a href="shop-details.html" className="thumbnail-preview">
                                    <img src="images/grocery/13.jpg" alt="grocery"/>
                                </a>
                                <div className="body-content">
                                    <div className="time-tag">
                                        <i className="fa-light fa-clock"></i>
                                        9 MINS
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <span className="availability">500g Pack</span>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ServiceArea></ServiceArea>
    <Footer></Footer>
</div>
    );
};
export default VendorDetail;