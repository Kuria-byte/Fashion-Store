import React from 'react'
//Libraray
import OwlCarousel from 'react-owl-carousel'
//images
import Slider1 from '../../assets/images/demos/demo-6/slider/slide5.jpg'
import Slider2 from '../../assets/images/demos/demo-6/slider/sweaterbg.jpg'
import Slider3 from '../../assets/images/demos/demo-6/slider/slide8.jpg'

const owl_options = {
    items: 1,
    nav: false,
    // navText:["<div className='nav-btn prev-slide'></div>","<div className='nav-btn next-slide'></div>"],
    rewind: true,
    autoplay: true,
    slideBy: 1,
    dots: true,
    dotsEach: true,
    dotData: true,
    responsive :{
        0: {
            nav: false
        },
        480: {
            nav: false
        },
        768: {
            nav: true
        },
        992:{
            nav: true, 
        },
    }
  };



function HomeSlider() {
    return (
        <div>
        <main className="main">
        <div className="intro-slider-container">
                <div className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light" data-toggle="owl">
                    <OwlCarousel {...owl_options} nav>
                    <div className="intro-slide" style={{ backgroundImage: `url(${Slider1})`}} >
                        <div className="container intro-content text-center">
                            <h3 className="intro-subtitle text-white">You're Looking Good</h3>
                              <h1 className="intro-title text-white">Tailored Look</h1>
                            <a href="/shop" className="btn btn-outline-white-4">
                                <span>Discover More</span>
                            </a>
                        </div>
                    </div>
                    <div className="intro-slide"  style={{ backgroundImage: `url(${Slider3})`,}} >
                        <div className="container intro-content text-center">
                            <h3 className="intro-subtitle text-white">Vibrant Colors</h3>
                            <h1 className="intro-title text-white"> Get Started </h1>
                            <a href="/shop" className="btn btn-outline-white-4" >
                                <span>Discover More</span>
                            </a>
                        </div>
                    </div>
            
                    <div className="intro-slide"  style={{ backgroundImage: `url(${Slider2})`,}} >
                        <div className="container intro-content text-center">
                            <h3 className="intro-subtitle text-white">Wardrobe Upgrade</h3>
                            <h1 className="intro-title text-white"> Fresh Style </h1>
                            <a href="/shop" className="btn btn-outline-white-4" >
                                <span>Discover More</span>
                            </a>
                        </div>
                    </div>
            
                 
                    </OwlCarousel>
                   

                </div>

            </div>

        </main>
            
        </div>
    )
}

export default HomeSlider
