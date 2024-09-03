import React from 'react'
import Link from 'next/link';
import CountDown from './CountDown';

const HeaderTop: React.FC = () => {
    return (
    <div>
     <div className="rts-header-one-area-one">
    <div className="header-top-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="bwtween-area-header-top">
                        <div className="discount-area">
                            <p className="disc">FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</p>
                           <CountDown></CountDown>
                        </div>
                        <div className="contact-number-area">
                            <p>Need help? Call Us: 
                                <a href="tel:+4733378901">+258 3268 21485</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="header-mid-one-wrapper">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="header-mid-wrapper-between">
                        <div className="nav-sm-left">
                            <ul className="nav-h_top">
                            <li><Link href="/About">About Us</Link></li>
                            <li><Link href="/Account">My Account</Link></li>
                                <li><Link href="/WishList">Wishlist</Link></li>
                            </ul>
                            <p className="para">We deliver to your everyday from 7:00 to 22:00</p>
                        </div>
                        <div className="nav-sm-left">
                            <ul className="nav-h_top language">
                                <li className="category-hover-header language-hover">
                                    <a href="#">English</a>
                                    <ul className="category-sub-menu">
                                        <li>
                                            <a href="#" className="menu-item">
                                                <span>Italian</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <span>Russian</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <span>Chinian</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="category-hover-header language-hover">
                                    <a href="#">
                                    USD
                                    </a>
                                    <ul className="category-sub-menu">
                                        <li>
                                            <a href="#" className="menu-item">
                                                <span>Rubol</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <span>Rupi</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="menu-item">
                                                <span>Euro</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link href="/TrackOrder">Track Order</Link></li>
                            </ul>
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
export default HeaderTop;
