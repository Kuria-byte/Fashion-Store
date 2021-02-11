import React from 'react'
import OwlCarousel from 'react-owl-carousel';
// Product Images
// import product3 from '../../assets/images/demos/demo-6/products/product-3-1.jpg'
import ShopItem from './shop-item';

const owl_options = {
    items: 1,
    dots: true,
    margin: 20,
    nav: true,
    responsive: {
        0: {
            items: 2,
        },
        480: {
            items: 2,
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 4,
            nav: true,
            dots: false
        }

    }
};

const ShopPreview = ({ id, title, items }) => {
    return (

        <div className="tab-pane p-0 fade" id={`trending-${title}-tab`}role="tabpanel" aria-labelledby={`trending-${title}-link`}>
            <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl">

            <OwlCarousel {...owl_options}>

                    {items.filter((item, index) => index < 10).map((item) => (
                        
                        <ShopItem key={item.id} item={item} />
                       
                    ))}
                    </OwlCarousel>
            </div>

        </div>


    )
}

export default ShopPreview
