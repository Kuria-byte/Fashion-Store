import { connect } from "react-redux";
import {toggleMobileMenu} from '../../Redux/Mobile/moile.actions'
import DarkModeToggle from '../Buttons/dark-mode'


const MobileMenu =({toggleMobileMenu}) => {
    return (
        <div>

            <div className="mobile-menu-overlay"></div>

            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                
            <DarkModeToggle/>
                    <span className="mobile-menu-close"><i className="icon-close" onClick={toggleMobileMenu} ></i></span>
        
                    <form action="#" method="get" className="mobile-search">
                        <label for="mobile-search" className="sr-only">Search</label>
                        <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
                        <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                    </form>

                    <nav className="mobile-nav">
                        <ul className="mobile-menu">
                            <li className="active">
                                <a href="/">Home</a>

                                <ul>
                                    {/* <li><a href="index-1.html">01 - furniture store</a></li> */}
                                    
                                </ul>
                            </li>
                            <li>
                                <a href="/shop">Shop</a>
                                <ul>
                                    <li><a href="/shop">Shop List</a></li>
                                    
                                </ul>
                            </li>
                            <li>
                                <a href="/shop" className="sf-with-ul">Product</a>
                                <ul>
                                    <li><a href="product.html">Default</a></li>
                                    
                                </ul>
                            </li>
                            <li>
                                <a href="/">Wish List</a>
                                <ul>
                                    <li>
                                        <a href="/">About</a>

                                        <ul>
                                            <li><a href="/">About 01</a></li>
                                            <li><a href="/">About 02</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/">Contact</a>

                                        <ul>
                                            <li><a href="/">Contact 01</a></li>
                                            <li><a href="/">Contact 02</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/">Login</a></li>
                                    <li><a href="/">FAQs</a></li>
                                    <li><a href="/">Error 404</a></li>
                                    <li><a href="/l">Coming Soon</a></li>
                                </ul>
                            </li>
                            
                         
                        </ul>
                    </nav>

                    <div className="social-icons">
                        <a href="/" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></a>
                        <a href="/" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></a>
                        <a href="/" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></a>
                        <a href="/" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>

    )
}


    
    const mapDispatchToProps = (dispatch) =>({
        toggleMobileMenu : ()=> dispatch(toggleMobileMenu())
    })

export default connect(null,mapDispatchToProps) (MobileMenu)
