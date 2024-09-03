import React from 'react';
import Link from 'next/link';
import HeaderTop from '@/components/HeaderTop';
import SearchHeader from '@/components/SearchHeader';
import HeaderNav from '@/components/HeaderNav';
import ServiceArea from '@/components/ServiceArea';
import Footer from '@/components/Footer';

const BlogDetailed: React.FC = () => {
  return (
    <>
    <HeaderTop></HeaderTop>
    <SearchHeader></SearchHeader>
    <HeaderNav></HeaderNav>
      <div className="rts-navigation-area-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="navigator-breadcrumb-wrapper">
                <Link href="/">Home</Link>
                <i className="fa-solid fa-chevron-right"></i>
                <Link href="/blog-list-sidebar" className="current">Blog Lists With Sidebar</Link>
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

      <div className="blog-sidebar-area rts-section-gap">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 order-lg-1 order-md-2 order-sm-2 order-2">
                    <div className="blog-details-area-1">
                        <div className="thumbnail">
                            <img src="images/blog/21.jpg" alt=""/>
                        </div>
                        <div className="body-content-blog-details">
                            <div className="top-tag-time">
                                <div className="single">
                                    <i className="fa-regular fa-clock"></i>
                                    <span>15 Sep, 2023</span>
                                </div>
                                <div className="single">
                                    <i className="fa-regular fa-folder"></i>
                                    <span>Organic Store</span>
                                </div>
                            </div>
                            <h1 className="title">Exploring Sustainable Practices in Our Grocery Business</h1>
                            <p className="disc">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit donec nascetur, ultrices pellentesque magna venenatis diam ac malesuada velit, vitae interdum est condimentum auctor eget mattis egestas. Quisque tortor justo condimentum ultrices lobortis quis, placerat senectus enim tempor in malesuada sodales, aptent suscipit ante maecenas volutpat empus className quis nisi leo aliquet morbi aenean cubilia rutrum aptent ridiculus bibendum.
                            </p>
                            <p className="disc">
                                Et pellentesque venenatis aliquet morbi praesent penatibus justo sem velit blandit, sapien pretium duis suspendisse aliquam accumsan suscipit mauris lacinia, aenean orci magnis consequat montes vivamus habitant torquent nec.
                            </p>
                            <p className="quote">
                                “Integer posuere odio ullamcorper semper eu bibendum, sodales pharetra ac ornare proin auctor, quis phasellus curae fusce magnis. Molestie tempus fusce nullam feugiat nibh praesent porttitor, hac per natoque risus vivamus penatibus mi posuere, parturient congue non tempor gravida aliquet”
                            </p>
                            <p className="disc">
                                Molestie vestibulum sagittis torquent eget potenti diam vehicula, habitant a eros fusce urna penatibus tempus ultrices, mollis euismod montes porttitor curabitur senectus. Sagittis dis libero felis montes scelerisque quis dapibus tempus massa est elementum, ad congue tortor facilisi phasellus mus dictum purus per pretium. Tincidunt conubia mus in natoque quam proin faucibus congue, mattis purus placerat porta arcu nam platea className.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="thumbnail-row-iamge">
                                        <img src="images/blog/22.jpg" alt=""/>
                                        <img src="images/blog/23.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <p className="disc">
                                Quisque curabitur vestibulum feugiat className natoque interdum lacus, himenaeos tellus diam vulputate cursus ultricies magna, cum tortor ullamcorper aliquet libero hendrerit. Montes tortor primis fringilla torquent iaculis dictumst vestibulum leo accumsan lacus himenaeos imperdiet, erat risus nullam nulla libero in magna curabitur nisi scelerisque vivamus tempor condimentum, ad eleifend magnis justo sed sociis ornare ante phasellus ac euismod.
                            </p>
                            <div className="tag-social-share-wrapper-area-wrapper">
                                <div className="tags-area">
                                    <span>Tags</span>
                                    <button>Organic</button>
                                    <button>Rings</button>
                                    <button>Birthday</button>
                                </div>
                                <div className="social-icons">
                                    <span>Social Icon</span>
                                    <ul>
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blog-details-author">
                                <div className="thumbnail">
                                    <img src="images/blog/01.png" alt=""/>
                                </div>
                                <div className="author-information">
                                    <span>
                                        Author
                                    </span>
                                    <h5 className="title">Venilla Walton</h5>
                                    <p>
                                        Donec sollicitudin molestie malesuada. Pellentesque in ipsum  orci porta dapibus ac di sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo orem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <div className="social">
                                        <ul>
                                            <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-replay-area-start">
                                <h3 className="title">03 Comments</h3>
                                <div className="single-comment-area">
                                    <div className="thumbanil">
                                        <img src="images/blog/02.png" alt="comment"/>
                                    </div>
                                    <div className="comment-information">
                                        <div className="top-area">
                                            <div className="left">
                                                <span>Sep 25, 2024</span>
                                                <h5 className="title">Amalia Genner</h5>
                                            </div>
                                            <div className="replay">
                                                <span>Replay</span>
                                            </div>
                                        </div>
                                        <p className="disc">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed convallis at tellus ivamus suscipit tortor eget felis porttitor volutpat.
                                        </p>
                                    </div>
                                </div>
                                <div className="single-comment-area bottom pl--100 pl_sm--0 mt--50 pt--50">
                                    <div className="thumbanil">
                                        <img src="images/blog/03.png" alt="comment"/>
                                    </div>
                                    <div className="comment-information">
                                        <div className="top-area">
                                            <div className="left">
                                                <span>Sep 25, 2024</span>
                                                <h5 className="title">Amalia Genner</h5>
                                            </div>
                                            <div className="replay">
                                                <span>Replay</span>
                                            </div>
                                        </div>
                                        <p className="disc">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed convallis at tellus ivamus suscipit tortor eget felis porttitor volutpat.
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-form-wrapper-1 mt--50">
                                    <h3 className="title mb--20">Add a Review</h3>
                                    <p>Your email address will not be published. Required fields are marked*</p>
                                    <form action="#" className="contact-form-1">
                                        <div className="contact-form-wrapper--half-area">
                                            <div className="single">
                                                <input type="text" placeholder="name*"/>
                                            </div>
                                            <div className="single">
                                                <input type="text" placeholder="Email*"/>
                                            </div>
                                        </div>
                                        <textarea name="message" placeholder="Write Message Here"></textarea>
                                        <button className="rts-btn btn-primary mt--20">Submit Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 pl--60 order-lg-2 order-md-1 order-sm-1 order-1 pl_md--10 pl_sm--10 rts-sticky-column-item">
                    <div className="blog-sidebar-single-wized">
                        <form action="#">
                            <input type="text" placeholder="Search Here" required/>
                            <button><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                    <div className="blog-sidebar-single-wized with-title">
                        <h4 className="title">Categories</h4>
                        <div className="category-main-wrapper">
                            <div className="single-category-area">
                                <p>Baking Material</p>
                            </div>
                          
                            <div className="single-category-area">
                                <p>Bread and Juice</p>
                            </div>
                          
                            <div className="single-category-area">
                                <p>Clothing & Beauty</p>
                            </div>
                          
                            <div className="single-category-area">
                                <p>Fresh Vegetable</p>
                            </div>
                           
                            <div className="single-category-area">
                                <p>Fresh Seafood</p>
                            </div>
                         
                            <div className="single-category-area">
                                <p>Milks and Daires</p>
                            </div>
                           
                            <div className="single-category-area">
                                <p>Wine & Drinks</p>
                            </div>
                          
                        </div>
                    </div>
                    <div className="blog-sidebar-single-wized with-title">
                        <h4 className="title">Latest Post</h4>
                        <div className="latest-post-small-area-wrapper">
                         
                            <div className="single-latest-post-area">
                                <a href="#" className="thumbnail">
                                    <img src="images/blog/thumb/01.jpg" alt="thumbnail"/>
                                </a>
                                <div className="inner-content-area">
                                    <div className="icon-top-area">
                                        <i className="fa-regular fa-clock"></i>
                                        <span>Sep 25, 2024</span>
                                    </div>
                                    <a href="#">
                                        <h5 className="title-sm-blog">
                                            Crowd-Pleasing Meals Made with Our Grocery Staples
                                        </h5>
                                    </a>
                                </div>
                            </div>
                            
                            <div className="single-latest-post-area">
                                <a href="#" className="thumbnail">
                                    <img src="images/blog/thumb/02.jpg" alt="thumbnail"/>
                                </a>
                                <div className="inner-content-area">
                                    <div className="icon-top-area">
                                        <i className="fa-regular fa-clock"></i>
                                        <span>Sep 25, 2024</span>
                                    </div>
                                    <a href="#">
                                        <h5 className="title-sm-blog">
                                            Reducing Your Carbon Footprint with Our Sustainable Products
                                        </h5>
                                    </a>
                                </div>
                            </div>
                           
                            <div className="single-latest-post-area">
                                <a href="#" className="thumbnail">
                                    <img src="images/blog/thumb/03.jpg" alt="thumbnail"/>
                                </a>
                                <div className="inner-content-area">
                                    <div className="icon-top-area">
                                        <i className="fa-regular fa-clock"></i>
                                        <span>Sep 25, 2024</span>
                                    </div>
                                    <a href="#">
                                        <h5 className="title-sm-blog">
                                            Discovering New Flavors in Our Ethnic Foods Aisle
                                        </h5>
                                    </a>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="blog-sidebar-single-wized with-title">
                        <h4 className="title">Tags</h4>
                        <div className="tags-area-blog-short-main">
                        
                            <button className="single-category">Shampoo</button>
                            
                            <button className="single-category">Butter</button>
                           
                            <button className="single-category">Birthday</button>
                           
                            <button className="single-category">Gifts</button>
                          
                            <button className="single-category">Facial</button>
                          
                            <button className="single-category">Green</button>
                          
                            <button className="single-category">Lotion</button>
                            
                            <button className="single-category">Scrub</button>
                           
                        </div>
                    </div>
                    <div className="blog-sidebar-single-wized with-title">
                        <h4 className="title">Instagram Posts</h4>
                        <div className="instagram-post-main-wrapper">
                          
                            <a href="#"><div className="single-instagram-post">
                                <img src="images/blog/thumb/04.jpg" alt="post"/>
                            </div></a>
                            
                            <a href="#"><div className="single-instagram-post">
                                <img src="images/blog/thumb/05.jpg" alt="post"/>
                            </div></a>
                           
                            <a href="#"><div className="single-instagram-post">
                                <img src="images/blog/thumb/06.jpg" alt="post"/>
                            </div></a>
                            
                            <a href="#"><div className="single-instagram-post">
                                <img src="images/blog/thumb/07.jpg" alt="post"/>
                            </div></a>
                           
                            <a href="#"><div className="single-instagram-post">
                                <img src="images/blog/thumb/08.jpg" alt="post"/>
                            </div></a>
                            
                            <a href="#"><div className="single-instagram-post">
                                <img src="images/blog/thumb/09.jpg" alt="post"/>
                            </div></a>
                           
                            <a href="#"><div className="single-instagram-post">
                                <img src="images/blog/thumb/10.jpg" alt="post"/>
                            </div></a>
                           
                            <a href="#"><div className="single-instagram-post">
                                <img src="images/blog/thumb/11.jpg" alt="post"/>
                            </div></a>
                          
                        </div>
                    </div>
                    <div className="blog-sidebar-single-wized with-add bg_image">
                        <div className="add-are-content">
                            <span className="pre">Weekend Discount</span>
                            <h5 className="title">
                                Discover Real organic <br/>
                                <span>Flavors Vegetable</span>
                            </h5>
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
    </div>
   <ServiceArea></ServiceArea>
   <Footer></Footer>
    </>
  );
};

export default BlogDetailed;
