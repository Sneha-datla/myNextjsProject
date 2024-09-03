import React from 'react'
import Link from 'next/link'

const HeaderNav:React.FC=()=> {
  return (
    <div>
         <div className="rts-header-nav-area-one header--sticky">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="nav-and-btn-wrapper">
                        <div className="nav-area">
    <nav>
        <ul className="parent-nav">
            <li className="parent has-dropdown">
                <a className="nav-link" href="#">Home</a>
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
                <a className="nav-link" href="#">Vendors</a>
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
                      
                        <div className="right-btn-area">
                            <a href="#" className="btn-narrow">Trending Products</a>
                            <button className="rts-btn btn-primary">
                                Get 30% Discount Now
                                <span>Sale</span>
                            </button>
                        </div>
                       
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="logo-search-category-wrapper after-md-device-header">
                        <a href="index-2.html" className="logo-area">
                            <img src="images/logo/logo-01.svg" alt="logo-main" className="logo"/>
                        </a>
                        <div className="category-search-wrapper">
                            <div className="category-btn category-hover-header">
                                <img className="parent" src="assets/images/icons/bar-1.svg" alt="icons"/>
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
                                                        <div className="progress-bar wow fadeInLeft" role="progressbar" style={{width: "80%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
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
                                <div className="menu-btn">
        
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
  );
};

export default HeaderNav