import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
//utils
import { selectCollectioinForPreview } from '../../Redux/Shop/shop.selector'
import ShopPreview from './shop-preview';

const ShopCarousel = ( {collections}) => {
    return (
        <div>
            <div className="mb-5"></div>
            <div className="container">
                <div className="heading heading-center mb-3">
                    <h2 className="title">Our Shop</h2>

                    <ul className="nav nav-pills justify-content-center" role="tablist">
                    <li className="nav-item">
                            <a className="nav-link active" id="trending-Mens-link" data-toggle="tab" href="#trending-Mens-tab" role="tab" aria-controls="trending-Mens-tab" aria-selected="True">Men</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="trending-Womens-link" data-toggle="tab" href="#trending-Womens-tab" role="tab" aria-controls="trending-Womens-tab" aria-selected="false">Women</a>
                        </li>
                     
                        <li className="nav-item">
                            <a className="nav-link" id="trending-Sneakers-link" data-toggle="tab" href="#trending-Sneakers-tab" role="tab" aria-controls="trending-Sneakers-tab" aria-selected="false">Shoes</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" id="trending-Hats-link" data-toggle="tab" href="#trending-Hats-tab" role="tab" aria-controls="trending-Hats-tab" aria-selected="false">Hats</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" id="trending-Jackets-link" data-toggle="tab" href="#trending-Jackets-tab" role="tab" aria-controls="trending-Jackets-tab" aria-selected="false">Jackets</a>
                        </li>
                    </ul>
                </div>

                <div className="tab-content tab-content-carousel">


                {collections.map(({ id, ...otherCollectionProps }) => (
                <ShopPreview key={id} {...otherCollectionProps} />
            ))}

                
                </div>

            </div>

</div>

    )
}

const mapStateToProps =createStructuredSelector ({
    collections : selectCollectioinForPreview
})

export default connect(mapStateToProps) (ShopCarousel)
