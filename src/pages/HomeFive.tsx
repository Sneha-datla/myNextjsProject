import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from "next/link";
const HomeFive:React.FC=()=>{
    return(
        <div>
 <div className="rts-header-one-area-one">
        <div className="header-top-area bg_primary">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bwtween-area-header-top header-top-style-four">
                            <div className="hader-top-menu">
                                <a href="#">About Us</a>
                                <a href="#">My Account </a>
                                <a href="#">Wishlist</a>
                                <a href="#">Order Tracking</a>
                            </div>
                            <p>Welcome to our Organic store EkoMart!</p>
                            <div className="follow-us-social">
                                <span>Follow Us:</span>
                                <div className="social">
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                    <a href="#"><i className="fa-brands fa-basketball"></i></a>
                                    <a href="#"><i className="fa-brands fa-skype"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="search-header-area-main-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="search-header-area-main bg_white without-category">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="logo-search-category-wrapper style-five-call-us">
                                            <a href="index-2.html" className="logo-area">
                                                <img src="images/logo/logo-01.svg" alt="logo-main" className="logo"/>
                                            </a>
                                            <div className="category-search-wrapper style-five">
                                                <div className="location-area">
                                                   
                                                   
                                                </div>
                                                <form action="#" className="search-header">
                                                    <input type="text" placeholder="Search for products, categories" required/>
                                                    <a href="javascript: void(0);" className="rts-btn btn-primary radious-sm with-icon">
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
                                            <div className="accont-wishlist-cart-area-header">
                                                <Link href="/accountinfo" className="btn-border-only account">
                                                    <i className="fa-regular fa-user"></i>
                                                    Account
                                                </Link>
                                                <Link href="/wishlist" className="btn-border-only wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                    Wishlist
                                                </Link>
                                                <div className="btn-border-only cart category-hover-header">
                                                    <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                                                    <span>My Cart</span>
                                                    <div className="category-sub-menu card-number-show">
                                                        <h5 className="shopping-cart-number">Shopping Cart (03)</h5>
                                                        <div className="cart-item-1 border-hrefp">
                                                            <div className="img-name">
                                                                <div className="thumbanil">
                                                                    <img src="images/shop/cart-1.png" alt=""/>
                                                                </div>
                                                                <div className="details">
                                                                    <a href="shop-details.html">
                                                                        <h5 className="title">Foster Farms Breast Nuggets Shaped Chicken</h5>
                                                                    </a>
                                                                    <div className="number">
                                                                        1 <i className="fa-regular fa-x"></i>
                                                                        <span>$36.00</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="close-c1">
                                                                <i className="fa-regular fa-x"></i>
                                                            </div>
                                                        </div>
                                                        <div className="cart-item-1">
                                                            <div className="img-name">
                                                                <div className="thumbanil">
                                                                    <img src="images/shop/05.png" alt=""/>
                                                                </div>
                                                                <div className="details">
                                                                    <a href="shop-details.html">
                                                                        <h5 className="title">Foster Farms Breast Nuggets Shaped Chicken</h5>
                                                                    </a>
                                                                    <div className="number">
                                                                        1 <i className="fa-regular fa-x"></i>
                                                                        <span>$36.00</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="close-c1">
                                                                <i className="fa-regular fa-x"></i>
                                                            </div>
                                                        </div>
                                                        <div className="cart-item-1">
                                                            <div className="img-name">
                                                                <div className="thumbanil">
                                                                    <img src="images/shop/04.png" alt=""/>
                                                                </div>
                                                                <div className="details">
                                                                    <a href="shop-details.html">
                                                                        <h5 className="title">Foster Farms Breast Nuggets Shaped Chicken</h5>
                                                                    </a>
                                                                    <div className="number">
                                                                        1 <i className="fa-regular fa-x"></i>
                                                                        <span>$36.00</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="close-c1">
                                                                <i className="fa-regular fa-x"></i>
                                                            </div>
                                                        </div>
                                                        <div className="sub-total-cart-balance">
                                                            <div className="bottom-content-deals mt--10">
                                                                <div className="top">
                                                                    <span>Sub Total:</span>
                                                                    <span className="number-c">$108.00</span>
                                                                </div>
                                                                <div className="single-progress-area-incard">
                                                                    <div className="progress">
                                                                        <div className="progress-bar wow fadeInLeft" role="progressbar" style={{width: '80%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                                                    </div>
                                                                </div>
                                                                <p>Spend More <span>$125.00</span> to reach <span>Free Shipping</span></p>
                                                            </div>
                                                            <div className="button-wrapper d-flex align-items-center justify-content-between">
                                                                <a href="cart.html" className="rts-btn btn-primary ">View Cart</a>
                                                                <a href="checkout.html" className="rts-btn btn-primary border-only">CheckOut</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link  href="/viewcart" className="over_link"></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="rts-header-nav-area-one header--sticky">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="nav-and-btn-wrapper">
                            <div className="nav-area-bottom-left-header-four">
                                <div className="category-btn category-hover-header five-style">
                                    <img className="parent" src="images/icons/14.svg" alt="icons"/>
                                    <span className="ml--10">All Categories</span>
                                    <ul className="category-sub-menu" id="category-active-four">
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/01.svg" alt="icons"/>
                                                <span>Breakfast &amp; Dairy</span>
                                                <i className="fa-regular fa-plus"></i>
                                            </a>
                                            <ul className="submenu mm-collapse">
                                                <li><a className="mobile-menu-link" href="#">Breakfast</a></li>
                                                <li><a className="mobile-menu-link" href="#">Dinner</a></li>
                                                <li><a className="mobile-menu-link" href="#"> Pumking</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/02.svg" alt="icons"/>
                                                <span>Meats &amp; Seafood</span>
                                                <i className="fa-regular fa-plus"></i>
                                            </a>
                                            <ul className="submenu mm-collapse">
                                                <li><a className="mobile-menu-link" href="#">Breakfast</a></li>
                                                <li><a className="mobile-menu-link" href="#">Dinner</a></li>
                                                <li><a className="mobile-menu-link" href="#"> Pumking</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/03.svg" alt="icons"/>
                                                <span>Breads &amp; Bakery</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/04.svg" alt="icons"/>
                                                <span>Chips &amp; Snacks</span>
                                                <i className="fa-regular fa-plus"></i>
                                            </a>
                                            <ul className="submenu mm-collapse">
                                                <li><a className="mobile-menu-link" href="#">Breakfast</a></li>
                                                <li><a className="mobile-menu-link" href="#">Dinner</a></li>
                                                <li><a className="mobile-menu-link" href="#"> Pumking</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/05.svg" alt="icons"/>
                                                <span>Medical Healthcare</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/06.svg" alt="icons"/>
                                                <span>Breads &amp; Bakery</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/07.svg" alt="icons"/>
                                                <span>Biscuits &amp; Snacks</span>
                                                <i className="fa-regular fa-plus"></i>
                                            </a>
                                            <ul className="submenu mm-collapse">
                                                <li><a className="mobile-menu-link" href="#">Breakfast</a></li>
                                                <li><a className="mobile-menu-link" href="#">Dinner</a></li>
                                                <li><a className="mobile-menu-link" href="#"> Pumking</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/08.svg" alt="icons"/>
                                                <span>Frozen Foods</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/09.svg" alt="icons"/>
                                                <span>Grocery &amp; Staples</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/10.svg" alt="icons"/>
                                                <span>Other Items</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nav-area">
    <nav>
        <ul className="parent-nav">
            <li className="parent has-dropdown">
            <Link className="nav-link" href="/">Home</Link>
            <ul className="submenu">
                    <li><Link className="sub-b" href="/Index">Home One</Link></li>
                    <li><Link className="sub-b" href="/HomeTwo">Home Two</Link></li>
                    <li><Link className="sub-b" href="/HomeThree">Home Three</Link></li>
                    <li><Link className="sub-b" href="/HomeFour">Home Four</Link></li>
                    <li><Link className="sub-b" href="/HomeFive">Home Five</Link></li>
                </ul>
            </li>
            <li className="parent"><Link href="/About">About</Link></li>
            <li className="parent with-megamenu">
                <a href="#">Shop</a>
                <div className="rts-megamenu">
                    <div className="wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="megamenu-item-wrapper">
                                  
                                    <div className="single-megamenu-wrapper">
                                        <p className="title">Shop Layout</p>
                                        <ul>
                                            <li><Link href="/ShopGridSidebar">Shop Grid Sidebar</Link></li>
                                            <li><Link href="/ShopListGrid">Shop list Sidebar</Link></li>
                                            <li><Link href="/ShopGridTop">Shop Top Filter Grid</Link></li>
                                            <li><Link href="/ShopListTop">Shop Top Filter List</Link></li>
                                        </ul>
                                    </div>
                                   
                                    <div className="single-megamenu-wrapper">
                                        <p className="title">Shop Details</p>
                                        <ul>
                                            <li><Link className="sub-b" href="/ShopDetailed">Shop Details</Link></li>
                                            <li><Link className="sub-b" href="/ShopDetailedTwo">Shop Details V2</Link></li>
                                            <li><Link className="sub-b" href="/ShopDetailedThree">Shop Details V3</Link></li>
                                            <li><Link className="sub-b" href="/ShopDetailFour">Shop Details V4</Link></li>
                                        </ul>
                                    </div>
                                 
                                    <div className="single-megamenu-wrapper">
                                        <p className="title">Product Feature</p>
                                        <ul>
                                            <li><Link className="sub-b" href="/VariableProduct">Variable product</Link></li>
                                            <li><Link className="sub-b" href="/AffliateProduct">Affiliate product</Link></li>
                                            <li><Link className="sub-b" href="/ShopDetailGroup">Shop Details Group</Link></li>
                                            <li><Link className="sub-b" href="/ShopCompare">Shop Compare</Link></li>
                                        </ul>
                                    </div>
                                  
                                    <div className="single-megamenu-wrapper">
                                        <p className="title">Shop Others</p>
                                        <ul>
                                            <li><Link className="sub-b" href="/ViewCart">Cart</Link></li>
                                            <li><Link className="sub-b" href="/CheckOut">Checkout</Link></li>
                                            <li><Link className="sub-b" href="/TrackOrder">Track Order</Link></li>
                                        </ul>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <a href="shop-grid-sidebar.html" className="feature-add-megamenu-area">
                                    <img src="images/feature/05.jpg" alt="feature_product"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="parent has-dropdown">
            <Link className="nav-link" href="#">Vendors</Link>
            <ul className="submenu">
                    <li><Link className="sub-b" href="/VendorList">Vendor List</Link></li>
                    <li><Link className="sub-b" href="/VendorGrid">Vendor Grid</Link></li>
                    <li><Link className="sub-b" href="/VendorDetails">Vendor Details</Link></li>
                </ul>
            </li>
            <li className="parent has-dropdown">
                <a className="nav-link" href="#">Pages</a>
                <ul className="submenu">
                    <li><Link className="sub-b" href="/About">About</Link></li>
                    <li><Link className="sub-b" href="/Store">Store</Link></li>
                    <li><Link className="sub-b" href="/Faqs">Faqs</Link></li>
                    <li><Link className="sub-b" href="/Invoice">Invoice</Link></li>
                    <li><Link className="sub-b" href="/Contact">Contact</Link></li>
                    <li><Link className="sub-b" href="/Register">Register</Link></li>
                    <li><Link className="sub-b" href="/Login">Login</Link></li>
                    <li><Link className="sub-b" href="/PrivacyPolicy">Privacy Policy</Link></li>
                    <li><Link className="sub-b" href="/CookiesPolicy">Cookies Policy</Link></li>
                    <li><Link className="sub-b" href="/TermsAndConditions">Terms & Condition</Link></li>
                    <li><Link className="sub-b" href="/ErrorPage">Error</Link></li>
                </ul>
            </li>
            <li className="parent has-dropdown">
                <a className="nav-link" href="#">Blog</a>
                <ul className="submenu">
                    <li><Link className="sub-b" href="/Blogpage">Blog</Link></li>
                    <li><Link className="sub-b" href="/BlogRight">Blog List Right Sidebar</Link></li>
                    <li><Link className="sub-b" href="/BlogLeft">Blog List Left Sidebar</Link></li>
                    <li><Link className="sub-b" href="/BlogDetailed">Blog Details</Link></li>
                </ul>
            </li>
            <li className="parent"><Link href="/Contact">Contact</Link></li>
            </ul>
    </nav>
</div>
                            </div>
                            <div className="right-btn-area header-five">
                                <a href="#" className="btn-narrow">Trending Products</a>
                                <button className="rts-btn btn-primary">
                                    Get 30% Discount Now
                                    <span>Sale</span>
                                </button>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="logo-search-category-wrapper after-md-device-header header-mid-five-call">
                            <a href="index-2.html" className="logo-area">
                                <img src="images/logo/logo-01.svg" alt="logo-main" className="logo"/>
                            </a>
                            <div className="category-search-wrapper">
                                <div className="category-btn category-hover-header">
                                    <img className="parent" src="images/icons/bar-1.svg" alt="icons"/>
                                    <span>Categories</span>
                                    <ul className="category-sub-menu">
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/01.svg" alt="icons"/>
                                                <span>Breakfast & Dairy</span>
                                                <i className="fa-regular fa-plus"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/02.svg" alt="icons"/>
                                                <span>Meats & Seafood</span>
                                                <i className="fa-regular fa-plus"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/03.svg" alt="icons"/>
                                                <span>Breads & Bakery</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/04.svg" alt="icons"/>
                                                <span>Chips & Snacks</span>
                                                <i className="fa-regular fa-plus"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/05.svg" alt="icons"/>
                                                <span>Medical Healthcare</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/06.svg" alt="icons"/>
                                                <span>Breads & Bakery</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/07.svg" alt="icons"/>
                                                <span>Biscuits & Snacks</span>
                                                <i className="fa-regular fa-plus"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/08.svg" alt="icons"/>
                                                <span>Frozen Foods</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/09.svg" alt="icons"/>
                                                <span>Grocery & Staples</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <img src="images/icons/10.svg" alt="icons"/>
                                                <span>Other Items</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <form action="#" className="search-header">
                                    <input type="text" placeholder="Search for products, categories or brands" required/>
                                    <button className="rts-btn btn-primary radious-sm with-icon">
                                        <span className="btn-text">
                                            Search
                                        </span>
                                        <span className="arrow-icon">
                                            <i className="fa-light fa-magnifying-glass"></i>
                                        </span>
                                        <span className="arrow-icon">
                                            <i className="fa-light fa-magnifying-glass"></i>
                                        </span>
                                    </button>
                                </form>
                            </div>
                            <div className="main-wrapper-action-2 d-flex">
                                <div className="accont-wishlist-cart-area-header">
                                    <a href="account.html" className="btn-border-only account">
                                        <i className="fa-light fa-user"></i>
                                        Account
                                    </a>
                                    <a href="wishlist.html" className="btn-border-only wishlist">
                                        <i className="fa-regular fa-heart"></i>
                                        Wishlist
                                    </a>
                                    <div className="btn-border-only cart category-hover-header">
                                        <i className="fa-sharp fa-regular fa-cart-shopping"></i>
                                        <span>My Cart</span>
                                        <div className="category-sub-menu card-number-show">
                                            <h5 className="shopping-cart-number">Shopping Cart (03)</h5>
                                            <div className="cart-item-1 border-top">
                                                <div className="img-name">
                                                    <div className="thumbanil">
                                                        <img src="images/shop/cart-1.png" alt=""/>
                                                    </div>
                                                    <div className="details">
                                                        <a href="shop-details.html">
                                                            <h5 className="title">Foster Farms Breast Nuggets Shaped Chicken</h5>
                                                        </a>
                                                        <div className="number">
                                                            1 <i className="fa-regular fa-x"></i>
                                                            <span>$36.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="close-c1">
                                                    <i className="fa-regular fa-x"></i>
                                                </div>
                                            </div>
                                            <div className="cart-item-1">
                                                <div className="img-name">
                                                    <div className="thumbanil">
                                                        <img src="images/shop/05.png" alt=""/>
                                                    </div>
                                                    <div className="details">
                                                        <a href="shop-details.html">
                                                            <h5 className="title">Foster Farms Breast Nuggets Shaped Chicken</h5>
                                                        </a>
                                                        <div className="number">
                                                            1 <i className="fa-regular fa-x"></i>
                                                            <span>$36.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="close-c1">
                                                    <i className="fa-regular fa-x"></i>
                                                </div>
                                            </div>
                                            <div className="cart-item-1">
                                                <div className="img-name">
                                                    <div className="thumbanil">
                                                        <img src="images/shop/04.png" alt=""/>
                                                    </div>
                                                    <div className="details">
                                                        <a href="shop-details.html">
                                                            <h5 className="title">Foster Farms Breast Nuggets Shaped Chicken</h5>
                                                        </a>
                                                        <div className="number">
                                                            1 <i className="fa-regular fa-x"></i>
                                                            <span>$36.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="close-c1">
                                                    <i className="fa-regular fa-x"></i>
                                                </div>
                                            </div>
                                            <div className="sub-total-cart-balance">
                                                <div className="bottom-content-deals mt--10">
                                                    <div className="top">
                                                        <span>Sub Total:</span>
                                                        <span className="number-c">$108.00</span>
                                                    </div>
                                                    <div className="single-progress-area-incard">
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" role="progressbar" style={{width: '80%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                                        </div>
                                                    </div>
                                                    <p>Spend More <span>$125.00</span> to reach <span>Free Shipping</span></p>
                                                </div>
                                                <div className="button-wrapper d-flex align-items-center justify-content-between">
                                                    <a href="cart.html" className="rts-btn btn-primary ">View Cart</a>
                                                    <a href="checkout.html" className="rts-btn btn-primary border-only">CheckOut</a>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="cart.html" className="over_link"></a>
                                    </div>
                                </div>
                                <div className="actions-area">
                                    <div className="search-btn" id="search">
            
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.75 14.7188L11.5625 10.5312C12.4688 9.4375 12.9688 8.03125 12.9688 6.5C12.9688 2.9375 10.0312 0 6.46875 0C2.875 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.46875 13C7.96875 13 9.375 12.5 10.5 11.5938L14.6875 15.7812C14.8438 15.9375 15.0312 16 15.25 16C15.4375 16 15.625 15.9375 15.75 15.7812C16.0625 15.5 16.0625 15.0312 15.75 14.7188ZM1.5 6.5C1.5 3.75 3.71875 1.5 6.5 1.5C9.25 1.5 11.5 3.75 11.5 6.5C11.5 9.28125 9.25 11.5 6.5 11.5C3.71875 11.5 1.5 9.28125 1.5 6.5Z" fill="#1F1F25"></path>
                                        </svg>
            
                                    </div>
                                    <div className="menu-btn" id="menu-btn">
            
                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
                                            <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
                                            <rect width="20" height="2" fill="#1F1F25"></rect>
                                        </svg>
            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="rts-banner-area rts-section-gap pt_sm--20">
        <div className="container">
            <div className="row g-5 g-sm-4">
                <div className="col-lg-9">
                    <div className="banner-left-five-area-start bg_image">
                        <div className="inner-content-banner-five">
                            <span>Get up to 30% off on your first $150 purchase</span>
                            <h1 className="title">Do not miss our amazing <br/>
                                grocery deals</h1>
                            <p>We have prepared special discounts for you on grocery products. Dont miss these opportunities...</p>
                            <a href="shop-grid-top-filter.html" className="rts-btn btn-primary radious-sm with-icon">
                                <div className="btn-text">
                                    Shop Now
                                </div>
                                <div className="arrow-icon">
                                    <i className="fa-light fa-arrow-right"></i>
                                </div>
                                <div className="arrow-icon">
                                    <i className="fa-light fa-arrow-right"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="banner-five-right-content bg_image">
                        <div className="content-area">
                            <a href="#" className="rts-btn btn-primary">Weekend Discount</a>
                            <h3 className="title">
                                Strawberry Water Drinks
                                <span>Flavors Awesome</span>
                            </h3>
                            <a href="shop-grid-top-filter.html" className="shop-now-goshop-btn">
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
    </div>
    <div className="rts-shorts-service-area rts-section-gap bg_heading">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="single-short-service-area-start">
                        <div className="icon-area">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="40" cy="40" r="40" fill="white"/>
                                <path d="M55.7029 25.2971C51.642 21.2363 46.2429 19 40.5 19C34.7571 19 29.358 21.2363 25.2971 25.2971C21.2364 29.358 19 34.7571 19 40.5C19 46.2429 21.2364 51.642 25.2971 55.7029C29.358 59.7637 34.7571 62 40.5 62C46.2429 62 51.642 59.7637 55.7029 55.7029C59.7636 51.642 62 46.2429 62 40.5C62 34.7571 59.7636 29.358 55.7029 25.2971ZM40.5 59.4805C30.0341 59.4805 21.5195 50.9659 21.5195 40.5C21.5195 30.0341 30.0341 21.5195 40.5 21.5195C50.9659 21.5195 59.4805 30.0341 59.4805 40.5C59.4805 50.9659 50.9659 59.4805 40.5 59.4805Z" fill="#629D23"/>
                                <path d="M41.8494 39.2402H39.1506C37.6131 39.2402 36.3623 37.9895 36.3623 36.452C36.3623 34.9145 37.6132 33.6638 39.1506 33.6638H44.548C45.2438 33.6638 45.8078 33.0997 45.8078 32.404C45.8078 31.7083 45.2438 31.1442 44.548 31.1442H41.7598V28.3559C41.7598 27.6602 41.1957 27.0962 40.5 27.0962C39.8043 27.0962 39.2402 27.6602 39.2402 28.3559V31.1442H39.1507C36.2239 31.1442 33.8429 33.5253 33.8429 36.452C33.8429 39.3787 36.224 41.7598 39.1507 41.7598H41.8495C43.3869 41.7598 44.6377 43.0106 44.6377 44.548C44.6377 46.0855 43.3869 47.3363 41.8495 47.3363H36.452C35.7563 47.3363 35.1923 47.9004 35.1923 48.5961C35.1923 49.2918 35.7563 49.8559 36.452 49.8559H39.2402V52.6442C39.2402 53.34 39.8043 53.904 40.5 53.904C41.1957 53.904 41.7598 53.34 41.7598 52.6442V49.8559H41.8494C44.7761 49.8559 47.1571 47.4747 47.1571 44.548C47.1571 41.6214 44.7761 39.2402 41.8494 39.2402Z" fill="#629D23"/>
                                </svg>
                                
                        </div>
                        <div className="information">
                            <h4 className="title">Best Prices & Offers</h4>
                            <p className="disc">
                                We prepared special discounts you on grocery products.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                   
                    <div className="single-short-service-area-start">
                        <div className="icon-area">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="40" cy="40" r="40" fill="white"/>
                                <path d="M55.5564 24.4436C51.4012 20.2884 45.8763 18 40 18C34.1237 18 28.5988 20.2884 24.4436 24.4436C20.2884 28.5988 18 34.1237 18 40C18 45.8763 20.2884 51.4012 24.4436 55.5564C28.5988 59.7116 34.1237 62 40 62C45.8763 62 51.4012 59.7116 55.5564 55.5564C59.7116 51.4012 62 45.8763 62 40C62 34.1237 59.7116 28.5988 55.5564 24.4436ZM40 59.4219C29.2907 59.4219 20.5781 50.7093 20.5781 40C20.5781 29.2907 29.2907 20.5781 40 20.5781C50.7093 20.5781 59.4219 29.2907 59.4219 40C59.4219 50.7093 50.7093 59.4219 40 59.4219Z" fill="#629D23"/>
                                <path d="M42.4009 34.7622H35.0294L36.295 33.4966C36.7982 32.9934 36.7982 32.177 36.295 31.6738C35.7914 31.1703 34.9753 31.1703 34.4718 31.6738L31.0058 35.1398C30.5022 35.6434 30.5022 36.4594 31.0058 36.9626L34.4718 40.429C34.7236 40.6808 35.0536 40.8067 35.3832 40.8067C35.7132 40.8067 36.0432 40.6808 36.295 40.429C36.7982 39.9255 36.7982 39.1094 36.295 38.6059L35.0291 37.3403H42.4009C44.8229 37.3403 46.7934 39.3108 46.7934 41.7328C46.7934 44.1549 44.8229 46.1254 42.4009 46.1254H37.8925C37.1805 46.1254 36.6035 46.7028 36.6035 47.4145C36.6035 48.1265 37.1805 48.7035 37.8925 48.7035H42.4009C46.2446 48.7035 49.3716 45.5765 49.3716 41.7328C49.3716 37.8892 46.2446 34.7622 42.4009 34.7622Z" fill="#629D23"/>
                                </svg>
                                
                        </div>
                        <div className="information">
                            <h4 className="title">100% Return Policy</h4>
                            <p className="disc">
                                We prepared special discounts you on grocery products.
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                 
                    <div className="single-short-service-area-start">
                        <div className="icon-area">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="40" cy="40" r="40" fill="white"/>
                                <path d="M26.2667 26.2667C29.935 22.5983 34.8122 20.5781 40 20.5781C43.9672 20.5781 47.8028 21.7849 51.0284 24.0128L48.5382 24.2682L48.8013 26.8328L55.5044 26.1453L54.8169 19.4422L52.2522 19.7053L52.4751 21.8787C48.8247 19.3627 44.4866 18 40 18C34.1236 18 28.5989 20.2884 24.4437 24.4437C20.2884 28.5989 18 34.1236 18 40C18 44.3993 19.2946 48.6457 21.7437 52.28L23.8816 50.8393C23.852 50.7952 23.8232 50.7508 23.7939 50.7065C21.69 47.5289 20.5781 43.8307 20.5781 40C20.5781 34.8123 22.5983 29.935 26.2667 26.2667Z" fill="#629D23"/>
                                <path d="M58.2564 27.72L56.1184 29.1607C56.148 29.2047 56.1768 29.2493 56.2061 29.2935C58.3099 32.4711 59.4219 36.1693 59.4219 40C59.4219 45.1878 57.4017 50.065 53.7333 53.7333C50.0651 57.4017 45.1879 59.4219 40 59.4219C36.0328 59.4219 32.1972 58.2151 28.9716 55.9872L31.4618 55.7318L31.1987 53.1672L24.4956 53.8547L25.1831 60.5578L27.7478 60.2947L27.5249 58.1213C31.1754 60.6373 35.5135 62 40 62C45.8764 62 51.4011 59.7116 55.5564 55.5563C59.7117 51.4011 62 45.8764 62 40C62 35.6007 60.7055 31.3543 58.2564 27.72Z" fill="#629D23"/>
                                <path d="M28.7407 42.7057L30.4096 41.1632C31.6739 40 31.9142 39.2161 31.9142 38.3564C31.9142 36.7127 30.5108 35.6633 28.4753 35.6633C26.7305 35.6633 25.4788 36.3966 24.8087 37.5093L26.6673 38.546C27.0213 37.9771 27.6029 37.6863 28.2477 37.6863C29.0063 37.6863 29.3856 38.0276 29.3856 38.5966C29.3856 38.9633 29.2845 39.3679 28.5764 40.0254L25.2639 43.123V44.6907H32.1544V42.7057L28.7407 42.7057Z" fill="#629D23"/>
                                <path d="M40.1076 42.9965H41.4224V41.0115H40.1076V39.507H37.7433V41.0115H35.948L39.5512 35.8404H36.9594L32.9894 41.3655V42.9965H37.6674V44.6906H40.1076V42.9965Z" fill="#629D23"/>
                                <path d="M43.6986 45.955L47.8708 34.045H45.7341L41.5618 45.955H43.6986Z" fill="#629D23"/>
                                <path d="M49.995 39.1908V37.8254H52.3213L49.3375 44.6906H52.0685L55.1913 37.4081V35.8404H47.8582V39.1908H49.995Z" fill="#629D23"/>
                                </svg>
                                
                        </div>
                        <div className="information">
                            <h4 className="title">Support 24/7</h4>
                            <p className="disc">
                                We prepared special discounts you on grocery products.
                            </p>
                        </div>
                    </div>
                   
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                   
                    <div className="single-short-service-area-start">
                        <div className="icon-area">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="40" cy="40" r="40" fill="white"/>
                                <path d="M57.0347 37.5029C54.0518 29.3353 48.6248 23.7668 48.3952 23.5339L46.2276 21.3333V29.6016C46.2276 30.3124 45.658 30.8906 44.9578 30.8906C44.2577 30.8906 43.688 30.3124 43.688 29.6016C43.688 23.2045 38.5614 18 32.26 18H30.9902V19.2891C30.9902 25.3093 27.0988 29.646 24.1414 35.2212C21.1581 40.8449 21.3008 47.7349 24.5138 53.2021C27.7234 58.6637 33.5291 62 39.7786 62H40.3686C46.1822 62 51.6369 59.1045 54.9597 54.2545C58.2819 49.4054 59.056 43.0371 57.0347 37.5029ZM52.8748 52.7824C50.0265 56.9398 45.3513 59.4219 40.3686 59.4219H39.7786C34.4416 59.4219 29.4281 56.5325 26.6947 51.8813C23.9369 47.1886 23.8153 41.2733 26.3773 36.4436C29.1752 31.1691 32.9752 26.8193 33.4744 20.662C37.803 21.265 41.1483 25.0441 41.1483 29.6015C41.1483 31.7338 42.8572 33.4687 44.9577 33.4687C47.0581 33.4687 48.767 31.7338 48.767 29.6015V27.9161C50.54 30.2131 53.0138 33.9094 54.6534 38.399C56.3856 43.1416 55.704 48.653 52.8748 52.7824Z" fill="#629D23"/>
                                <path d="M38.6089 40C38.6089 37.8676 36.9 36.1328 34.7996 36.1328C32.6991 36.1328 30.9902 37.8676 30.9902 40C30.9902 42.1324 32.6991 43.8672 34.7996 43.8672C36.9 43.8672 38.6089 42.1324 38.6089 40ZM33.5298 40C33.5298 39.2892 34.0994 38.7109 34.7996 38.7109C35.4997 38.7109 36.0693 39.2892 36.0693 40C36.0693 40.7108 35.4997 41.2891 34.7996 41.2891C34.0994 41.2891 33.5298 40.7108 33.5298 40Z" fill="#629D23"/>
                                <path d="M44.9578 46.4453C42.8573 46.4453 41.1485 48.1801 41.1485 50.3125C41.1485 52.4449 42.8573 54.1797 44.9578 54.1797C47.0583 54.1797 48.7672 52.4449 48.7672 50.3125C48.7672 48.1801 47.0583 46.4453 44.9578 46.4453ZM44.9578 51.6016C44.2577 51.6016 43.688 51.0233 43.688 50.3125C43.688 49.6017 44.2577 49.0234 44.9578 49.0234C45.658 49.0234 46.2276 49.6017 46.2276 50.3125C46.2276 51.0233 45.658 51.6016 44.9578 51.6016Z" fill="#629D23"/>
                                <path d="M32.5466 52.0632L45.2407 36.599L47.1911 38.249L34.4969 53.7132L32.5466 52.0632Z" fill="#629D23"/>
                            </svg>                                
                        </div>
                        <div className="information">
                            <h4 className="title">Great Offer Daily Deal</h4>
                            <p className="disc">
                                We prepared special discounts you on grocery products.
                            </p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    <div className="rts-category-area rts-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cover-card-main-over">
              <div className="row">
                <div className="col-lg-12">
                  <div className="title-area-between">
                    <h2 className="title-left mb--0">Featured Categories</h2>
                    <div className="next-prev-swiper-wrapper">
                      <div className="swiper-button-prevs">
                        <i className="fa-solid fa-chevron-left"></i>
                      </div>
                      <div className="swiper-button-nexts">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="rts-caregory-area-one">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="category-area-main-wrapper-one">
                          <Swiper
                           modules={[Navigation, Autoplay]}
                            spaceBetween={12}
                            slidesPerView={8}
                            loop={true}
                            speed={1000}
                            autoplay={{
                                delay: 4000,
                            }}
                            navigation={{
                              nextEl: '.swiper-button-nexts',
                              prevEl: '.swiper-button-prevs',
                            }}
                            breakpoints={{
                              0: { slidesPerView: 1, spaceBetween: 15 },
                              340: { slidesPerView: 2, spaceBetween: 15 },
                              480: { slidesPerView: 3, spaceBetween: 15 },
                              640: { slidesPerView: 4, spaceBetween: 15 },
                              840: { slidesPerView: 4, spaceBetween: 15 },
                              1140: { slidesPerView: 6, spaceBetween: 15 },
                              1740: { slidesPerView: 8, spaceBetween: 15 },
                            }}
                          >
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/01.png" alt="category" />
                                  <p>Organic Vegetable</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/02.png" alt="category" />
                                  <p>Organic Vegetable</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/03.png" alt="category" />
                                  <p>Organic Vegetable</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/04.png" alt="category" />
                                  <p>Organic Vegetable</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/05.png" alt="category" />
                                  <p>Organic Foods</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/06.png" alt="category" />
                                  <p>Premium Vegetable</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/07.png" alt="category" />
                                  <p>Organic Vegetable</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/08.png" alt="category" />
                                  <p>Organic Vegetable</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/09.png" alt="category" />
                                  <p>Organic Vegetable</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="single-category-one height-180">
                                <a href="shop-grid-sidebar.html">
                                  <img src="images/category/10.png" alt="category" />
                                  <p>Organic Vegetable</p>
                                  <span>299 Items</span>
                                </a>
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="rts-feature-large-product-area rts-section-gapBottom">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6">
                    <div className="feature-product-area-large-2 bg_image">
                        <div className="inner-feature-product-content">
                            <span>Weekend Discount</span>
                            <h2 className="title">
                                Feed The Best Energy <br/>
Drink Booster
                            </h2>
                            <p>Just don’t miss the special offer this week</p>
                            <a href="shop-grid-top-filter.html" className="rts-btn btn-primary">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="feature-product-area-large-2 bg_2 bg_image">
                        <div className="inner-feature-product-content">
                            <span>Weekend Discount</span>
                            <h2 className="title">
                                Our Garden Fresh <br/>
Vegetables
                            </h2>
                            <p>Just don’t miss the special offer this week</p>
                            <a href="shop-grid-top-filter.html" className="rts-btn btn-primary">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="popular-product-col-7-area rts-section-gapBottom">
        <div className="container cover-card-main-over-white mt--60 ">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-area-between mb--15">
                        <h2 className="title-left">
                            Popular Products
                        </h2>
                        <ul className="nav nav-tabs best-selling-grocery" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Frozen Foods</button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Diet Foods</button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Healthy Foods</button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="vitamine-tab" data-bs-toggle="tab" data-bs-target="#vitamine" type="button" role="tab" aria-controls="vitamine" aria-selected="false">Vitamin Items</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row plr--30 plr_sm--5">
                <div className="col-lg-12">
                    <div className="tab-content" id="myTabContent">
                    
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row g-4 mt--0">

                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/17.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mash Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/18.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Tech Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary disable-select">
                                                    <div className="btn-text">
                                                        Select Option
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/19.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Best Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/20.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Fresh Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/21.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Common Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/22.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">lazy Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary disable-select">
                                                    <div className="btn-text">
                                                        Select Option
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/23.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/24.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Full Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/17.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Juice Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/18.jpg" alt="grocery/"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary disable-select">
                                                    <div className="btn-text">
                                                        Select Option
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/19.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Modern Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/20.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    

                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="row g-4 mt--0">
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                                <a href="shop-details.html" className="thumbnail-preview">
                                                    <img src="images/grocery/15.jpg" alt="grocery"/>
                                                </a>
                                                <div className="action-share-option">
                                                    <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                        <i className="fa-solid fa-retweet"></i>
                                                    </div>
                                                    <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary disable-select">
                                                    <div className="btn-text">
                                                        Select Option
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/16.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/17.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/18.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary disable-select">
                                                    <div className="btn-text">
                                                        Select Option
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/19.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/20.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/21.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/22.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary disable-select">
                                                    <div className="btn-text">
                                                        Select Option
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/23.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="shop-grid-top-filter.html" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/24.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/17.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/18.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary disable-select">
                                                    <div className="btn-text">
                                                        Select Option
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/19.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/20.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="row g-4 mt--0">
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                                <a href="shop-details.html" className="thumbnail-preview">
                                                    <img src="images/grocery/15.jpg" alt="grocery"/>
                                                </a>
                                                <div className="action-share-option">
                                                    <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                        <i className="fa-solid fa-arrows-retweet"></i>
                                                    </div>
                                                    <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary disable-select">
                                                    <div className="btn-text">
                                                        Select Option
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/16.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/17.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/18.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary disable-select">
                                                    <div className="btn-text">
                                                        Select Option
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/19.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/20.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/21.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/22.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary disable-select">
                                                    <div className="btn-text">
                                                        Select Option
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/23.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/24.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/17.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/18.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary disable-select">
                                                    <div className="btn-text">
                                                        Select Option
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/19.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/20.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="vitamine" role="tabpanel" aria-labelledby="vitamine-tab">
                            <div className="row g-4 mt--0">
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                                <a href="shop-details.html" className="thumbnail-preview">
                                                    <img src="images/grocery/15.jpg" alt="grocery"/>
                                                </a>
                                                <div className="action-share-option">
                                                    <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                    <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                        <i className="fa-solid fa-arrows-retweet"></i>
                                                    </div>
                                                    <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary disable-select">
                                                    <div className="btn-text">
                                                        Select Option
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/16.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/17.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/18.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary disable-select">
                                                    <div className="btn-text">
                                                        Select Option
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/19.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/20.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/21.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/22.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary disable-select">
                                                    <div className="btn-text">
                                                        Select Option
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/23.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/24.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/17.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/18.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary disable-select">
                                                    <div className="btn-text">
                                                        Select Option
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/19.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/20.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-arrows-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="tranding-items-tab-area-start rts-section-gap  bg_gradient-tranding-items">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-area-between pl--0">
                        <h2 className="title-left mb--0">
                            Trending items
                        </h2>
                    </div>
                </div>
            </div>
            <div className="row g-5 tranding-items-wrapper-padding-bg-wrapper-list-tabs margin-decrease-y">
                <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="d-flex align-items-start">
                        <div className="nav main-nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Fresh Produce</button>
                            <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Dairy and Eggs</button>
                            <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Meat and Seafood</button>
                            <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Bakery</button>
                            <button className="nav-link" id="v-pills-settings-taba" data-bs-toggle="pill" data-bs-target="#v-pills-settingsa" type="button" role="tab" aria-controls="v-pills-settingsa" aria-selected="false">Pantry Staples</button>
                            <button className="nav-link" id="v-pills-settings-tabab" data-bs-toggle="pill" data-bs-target="#v-pills-settingsab" type="button" role="tab" aria-controls="v-pills-settingsab" aria-selected="false">Snacks and Confectionery</button>
                            <button className="nav-link" id="v-pills-settings-tababc" data-bs-toggle="pill" data-bs-target="#v-pills-settingsabc" type="button" role="tab" aria-controls="v-pills-settingsabc" aria-selected="false">Frozen Foods</button>
                            <button className="nav-link" id="v-pills-settings-tababcd" data-bs-toggle="pill" data-bs-target="#v-pills-settingsabcd" type="button" role="tab" aria-controls="v-pills-settingsabcd" aria-selected="false">Household Cleaning</button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="add-in-tranding-items-area">
                        <img src="images/feature/04.jpg" alt=""/>
                        <div className="content-area">
                            <h3 className="title">
                                Discover  <br/>
                                Real organic <br/>
                                Flavors Vegetable 
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
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex={0}>
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/17.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/18.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/19.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex={0}>
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/17.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/18.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/19.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex={0}>
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/17.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/18.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/19.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex={0}>
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/17.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/18.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/19.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-settingsa" role="tabpanel" aria-labelledby="v-pills-settings-taba" tabIndex={0}>
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/17.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/18.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/19.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-settingsab" role="tabpanel" aria-labelledby="v-pills-settings-tabab" tabIndex={0}>
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/17.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/18.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/19.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-settingsabc" role="tabpanel" aria-labelledby="v-pills-settings-tababc" tabIndex={0}>
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/17.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/18.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-lightr fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/19.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-settingsabcd" role="tabpanel" aria-labelledby="v-pills-settings-tababcd" tabIndex={0}>
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/17.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/18.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-shopping-card-one deals-of-day">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <img src="images/grocery/19.jpg" alt="grocery"/>
                                            </a>
                                            <div className="action-share-option">
                                                <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                    <i className="fa-regular fa-heart"></i>
                                                </div>
                                                <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="fa-solid fa-retweet"></i>
                                                </div>
                                                <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                    <i className="fa-regular fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="body-content">
                                            <div className="start-area-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <a href="shop-details.html">
                                                <h4 className="title">Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="four-feature-in-one rts-section-gapBottom">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-3">
                   
                    <div className="feature-product-list-wrapper">
                        <div className="title-area">
                            <h2 className="title">
                                Recently Added
                            </h2>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/01.jpg" alt="product"/>
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/02.jpg" alt="product"/>
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Lays Potato Chips, Sweet Southern Heat ...</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/03.jpg" alt="product"/>
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Hillshire Farm Sliced Honey
                                            Deli Lunch Meat</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/04.jpg" alt="product"/>
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                   
                </div>
                <div className="col-lg-3">
                    <div className="feature-product-list-wrapper">
                        <div className="title-area">
                            <h2 className="title">
                                Top Rated
                            </h2>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/05.jpg" alt="product"/>
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/02.jpg" alt="product"/>
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Lays Potato Chips, Sweet Southern Heat ...</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/03.jpg" alt="product"/>
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Hillshire Farm Sliced Honey
                                            Deli Lunch Meat</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/04.jpg" alt="product"/>
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                   
                </div>
                <div className="col-lg-3">
                   
                    <div className="feature-product-list-wrapper">
                        <div className="title-area">
                            <h2 className="title">
                                Top Selling
                            </h2>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/06.jpg" alt="product"/>
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/04.jpg" alt="product"/>
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Lays Potato Chips, Sweet Southern Heat ...</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/01.jpg" alt="product"/>
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Hillshire Farm Sliced Honey
                                            Deli Lunch Meat</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/02.jpg" alt="product"/>
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                 
                </div>
                <div className="col-lg-3">
                   
                    <div className="feature-product-list-wrapper">
                        <div className="title-area">
                            <h2 className="title">
                                Deals of the day
                            </h2>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/06.jpg" alt="product"/>
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/04.jpg" alt="product"/>
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Lays Potato Chips, Sweet Southern Heat ...</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/01.jpg" alt="product"/>
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Hillshire Farm Sliced Honey
                                            Deli Lunch Meat</h4>
                                    </a>
                                    <div className="price-area">
                                        <span className="current">$36.00</span>
                                        <div className="previous">$36.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-product-list">
                            <a href="shop-details.html" className="thumbnail">
                                <img src="images/grocery/02.jpg" alt="product"/>
                            </a>
                            <div className="body-content">
                                <div className="top">
                                    <div className="stars-area">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <a href="shop-details.html">
                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                    </a>
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
    <div className="rts-blog-area rts-section-gap bg_gradient-tranding-items">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-area-between pl--0">
                        <h2 className="title-left mb--0">
                            Latest Blog Post Insights
                        </h2>
                    </div>
                </div>
            </div>
            <div className="row g-5">
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                 
                    <div className="single-blog-style-card-border">
                        <a href="blog-details.html" className="thumbnail">
                            <img src="images/blog/05.jpg" alt="blog-area"/>
                        </a>
                        <div className="inner-content-body">
                            <div className="tag-area">
                                <div className="single">
                                    <i className="fa-regular fa-clock"></i>
                                    <span>15 Sep, 2023</span>
                                </div>
                                <div className="single">
                                    <i className="fa-regular fa-folder"></i>
                                    <span>Modern Fashion</span>
                                </div>
                            </div>
                            <a className="title-main" href="blog-details.html">
                                <h3 className="title">
                                    Fashion Fixation: Fueling Your Passion for
                                    All Things Stylish
                                </h3>
                            </a>
                            <div className="button-area">
                                <a href="blog-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                    <div className="btn-text">
                                       Read Details
                                    </div>
                                    <div className="arrow-icon">
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </div>
                                    <div className="arrow-icon">
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                  
                    <div className="single-blog-style-card-border">
                        <a href="blog-details.html" className="thumbnail">
                            <img src="images/blog/06.jpg" alt="blog-area"/>
                        </a>
                        <div className="inner-content-body">
                            <div className="tag-area">
                                <div className="single">
                                    <i className="fa-regular fa-clock"></i>
                                    <span>15 Sep, 2023</span>
                                </div>
                                <div className="single">
                                    <i className="fa-regular fa-folder"></i>
                                    <span>Modern Fashion</span>
                                </div>
                            </div>
                            <a className="title-main" href="blog-details.html">
                                <h3 className="title">
                                    Fashion Fixation: Fueling Your Passion for
                                    All Things Stylish
                                </h3>
                            </a>
                            <div className="button-area">
                                <a href="blog-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                    <div className="btn-text">
                                       Read Details
                                    </div>
                                    <div className="arrow-icon">
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </div>
                                    <div className="arrow-icon">
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                  
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                   
                    <div className="single-blog-style-card-border">
                        <a href="blog-details.html" className="thumbnail">
                            <img src="images/blog/07.jpg" alt="blog-area"/>
                        </a>
                        <div className="inner-content-body">
                            <div className="tag-area">
                                <div className="single">
                                    <i className="fa-regular fa-clock"></i>
                                    <span>15 Sep, 2023</span>
                                </div>
                                <div className="single">
                                    <i className="fa-regular fa-folder"></i>
                                    <span>Modern Fashion</span>
                                </div>
                            </div>
                            <a className="title-main" href="blog-details.html">
                                <h3 className="title">
                                    Fashion Fixation: Fueling Your Passion for
                                    All Things Stylish
                                </h3>
                            </a>
                            <div className="button-area">
                                <a href="blog-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                    <div className="btn-text">
                                       Read Details
                                    </div>
                                    <div className="arrow-icon">
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </div>
                                    <div className="arrow-icon">
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                   
                    <div className="single-blog-style-card-border">
                        <a href="blog-details.html" className="thumbnail">
                            <img src="images/blog/08.jpg" alt="blog-area"/>
                        </a>
                        <div className="inner-content-body">
                            <div className="tag-area">
                                <div className="single">
                                    <i className="fa-regular fa-clock"></i>
                                    <span>15 Sep, 2023</span>
                                </div>
                                <div className="single">
                                    <i className="fa-regular fa-folder"></i>
                                    <span>Modern Fashion</span>
                                </div>
                            </div>
                            <a className="title-main" href="blog-details.html">
                                <h3 className="title">
                                    Fashion Fixation: Fueling Your Passion for
                                    All Things Stylish
                                </h3>
                            </a>
                            <div className="button-area">
                                <a href="blog-details.html" className="rts-btn btn-primary radious-sm with-icon">
                                    <div className="btn-text">
                                       Read Details
                                    </div>
                                    <div className="arrow-icon">
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </div>
                                    <div className="arrow-icon">
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    <div className="rts-footer-area pt--80 bg_blue-footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="footer-main-content-wrapper pb--70">
                   
                    <div className="single-footer-wized">
                        <h3 className="footer-title">About Company</h3>
                        <div className="call-area">
                            <div className="icon">
                                <i className="fa-light fa-phone-rotary"></i>
                            </div>
                            <div className="info">
                                <span>Have Question? Call Us 24/7</span>
                                <a href="#" className="number">+258 3692 2569</a>
                            </div>
                        </div>
                        <div className="opening-hour">
                            <div className="single">
                                <p>Monday - Friday: <span>8:00am - 6:00pm</span></p>
                            </div>
                            <div className="single">
                                <p>Saturday: <span>8:00am - 6:00pm</span></p>
                            </div>
                            <div className="single">
                                <p>Sunday: <span>Service Close</span></p>
                            </div>
                        </div>
                    </div>
                   
                    <div className="single-footer-wized">
                        <h3 className="footer-title">Our Stores</h3>
                        <div className="footer-nav">
                            <ul>
                                <li><a href="#">Delivery Information</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Support Center</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                    </div>
                   
                    <div className="single-footer-wized">
                        <h3 className="footer-title">Shop Categories</h3>
                        <div className="footer-nav">
                            <ul>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Information</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Nest Stories</a></li>
                            </ul>
                        </div>
                    </div>
                   
                    <div className="single-footer-wized">
                        <h3 className="footer-title">Useful Links</h3>
                        <div className="footer-nav">
                            <ul>
                                <li><a href="#">Cancellation & Returns</a></li>
                                <li><a href="#">Report Infringement</a></li>
                                <li><a href="#">Payments</a></li>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                  
                    <div className="single-footer-wized">
                        <h3 className="footer-title">Our Newsletter</h3>
                        <p className="disc-news-letter">
                            Subscribe to the mailing list to receive updates one <br/> the new arrivals and other discounts
                        </p>
                        <form className="footersubscribe-form" action="#">
                            <input type="email" placeholder="Your email address" required/>
                            <button className="rts-btn btn-primary">Subscribe</button>
                        </form>

                        <p className="dsic">
                            I would like to receive news and special offer
                        </p>
                    </div>
                    
                </div>
                <div className="social-and-payment-area-wrapper">
                    <div className="social-one-wrapper">
                        <span>Follow Us:</span>
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div className="payment-access">
                        <span>Payment Accepts:</span>
                        <img src="images/payment/06.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className="rts-copyright-area five-h">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="copyright-between-1">
                        <p className="disc">
                            Copyright 2024 <a href="#">©Ekomart</a>. All rights reserved.
                        </p>
                        <a href="#" className="playstore-app-area">
                            <span>Download App</span>
                            <img src="images/payment/02.png" alt=""/>
                            <img src="images/payment/03.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};
export default HomeFive;