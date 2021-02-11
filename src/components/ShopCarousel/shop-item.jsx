import React from 'react'
import { connect } from 'react-redux';
import Toastify from 'toastify-js'

//utils
import { addCartItems } from '../../Redux/Cart/cart.actions'
import { addWishItem } from '../../Redux/Wish/wish.actions'

const ShopItem = ({ item, addCartItems , addWishItem}) => {

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

    <div className='product product-7 text-center'>
      <figure className='product-media'>
        <img src={imageUrl} alt='Product' className='product-image' />
        {/* <img src={imageUrl} alt='Product' className='product-image-hover' /> */}
        <div className='product-action-vertical'>
          <span className='btn-product-icon btn-wishlist btn-expandable' onClick={ ()=> wishAdd()}><span>add to wishlist</span></span>
        </div>
        <div className='product-action'>
          <span className='btn-product btn-cart' onClick={() => cartAdd()}><span>add to cart</span></span>
        </div>
      </figure>
      <div className='product-body'>
        <div className='product-cat'>
          <span>Clothing</span>
        </div>
        <h3 className='product-title'><span>{name}</span></h3>
        <div className='product-price'>
          ${price}
        </div>
      </div>
    </div>


  )
}

const mapDispatchToProps = (dispatch) => ({
  addCartItems: item => dispatch(addCartItems(item)),
  addWishItem: item => dispatch(addWishItem(item))
})

export default connect(null, mapDispatchToProps)(ShopItem)
