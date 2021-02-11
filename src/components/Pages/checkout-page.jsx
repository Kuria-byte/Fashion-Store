import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
//componets
import Footer from '../../components/Footer/Footer'
import CheckOutItem from '../CheckOut/checkout-item'
import CartSummary from '../Cart/CartSummary'
// utils
import { selectCartItems, selectCartTotal} from '../../Redux/Cart/cart.selector'
//images
import imageBackground from '../../assets/images/page-header-bg.jpg'





const checkoutPage = ({ cartItems, total, freeShipping,standardfee,expressFee }) => {
    return (
        <div>

            <main className="main">
                <div className="page-header text-center" style={{ backgroundImage: `url(${imageBackground})` }} >
                    <div className="container">
                        <h1 className="page-title">Checkout Page<span>Cart</span></h1>
                    </div>
                </div>
                <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="/">Shop</a></li>
                            <li className="breadcrumb-item active" ariaCurrent="page">Shopping Cart</li>
                        </ol>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="cart">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9">
                                    <table className="table table-cart table-mobile">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {cartItems.map(cartItem => (
                                                <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                                            ))}

                                        </tbody>
                                    </table>

                                    <div className="cart-bottom">
                                        <div className="cart-discount">
                                            <form action="#">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" required placeholder="coupon code" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-outline-primary-2" type="submit"><i className="icon-long-arrow-right"></i></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <a href="/" className="btn btn-outline-dark-2"><span>UPDATE CART</span><i className="icon-refresh"></i></a>
                                    </div>
                                </div>
                                {/* <CartSummary total={total} cartItem={cartItems.map((cartItem , index) => { return(cartItem)} )} /> */}
                                <CartSummary total={total} cartItems={cartItems} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
 
});

export default connect(mapStateToProps)(checkoutPage);