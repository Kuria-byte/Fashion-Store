import React from 'react'
import { connect } from 'react-redux'
//utils
import { addCartItems, clearCartItem, removeItem } from '../../Redux/Cart/cart.actions'


const CheckOutItem = ({ cartItem, addItem, removeItem, clearCartItem }) => {
    return (

        <tr>
            <td className="product-col">
                <div className="product">
                    <figure className="product-media">
                        <a href="/">
                            <img src={cartItem.imageUrl} alt="Product " />
                        </a>
                    </figure>

                    <h3 className="product-title">
                        <span>{cartItem.name}</span>
                    </h3>
                </div>
            </td>
            <td className="price-col">${cartItem.price}.00</td>
            <td className="quantity-col">
                <div className="cart-product-quantity">
                    <span className='arrow' onClick={() => { removeItem(cartItem) }} > &#10094; </span>
                    <span className='value'> {cartItem.quantity} </span>
                    <span className='arrow' onClick={() => { addItem(cartItem) }} > &#10095; </span>
                </div>
            </td>
            <td className="total-col">${cartItem.price * cartItem.quantity}.00</td>
            <td className="remove-col"><button className="btn-remove" onClick={() => { clearCartItem(cartItem) }}><i className="icon-close"></i></button></td>
        </tr>

    )
}

const mapDispatchToProps = (dispatch) => ({
    clearCartItem: item => dispatch(clearCartItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addCartItems(item))

});

export default connect(null, mapDispatchToProps)(CheckOutItem)