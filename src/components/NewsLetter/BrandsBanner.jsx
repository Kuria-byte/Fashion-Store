import React from 'react'
//Library
import OwlCarousel from 'react-owl-carousel'
//Images
import product1 from '../../assets/images/brands/1.png'
import product2 from '../../assets/images/brands/2.png'
import product3 from '../../assets/images/brands/3.png'
import product4 from '../../assets/images/brands/4.png'
import product5 from '../../assets/images/brands/5.png'
import product6 from '../../assets/images/brands/6.png'
import product7 from '../../assets/images/brands/7.png'



const owl_options = {
    nav: false,
    dots: false,
    margin: 30,
    items: 6,
    loop: true,
    rewind: true,
    responsive: {
        0: {
            items: 2
        },
        420: {
            items: 3
        },
        600: {
            items: 4
        },
        900: {
            items: 5
        },
        1024: {
            item: 6
        }
    }
}

function BrandsBanner() {
    return (
       
            <div className="container brands pt-5 pt-lg-7 ">

                <h2 className="title text-center mb-4">shop by brands</h2>

                <div className="owl-carousel owl-simple" data-toggle="owl">
                    <OwlCarousel {...owl_options}>
                        <a href="/" className="brand">
                            <img src={product1} alt="Brand Name" />
                        </a>

                        <a href="/" className="brand">
                            <img src={product2} alt="Brand Name" />
                        </a>

                        <a href="/" className="brand">
                            <img src={product3} alt="Brand Name" />
                        </a>

                        <a href="/" className="brand">
                            <img src={product4} alt="Brand Name" />
                        </a>

                        <a href="/" className="brand">
                            <img src={product5} alt="Brand Name" />
                        </a>

                        <a href="/" className="brand">
                            <img src={product6} alt="Brand Name" />
                        </a>

                        <a href="/" className="brand">
                            <img src={product7} alt="Brand Name" />
                        </a>
                    </OwlCarousel>
                </div>
            </div>


        
    )
}

export default BrandsBanner
