import React from 'react'

import { withRouter } from 'react-router-dom';


const CollectionPreview = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
       
            <div className="col-sm-6">
                <div className="banner banner-overlay">
                    <a href={linkUrl}>
                        <img src={imageUrl} alt="Banner" />
                    </a>

                    <div className="banner-content banner-content-center" >
                        <h4 className="banner-subtitle text-white"><a href="/">New in</a></h4>
                        <h3 className="banner-title text-white"><a href="/"><strong>{title.toUpperCase()}</strong></a></h3>
                        <a href="/shop" className="btn btn-outline-white banner-link underline" >Shop Now</a>
                       
                    </div>
                </div>
            </div>

    )
}

export default withRouter(CollectionPreview);
