import Footer from '@/components/Footer';
import HeaderNav from '@/components/HeaderNav';
import HeaderTop from '@/components/HeaderTop';
import SearchHeader from '@/components/SearchHeader';
import React, { useState } from 'react';
interface ShopGridTopProps {}

const ShopGridTop: React.FC<ShopGridTopProps> = () => {
    // Define state with a type
    const [activeTab, setActiveTab] = useState<string>('home-tab');

    // Handle tab click with type for tabId
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };
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
                        <a className="current" href="index-2.html">Shop Grid Sidebar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="shop-grid-sidebar-area rts-section-gap">
        <div className="container">
            <div className="row g-0">
                <div className="col-xl-12 col-lg-12">
                    <div className="filter-select-area">
                        <div className="top-filter">
                            <span>Showing 1–20 of 57 results</span>
                            <div className="right-end">
                                <span>Sort: Short By Latest</span>
                                <div className="button-tab-area">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                        <button   className={`nav-link single-button ${activeTab === 'home-tab' ? 'active' : ''}`}  id="home-tab"  onClick={() => handleTabClick('home-tab')} type="button" role="tab" aria-controls="home-tab-pane" aria-selected={activeTab === 'home-tab'} >
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width="6" height="6" rx="1.5" stroke="#2C3B28"/>
                                                <rect x="0.5" y="9.5" width="6" height="6" rx="1.5" stroke="#2C3B28"/>
                                                <rect x="9.5" y="0.5" width="6" height="6" rx="1.5" stroke="#2C3B28"/>
                                                <rect x="9.5" y="9.5" width="6" height="6" rx="1.5" stroke="#2C3B28"/>
                                                </svg>  
                                          </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                        <button className={`nav-link single-button ${activeTab === 'profile-tab' ? 'active' : ''}`} id="profile-tab" onClick={() => handleTabClick('profile-tab')}  type="button" role="tab" aria-controls="profile-tab-pane" aria-selected={activeTab === 'profile-tab'}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width="6" height="6" rx="1.5" stroke="#2C3C28"/>
                                                <rect x="0.5" y="9.5" width="6" height="6" rx="1.5" stroke="#2C3C28"/>
                                                <rect x="9" y="3" width="7" height="1" fill="#2C3C28"/>
                                                <rect x="9" y="12" width="7" height="1" fill="#2C3C28"/>
                                                </svg>
                                          </button>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="nice-select-area-wrapper-and-button">
                            <div className="nice-select-wrapper-1">
                                <div className="single-select">
                                    <select>
                                        <option data-display="All Categories">All Categories</option>
                                        <option value="1">Some option</option>
                                        <option value="2">Another option</option>
                                        <option value="3" disabled>A disabled option</option>
                                        <option value="4">Potato</option>
                                      </select> 
                                </div>
                                <div className="single-select">
                                    <select>
                                        <option data-display="All Brands">All Brands</option>
                                        <option value="1">Some option</option>
                                        <option value="2">Another option</option>
                                        <option value="3" disabled>A disabled option</option>
                                        <option value="4">Potato</option>
                                      </select> 
                                </div>
                                <div className="single-select">
                                    <select>
                                        <option data-display="All Size">All Size </option>
                                        <option value="1">Some option</option>
                                        <option value="2">Another option</option>
                                        <option value="3" disabled>A disabled option</option>
                                        <option value="4">Potato</option>
                                      </select> 
                                </div>
                                <div className="single-select">
                                    <select>
                                        <option data-display="All Weight">All Weight</option>
                                        <option value="1">Some option</option>
                                        <option value="2">Another option</option>
                                        <option value="3" disabled>A disabled option</option>
                                        <option value="4">Potato</option>
                                      </select> 
                                </div>
                            </div>
                            <div className="button-area">
                                <button className="rts-btn">Filter</button>
                                <button className="rts-btn">Reset Filter</button>
                            </div>
                        </div>
                    </div>

                    <div className="tab-content" id="myTabContent">
                    {activeTab === 'home-tab' && (

                    <div className= "product-area-wrapper-shopgrid-list mt--20 tab-pane fade show active" id="home-tab-pane"  role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>                                     
                         <div className="row g-4">
                                <div className="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="single-shopping-card-one">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <div className="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i className="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/01.jpg" alt="grocery"/>
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
                                            
                                            <a href="shop-details.html">
                                                <h4 className="title">Nestle Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <div className="quantity-edit">
                                                    <input type="text" className="input" value="1"/>
                                                    <div className="button-wrapper-action">
                                                        <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                        <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
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
                                <div className="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="single-shopping-card-one">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <div className="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i className="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/02.jpg" alt="grocery"/>
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
                                            
                                            <a href="shop-details.html">
                                                <h4 className="title">Most Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <div className="quantity-edit">
                                                    <input type="text" className="input" value="1"/>
                                                    <div className="button-wrapper-action">
                                                        <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                        <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
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
                                <div className="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="single-shopping-card-one">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <div className="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i className="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/03.jpg" alt="grocery"/>
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
                                            
                                            <a href="shop-details.html">
                                                <h4 className="title">Coco Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <div className="quantity-edit">
                                                    <input type="text" className="input" value="1"/>
                                                    <div className="button-wrapper-action">
                                                        <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                        <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
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
                                <div className="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="single-shopping-card-one">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <div className="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i className="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/04.jpg" alt="grocery"/>
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
                                            
                                            <a href="shop-details.html">
                                                <h4 className="title">Marbels Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <div className="quantity-edit">
                                                    <input type="text" className="input" value="1"/>
                                                    <div className="button-wrapper-action">
                                                        <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                        <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
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
                                <div className="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="single-shopping-card-one">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <div className="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i className="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/05.jpg" alt="grocery"/>
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
                                            
                                            <a href="shop-details.html">
                                                <h4 className="title">Fastula Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <div className="quantity-edit">
                                                    <input type="text" className="input" value="1"/>
                                                    <div className="button-wrapper-action">
                                                        <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                        <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
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
                                <div className="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="single-shopping-card-one">
                                       
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <div className="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i className="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/06.jpg" alt="grocery"/>
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
                                            
                                            <a href="shop-details.html">
                                                <h4 className="title">Choco Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <div className="quantity-edit">
                                                    <input type="text" className="input" value="1"/>
                                                    <div className="button-wrapper-action">
                                                        <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                        <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
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
                                <div className="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="single-shopping-card-one">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <div className="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i className="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/03.jpg" alt="grocery"/>
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
                                            
                                            <a href="shop-details.html">
                                                <h4 className="title">Nasir Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <div className="quantity-edit">
                                                    <input type="text" className="input" value="1"/>
                                                    <div className="button-wrapper-action">
                                                        <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                        <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
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
                                <div className="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="single-shopping-card-one">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <div className="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i className="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/05.jpg" alt="grocery"/>
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
                                            
                                            <a href="shop-details.html">
                                                <h4 className="title">Crow Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <div className="quantity-edit">
                                                    <input type="text" className="input" value="1"/>
                                                    <div className="button-wrapper-action">
                                                        <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                        <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
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
                                <div className="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="single-shopping-card-one">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <div className="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i className="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/02.jpg" alt="grocery"/>
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
                                            
                                            <a href="shop-details.html">
                                                <h4 className="title">Vage Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <div className="quantity-edit">
                                                    <input type="text" className="input" value="1"/>
                                                    <div className="button-wrapper-action">
                                                        <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                        <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
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
                                
                                <div className="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="single-shopping-card-one">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <div className="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i className="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/06.jpg" alt="grocery"/>
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
                                            
                                            <a href="shop-details.html">
                                                <h4 className="title">Marps Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <div className="quantity-edit">
                                                    <input type="text" className="input" value="1"/>
                                                    <div className="button-wrapper-action">
                                                        <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                        <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
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
                                <div className="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="single-shopping-card-one">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <div className="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i className="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/01.jpg" alt="grocery"/>
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
                                            
                                            <a href="shop-details.html">
                                                <h4 className="title">Solars Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <div className="quantity-edit">
                                                    <input type="text" className="input" value="1"/>
                                                    <div className="button-wrapper-action">
                                                        <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                        <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
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
                                <div className="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="single-shopping-card-one">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <div className="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i className="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/02.jpg" alt="grocery"/>
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
                                            
                                            <a href="shop-details.html">
                                                <h4 className="title">Desent Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <div className="quantity-edit">
                                                    <input type="text" className="input" value="1"/>
                                                    <div className="button-wrapper-action">
                                                        <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                        <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
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
                                <div className="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="single-shopping-card-one">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <div className="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i className="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/03.jpg" alt="grocery"/>
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
                                            
                                            <a href="shop-details.html">
                                                <h4 className="title">Gajin Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <div className="quantity-edit">
                                                    <input type="text" className="input" value="1"/>
                                                    <div className="button-wrapper-action">
                                                        <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                        <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
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
                                <div className="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="single-shopping-card-one">
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <div className="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i className="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/04.jpg" alt="grocery"/>
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
                                            
                                            <a href="shop-details.html">
                                                <h4 className="title">Palts Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <div className="quantity-edit">
                                                    <input type="text" className="input" value="1"/>
                                                    <div className="button-wrapper-action">
                                                        <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                        <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
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
                                <div className="col-lg-20 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="single-shopping-card-one">
                                     
                                        <div className="image-and-action-area-wrapper">
                                            <a href="shop-details.html" className="thumbnail-preview">
                                                <div className="badge">
                                                    <span>25% <br/> 
                                                        Off
                                                    </span>
                                                    <i className="fa-solid fa-bookmark"></i>
                                                </div>
                                                <img src="images/grocery/05.jpg" alt="grocery"/>
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
                                            
                                            <a href="shop-details.html">
                                                <h4 className="title">Kostari Cerelac Mixed Fruits &amp;
                                                    Wheat with Milk</h4>
                                            </a>
                                            <span className="availability">500g Pack</span>
                                            <div className="price-area">
                                                <span className="current">$36.00</span>
                                                <div className="previous">$36.00</div>
                                            </div>
                                            <div className="cart-counter-action">
                                                <div className="quantity-edit">
                                                    <input type="text" className="input" value="1"/>
                                                    <div className="button-wrapper-action">
                                                        <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                        <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
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
                    )}
                                            {activeTab === 'profile-tab' && (

                       

<div  className="product-area-wrapper-shopgrid-list with-list mt--20 tab-pane fade show active" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>                           
                          
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" className="thumbnail-preview">
                                            <div className="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i className="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/03.jpg" alt="grocery"/>
                                        </a>
                                        <div className="body-content">
                                            <div className="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 className="title">Kajib Cerelac Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span className="availability">500g Pack</span>
                                                <div className="price-area">
                                                    <span className="current">$36.00</span>
                                                    <div className="previous">$36.00</div>
                                                </div>
                                                <div className="cart-counter-action">
                                                    <div className="quantity-edit">
                                                        <input type="text" className="input" value="1"/>
                                                        <div className="button-wrapper-action">
                                                            <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                            <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                        </div>
                                                        </div>
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
                                            <div className="natural-value">
                                            <h6 className="title">
                                                    Nutritional Values
                                                </h6>
                                                <div className="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" className="thumbnail-preview">
                                            <div className="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i className="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/04.jpg" alt="grocery"/>
                                        </a>
                                        <div className="body-content">
                                            <div className="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 className="title">Lorg Cerelac Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span className="availability">500g Pack</span>
                                                <div className="price-area">
                                                    <span className="current">$36.00</span>
                                                    <div className="previous">$36.00</div>
                                                </div>
                                                <div className="cart-counter-action">
                                                    <div className="quantity-edit">
                                                        <input type="text" className="input" value="1"/>
                                                        <div className="button-wrapper-action">
                                                            <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                            <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                        </div>
                                                    </div>
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
                                            <div className="natural-value">
                                                <h6 className="title">
                                                    Nutritional Values
                                                </h6>
                                                <div className="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" className="thumbnail-preview">
                                            <div className="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i className="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/05.jpg" alt="grocery"/>
                                        </a>
                                        <div className="body-content">
                                            <div className="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 className="title">Patas Cerelac Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span className="availability">500g Pack</span>
                                                <div className="price-area">
                                                    <span className="current">$36.00</span>
                                                    <div className="previous">$36.00</div>
                                                </div>
                                                <div className="cart-counter-action">
                                                    <div className="quantity-edit">
                                                        <input type="text" className="input" value="1"/>
                                                        <div className="button-wrapper-action">
                                                            <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                            <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                        </div>
                                                    </div>
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
                                            <div className="natural-value">
                                                <h6 className="title">
                                                    Nutritional Values
                                                </h6>
                                                <div className="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" className="thumbnail-preview">
                                            <div className="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i className="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/06.jpg" alt="grocery"/>
                                        </a>
                                        <div className="body-content">
                                            <div className="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 className="title">Kolas Cerelac Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span className="availability">500g Pack</span>
                                                <div className="price-area">
                                                    <span className="current">$36.00</span>
                                                    <div className="previous">$36.00</div>
                                                </div>
                                                <div className="cart-counter-action">
                                                    <div className="quantity-edit">
                                                        <input type="text" className="input" value="1"/>
                                                        <div className="button-wrapper-action">
                                                            <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                            <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                        </div>
                                                    </div>
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
                                            <div className="natural-value">
                                                <h6 className="title">
                                                    Nutritional Values
                                                </h6>
                                                <div className="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" className="thumbnail-preview">
                                            <div className="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i className="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/01.jpg" alt="grocery"/>
                                        </a>
                                        <div className="body-content">
                                            <div className="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 className="title">Rolar Cerelac Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span className="availability">500g Pack</span>
                                                <div className="price-area">
                                                    <span className="current">$36.00</span>
                                                    <div className="previous">$36.00</div>
                                                </div>
                                                <div className="cart-counter-action">
                                                    <div className="quantity-edit">
                                                        <input type="text" className="input" value="1"/>
                                                        <div className="button-wrapper-action">
                                                            <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                            <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                        </div>
                                                    </div>
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
                                            <div className="natural-value">
                                                <h6 className="title">
                                                    Nutritional Values
                                                </h6>
                                                <div className="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" className="thumbnail-preview">
                                            <div className="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i className="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/03.jpg" alt="grocery"/>
                                        </a>
                                        <div className="body-content">
                                            <div className="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 className="title">Olar Cerelac Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span className="availability">500g Pack</span>
                                                <div className="price-area">
                                                    <span className="current">$36.00</span>
                                                    <div className="previous">$36.00</div>
                                                </div>
                                                <div className="cart-counter-action">
                                                    <div className="quantity-edit">
                                                        <input type="text" className="input" value="1"/>
                                                        <div className="button-wrapper-action">
                                                            <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                            <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                        </div>
                                                    </div>
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
                                            <div className="natural-value">
                                                <h6 className="title">
                                                    Nutritional Values
                                                </h6>
                                                <div className="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" className="thumbnail-preview">
                                            <div className="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i className="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/04.jpg" alt="grocery"/>
                                        </a>
                                        <div className="body-content">
                                            <div className="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 className="title">jack Fruit Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span className="availability">500g Pack</span>
                                                <div className="price-area">
                                                    <span className="current">$36.00</span>
                                                    <div className="previous">$36.00</div>
                                                </div>
                                                <div className="cart-counter-action">
                                                    <div className="quantity-edit">
                                                        <input type="text" className="input" value="1"/>
                                                        <div className="button-wrapper-action">
                                                            <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                            <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                        </div>
                                                    </div>
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
                                            <div className="natural-value">
                                                <h6 className="title">
                                                    Nutritional Values
                                                </h6>
                                                <div className="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" className="thumbnail-preview">
                                            <div className="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i className="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/05.jpg" alt="grocery"/>
                                        </a>
                                        <div className="body-content">
                                            <div className="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 className="title">Fresh Cerelac Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span className="availability">500g Pack</span>
                                                <div className="price-area">
                                                    <span className="current">$36.00</span>
                                                    <div className="previous">$36.00</div>
                                                </div>
                                                <div className="cart-counter-action">
                                                    <div className="quantity-edit">
                                                        <input type="text" className="input" value="1"/>
                                                        <div className="button-wrapper-action">
                                                            <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                            <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                        </div>
                                                    </div>
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
                                            <div className="natural-value">
                                                <h6 className="title">
                                                    Nutritional Values
                                                </h6>
                                                <div className="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" className="thumbnail-preview">
                                            <div className="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i className="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/06.jpg" alt="grocery"/>
                                        </a>
                                        <div className="body-content">
                                            <div className="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 className="title">Natural Cerelac Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span className="availability">500g Pack</span>
                                                <div className="price-area">
                                                    <span className="current">$36.00</span>
                                                    <div className="previous">$36.00</div>
                                                </div>
                                                <div className="cart-counter-action">
                                                    <div className="quantity-edit">
                                                        <input type="text" className="input" value="1"/>
                                                        <div className="button-wrapper-action">
                                                            <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                            <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                        </div>
                                                    </div>
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
                                            <div className="natural-value">
                                                <h6 className="title">
                                                    Nutritional Values
                                                </h6>
                                                <div className="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-shopping-card-one discount-offer">
                                        <a href="shop-details.html" className="thumbnail-preview">
                                            <div className="badge">
                                                <span>25% <br/> 
                                                    Off
                                                </span>
                                                <i className="fa-solid fa-bookmark"></i>
                                            </div>
                                            <img src="images/grocery/01.jpg" alt="grocery"/>
                                        </a>
                                        <div className="body-content">
                                            <div className="title-area-left">
                                                <a href="shop-details.html">
                                                    <h4 className="title">Nestle Cerelac Mixed Fruits &amp;
                                                        Wheat with Milk</h4>
                                                </a>
                                                <span className="availability">500g Pack</span>
                                                <div className="price-area">
                                                    <span className="current">$36.00</span>
                                                    <div className="previous">$36.00</div>
                                                </div>
                                                <div className="cart-counter-action">
                                                    <div className="quantity-edit">
                                                        <input type="text" className="input" value="1"/>
                                                        <div className="button-wrapper-action">
                                                            <button className="button"><i className="fa-solid fa-chevron-down"></i></button>
                                                            <button className="button plus">+<i className="fa-solid fa-chevron-up"></i></button>
                                                        </div>
                                                    </div>
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
                                            <div className="natural-value">
                                                <h6 className="title">
                                                    Nutritional Values
                                                </h6>
                                                <div className="single">
                                                    <span>Energy(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Protein(g):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>magnetiam(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Calory(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                                <div className="single">
                                                    <span>Vitamine(kcal):</span>
                                                    <span>211</span>
                                                </div>
                                            </div>
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
    <Footer></Footer>
        </div>
      
       
    );
};
export default ShopGridTop;