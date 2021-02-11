import React from 'react'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectWishItems } from "../../Redux/Wish/wish.selector";

import WishItem from './Wish-item';

const WishList = ({ wishItems }) => {
    return (
        <div className="dropdown cart-dropdown">


            <a href="/" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Compare Products" aria-label="Compare Products">
                <i class="icon-heart-o" style={{ fontSize: "0.75em" }}> </i>
                <span className="cart-count">{1}</span>
                <span className='wishlist-txt'>My Wishlist</span>
            </a>

            <div class="dropdown-menu dropdown-menu-right">
                <ul class="compare-products">

                    {wishItems === undefined ? '' : wishItems.map((item) => (
                        <WishItem key={item.id} item={item} />
                    ))}



                </ul>

                <div class="compare-actions">
                    <a href="/" class="action-link">Clear All</a>
                    <a href="/" class="btn btn-outline-primary-2"><span>Add to Cart</span><i class="icon-long-arrow-right"></i></a>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    wishItems: selectWishItems,

});

export default connect(mapStateToProps)(WishList)
