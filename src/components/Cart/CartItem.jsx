import React from 'react'
import { connect } from 'react-redux'
//utils
import { clearCartItem } from '../../Redux/Cart/cart.actions'

const CartItem = ({ item,removeItem}) => {

    const { name, price, imageUrl, quantity } =item;

    return (
        <div>
            <div className="product">
                <div className="product-cart-details">
                    <h4 className="product-title">
                        <a href="product.html">{name}</a>
                    </h4>

                    <span className="cart-product-info">
                        <span className="cart-product-qty">{quantity}</span>
                        x  ${price}
                    </span>
                </div>

                <figure className="product-image-container">
                    <a href="product.html" className="product-image">
                        <img src={imageUrl} alt="product" />
                    </a>
                </figure>
                <span className="btn-remove" title="Remove Product" onClick={() => { removeItem(item) }}><i className="icon-close"></i></span>
            </div>


        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    removeItem: item => dispatch(clearCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem)
