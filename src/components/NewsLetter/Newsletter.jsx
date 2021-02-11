import React from 'react'
//component
import BrandsBanner from './BrandsBanner'
//images
import banner from '../../assets/images/demos/demo-6/banners/sweater.jpg'


const Newsletter = () => {
    return (

        <div className="pb-3">
            <BrandsBanner />
            <div className="mb-5 mb-lg-7"></div>

            <div className="container newsletter">
                <div className="row">
                    <div className="col-lg-6 banner-overlay-div">
                        <div className="banner banner-overlay">
                            <a href="/">
                                <img src={banner} alt="Banner" />
                            </a>

                            <div className="banner-content banner-content-center">
                                <h4 className="banner-subtitle text-white"><a href="/">Limited time only.</a></h4>
                                <h3 className="banner-title text-white"><a href="/">End of Season<br />save 50% off</a></h3>
                                <a href="/" className="btn btn-outline-white banner-link underline">Shop Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 d-flex align-items-stretch subscribe-div">
                        <div className="cta cta-box">
                            <div className="cta-content">
                                <h3 className="cta-title">Subscribe To Our Newsletter</h3>
                                <p>Sign up now for <span className="primary-color">10% discount</span> on first order. Customise my news:</p>

                                <form action="#">
                                    <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                    <div className="text-center">
                                        <button className="btn btn-outline-dark-2" type="submit"><span>subscribe</span><i /></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Newsletter
