import React from 'react'
import { connect } from 'react-redux';
import Toastify from 'toastify-js'

//utils
import { addCartItems } from '../../Redux/Cart/cart.actions'
import { addWishItem } from '../../Redux/Wish/wish.actions'


const ShopProduct = ({ item, title, addCartItems , addWishItem}) => {
    const { name, price, imageUrl } = item;
    async function cartAdd() {
        addCartItems(item);
        Toastify({
            text: `Added ${name} to cart`,
            duration: 5000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: 'center', // `left`, `center` or `right`
            backgroundColor: "linear-gradient(to right top, #cc9966, #c6946c, #bf9072, #b68c77, #ac897b)",
            stopOnFocus: true,
        }).showToast();
    }

    async function wishAdd() {
        addWishItem(item);
        Toastify({
          text: `Added ${name} to WishList`,
          duration: 5000, 
          newWindow: true,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: 'center', // `left`, `center` or `right`
          backgroundColor: "linear-gradient(to right top, #cc9966, #c6946c, #bf9072, #b68c77, #ac897b)",
          stopOnFocus: true, 
        }).showToast();
      }

    return (
        <div className="col-6 col-md-4 col-lg-4 col-xl-3">
            <div className="product">
                <figure className="product-media">
                    <span className="product-label label-new">New</span>
                    <span>
                        <img src={imageUrl} alt="Product " className="product-image" />
                    </span>

                    <div className="product-action-vertical">
                        <span className="btn-product-icon btn-wishlist btn-expandable"  onClick={ ()=> wishAdd()}><span>add to wishlist</span></span>
                    </div>

                    <div className="product-action action-icon-top">

                        <span className='btn-product btn-cart' onClick={() => cartAdd()} ><span>add to cart</span></span>
                    </div>
                </figure>

                <div className="product-body">
                    <div className="product-cat">
                        <span>{title}</span>
                    </div>
                    <h3 className="product-title"><a href="/">{name}</a></h3>
                    <div className="product-price">
                        {price}
                    </div>
                    <div className="ratings-container">
                        <div className="ratings">
                            <div className="ratings-val" style={{ width: '0%' }}></div>
                        </div>
                        <span className="ratings-text">( 2 Reviews )</span>
                    </div>

                    <div className="product-nav product-nav-dots">
                        <span style={{ background: ' #cc9966' }}><span className="sr-only">Color name</span></span>
                        <span className="active" style={{ background: '#ebebeb' }}><span className="sr-only">Color name</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addCartItems: item => dispatch(addCartItems(item)),
    addWishItem: item => dispatch(addWishItem(item))
})

export default connect(null, mapDispatchToProps)(ShopProduct)
