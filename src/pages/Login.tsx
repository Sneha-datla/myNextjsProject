import React from 'react'
import Link from 'next/link';
import ServiceArea from '@/components/ServiceArea';
import Footer from '@/components/Footer';
import HeaderTop from '@/components/HeaderTop';
import SearchHeader from '@/components/SearchHeader';
const Login:React.FC=()=> {
  return (
    <div>
        <HeaderTop></HeaderTop>
        <SearchHeader></SearchHeader>
        <HeaderTop></HeaderTop>
      <div className="rts-navigation-area-breadcrumb bg_light-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="navigator-breadcrumb-wrapper">
                        <a href="index-2.html">Home</a>
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link className="current" href="/Register">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="section-seperator bg_light-1">
        <div className="container">
            <hr className="section-seperator"/>
        </div>
    </div>
    <div className="rts-register-area rts-section-gap bg_light-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="registration-wrapper-1">
                        <div className="logo-area mb--0">
                            <img className="mb--10" src="images/logo/fav.png" alt="logo"/>
                        </div>
                        <h3 className="title">Login Into Your Account</h3>
                        <form action="#" className="registration-form">
                            <div className="input-wrapper">
                                <label htmlFor="email">Email*</label>
                                <input type="email" id="email"/>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password*</label>
                                <input type="password" id="password"/>
                            </div>
                            <button className="rts-btn btn-primary">Login Account</button>
                            <div className="another-way-to-registration">
                                <div className="registradion-top-text">
                                    <span>Or Register With</span>
                                </div>
                                <div className="login-with-brand">
                                    <a href="#" className="single">
                                        <img src="images/form/google.svg" alt="login"/>
                                    </a>
                                    <a href="#" className="single">
                                        <img src="images/form/facebook.svg" alt="login"/>
                                    </a>
                                </div>
                                <p>Already Have Account? <a href="#">Login</a></p>
                            </div>
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
export default Login;