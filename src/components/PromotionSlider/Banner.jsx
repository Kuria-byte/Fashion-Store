import React from 'react'


const Banner = () => {
    return (
        <div>
            <div   className="pt-4 pb-3" style={{ backgroundColor: ' #222' }}>
                <div   className="container">
                    <div   className="row justify-content-center">
                        <div   className="col-lg-3 col-sm-6">
                            <div   className="icon-box text-center">
                                <span   className="icon-box-icon">
                                    <i   className="icon-truck"></i>
                                </span>
                                <div   className="icon-box-content">
                                    <h3   className="icon-box-title">Payment & Delivery</h3>
                                    <p>Free shipping for orders over $50</p>
                                </div>
                            </div>
                        </div>

                        <div   className="col-lg-3 col-sm-6">
                            <div   className="icon-box text-center">
                                <span   className="icon-box-icon">
                                    <i   className="icon-rotate-left"></i>
                                </span>
                                <div   className="icon-box-content">
                                    <h3   className="icon-box-title">Return & Refund</h3>
                                    <p>Free 100% money back guarantee</p>
                                </div>
                            </div>
                        </div>

                        <div   className="col-lg-3 col-sm-6">
                            <div   className="icon-box text-center">
                                <span   className="icon-box-icon">
                                    <i   className="icon-unlock"></i>
                                </span>
                                <div   className="icon-box-content">
                                    <h3   className="icon-box-title">Secure Payment</h3>
                                    <p>100% secure payment</p>
                                </div>
                            </div>
                        </div>

                        <div   className="col-lg-3 col-sm-6">
                            <div   className="icon-box text-center">
                                <span   className="icon-box-icon">
                                    <i   className="icon-headphones"></i>
                                </span>
                                <div   className="icon-box-content">
                                    <h3   className="icon-box-title">Quality Support</h3>
                                    <p>Alway online feedback 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner
