import React from "react";
import Link from "next/link";
import HeaderTop from "@/components/HeaderTop";
import SearchHeader from "@/components/SearchHeader";
import HeaderNav from "@/components/HeaderNav";
import ServiceArea from "@/components/ServiceArea";
import Footer from "@/components/Footer";

const CheckOut: React.FC = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <SearchHeader></SearchHeader>
            <HeaderNav></HeaderNav>
            <div className="rts-navigation-area-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="navigator-breadcrumb-wrapper">
                                <Link href="/">
                                    Home
                                </Link>
                                <i className="fa-solid fa-chevron-right"></i>
                                <Link href="/shop">
                                    Shop
                                </Link>
                                <i className="fa-solid fa-chevron-right"></i>
                                <Link href="/checkout" className="current">
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-seperator">
                <div className="container">
                    <hr className="section-seperator" />
                </div>
            </div>
            <div className="checkout-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 pr--40 pr_md--5 pr_sm--5 order-2 order-xl-1 order-lg-2 order-md-2 order-sm-2 mt_md--30 mt_sm--30">
                            <div className="coupon-input-area-1 login-form">
                                <div className="coupon-area">
                                    <div className="coupon-ask">
                                        <span>Returning customers?</span>
                                        <button className="coupon-click"> Click here to login</button>
                                    </div>
                                    <div className="coupon-input-area">
                                        <div className="inner">
                                            <p>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section.</p>
                                            <form action="#">
                                                <input type="email" placeholder="User Name..." />
                                                <input type="password" placeholder="Enter password..." />
                                                <button type="submit" className="btn-primary rts-btn">Log In</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="coupon-input-area-1">
                                <div className="coupon-area">
                                    <div className="coupon-ask cupon-wrapper-1">
                                        <button className="coupon-click">Have a coupon? Click here to enter your code</button>
                                    </div>
                                    <div className="coupon-input-area cupon1">
                                        <div className="inner">
                                            <p className="mt--0 mb--20">If you have a coupon code, please apply it below.</p>
                                            <div className="form-area">
                                                <input type="text" placeholder="Enter Coupon Code..." />
                                                <button type="submit" className="btn-primary rts-btn">Apply Coupon</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rts-billing-details-area">
                                <h3 className="title">Billing Details</h3>
                                <form action="#">
                                    <div className="single-input">
                                        <label htmlFor="email">Email Address*</label>
                                        <input id="email" type="text" required />
                                    </div>
                                    <div className="half-input-wrapper">
                                        <div className="single-input">
                                            <label htmlFor="f-name">First Name*</label>
                                            <input id="f-name" type="text" required />
                                        </div>
                                        <div className="single-input">
                                            <label htmlFor="l-name">Last Name*</label>
                                            <input id="l-name" type="text" />
                                        </div>
                                    </div>
                                    <div className="single-input">
                                        <label htmlFor="comp">Company Name (Optional)</label>
                                        <input id="comp" type="text" />
                                    </div>
                                    <div className="single-input">
                                        <label htmlFor="country">Country / Region*</label>
                                        <input id="country" type="text" />
                                    </div>
                                    <div className="single-input">
                                        <label htmlFor="street">Street Address*</label>
                                        <input id="street" type="text" required />
                                    </div>
                                    <div className="single-input">
                                        <label htmlFor="city">Town / City*</label>
                                        <input id="city" type="text" />
                                    </div>
                                    <div className="single-input">
                                        <label htmlFor="state">State*</label>
                                        <input id="state" type="text" />
                                    </div>
                                    <div className="single-input">
                                        <label htmlFor="zip">Zip Code*</label>
                                        <input id="zip" type="text" required />
                                    </div>
                                    <div className="single-input">
                                        <label htmlFor="phone">Phone*</label>
                                        <input id="phone" type="text" />
                                    </div>
                                    <div className="single-input">
                                        <label htmlFor="ordernotes">Order Notes*</label>
                                        <textarea id="ordernotes"></textarea>
                                    </div>
                                    <button className="rts-btn btn-primary">Update Cart</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-xl-2 order-lg-1 order-md-1 order-sm-1">
                            <h3 className="title-checkout">Your Order</h3>
                            <div className="right-card-sidebar-checkout">
                                <div className="top-wrapper">
                                    <div className="product">
                                        Products
                                    </div>
                                    <div className="price">
                                        Price
                                    </div>
                                </div>
                                <div className="single-shop-list">
                                    <div className="left-area">
                                        <a href="#" className="thumbnail">
                                            <img src="images/shop/04.png" alt="" />
                                        </a>
                                        <a href="#" className="title">
                                            Foster Farms Breast Nuggets Shaped Chicken
                                        </a>
                                    </div>
                                    <span className="price">$500.00</span>
                                </div>
                                <div className="single-shop-list">
                                    <div className="left-area">
                                        <a href="#" className="thumbnail">
                                            <img src="images/shop/04.png" alt="" />
                                        </a>
                                        <a href="#" className="title">
                                            Foster Farms Breast Nuggets Shaped Chicken
                                        </a>
                                    </div>
                                    <span className="price">$500.00</span>
                                </div>
                                <div className="single-shop-list">
                                    <div className="left-area">
                                        <a href="#" className="thumbnail">
                                            <img src="images/shop/04.png" alt="" />
                                        </a>
                                        <a href="#" className="title">
                                            Foster Farms Breast Nuggets Shaped Chicken
                                        </a>
                                    </div>
                                    <span className="price">$500.00</span>
                                </div>
                                <div className="single-shop-list">
                                    <div className="left-area">
                                        <a href="#" className="thumbnail">
                                            <img src="images/shop/04.png" alt="" />
                                        </a>
                                        <a href="#" className="title">
                                            Foster Farms Breast Nuggets Shaped Chicken
                                        </a>
                                    </div>
                                    <span className="price">$500.00</span>
                                </div>
                                <div className="single-shop-list">
                                    <div className="left-area">
                                        <span>Subtotal</span>
                                    </div>
                                    <span className="price">$500.00</span>
                                </div>
                                <div className="single-shop-list">
                                    <div className="left-area">
                                        <span>Shipping</span>
                                    </div>
                                    <span className="price">Flat rate: $500.00</span>
                                </div>
                                <div className="single-shop-list">
                                    <div className="left-area">
                                        <span style={{ fontWeight: 600, color: "#2C3C28" }}>Total Price:</span>
                                    </div>
                                    <span className="price" style={{ color: "#629D23" }}>$550.00</span>
                                </div>
                                <div className="cottom-cart-right-area">
                                    <ul>
                                        <li>
                                            <input type="radio" id="f-options" name="selector" />
                                            <label htmlFor="f-options">Direct Bank Transfer</label>
                                            <div className="check"></div>
                                        </li>
                                    </ul>
                                    <p className="disc mb--25">
                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                    </p>
                                    <ul>
                                        <li>
                                            <input type="radio" id="s-option" name="selector" />
                                            <label htmlFor="s-option">Check Payments</label>
                                            <div className="check">
                                                <div className="inside"></div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <input type="radio" id="t-option" name="selector" />
                                            <label htmlFor="t-option">Cash on Delivery</label>
                                            <div className="check">
                                                <div className="inside"></div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <input type="radio" id="four-option" name="selector" />
                                            <label htmlFor="four-option">PayPal</label>
                                            <div className="check">
                                                <div className="inside"></div>
                                            </div>
                                        </li>
                                    </ul>
                                    <p className="disc mb--25">Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                    <button type="submit" className="rts-btn btn-primary">Proceed to Payment</button>
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

export default CheckOut;
