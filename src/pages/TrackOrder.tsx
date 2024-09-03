import React from "react";
import Link from "next/link";
import HeaderTop from "@/components/HeaderTop";
import SearchHeader from "@/components/SearchHeader";
import HeaderNav from "@/components/HeaderNav";
import ServiceArea from "@/components/ServiceArea";
import Footer from "@/components/Footer";

const TrackOrder: React.FC = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <SearchHeader></SearchHeader>
            <HeaderNav></HeaderNav>
            <div className="rts-navigation-area-breadcrumb bg_light-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="navigator-breadcrumb-wrapper">
                                <Link href="/">
                                    Home
                                </Link>
                                <i className="fa-solid fa-chevron-right"></i>
                                <Link href="/vendor-grid" className="current">Vendor Grid
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="track-order-area rts-section-gap">
                <div className="container-2">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tracing-order-account">
                                <h2 className="title">Orders tracking</h2>
                                <p>
                                    To keep up with the status of your order, kindly input your OrderID in the designated box below and click the Track button. This unique identifier can be found on your receipt as well as in the confirmation email that was sent to you.
                                </p>
                                <form action="#" className="order-tracking">
                                    <div className="single-input">
                                        <label htmlFor="order-id">Order Id</label>
                                        <input
                                            id="order-id"
                                            type="text"
                                            placeholder="Found in your order confirmation email"
                                            required
                                        />
                                    </div>
                                    <div className="single-input">
                                        <label htmlFor="order-idt">Billing email</label>
                                        <input
                                            id="order-idt"
                                            type="text"
                                            placeholder="Email You use during checkout"
                                        />
                                    </div>
                                    <button className="rts-btn btn-primary">Track</button>
                                </form>
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

export default TrackOrder;
