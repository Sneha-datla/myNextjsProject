import React from 'react';
import Link from 'next/link';
const SearchHeader :React.FC= () => {
  return (
    <div>
    <div className="search-header-area-main">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="logo-search-category-wrapper">
                        <a href="index-2.html" className="logo-area">
                            <img src="images/logo/logo-01.svg" alt="logo-main" className="logo"/>
                        </a>
                        <div className="category-search-wrapper">
                            <div className="category-btn category-hover-header">
                                <img className="parent" src="images/icons/bar-1.svg" alt="icons"/>
                                <span>Categories</span>
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
                            <form action="#" className="search-header">
                                <input type="text" placeholder="Search for products, categories or brands" required/>
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
                        <div className="actions-area">
                            <div className="search-btn" id="searchs">
    
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
                        <div className="accont-wishlist-cart-area-header">
                            <Link href="/Account" className="btn-border-only account">
                                <i className="fa-regular fa-user"></i>
                                <span>Account</span>
                            </Link>
                            <Link href="/WishList" className="btn-border-only wishlist">
                                <i className="fa-regular fa-heart"></i>
                                <span>Wishlist</span>
                            </Link>
                            <div className="btn-border-only cart category-hover-header">
                                <i className=" fa-solid fa-cart-shopping"></i>
                                <span  className="text">My Cart</span>
                                <div className="category-sub-menu card-number-show">
                                    <h5 className="shopping-cart-number">Shopping Cart (03)</h5>
                                    <div className="cart-item-1 border-top">
                                        <div className="img-name">
                                            <div className="thumbanil">
                                                <img src="assets/images/shop/cart-1.png" alt=""/>
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
                                                <img src="assets/images/shop/05.png" alt=""/>
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
                                                <img src="assets/images/shop/04.png" alt=""/>
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
                                            <Link href="/ViewCart" className="rts-btn btn-primary ">View Cart</Link>
                                            <Link href="/CheckOut" className="rts-btn btn-primary border-only">CheckOut</Link>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/ViewCart" className="over_link"></Link>
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

export default SearchHeader;
