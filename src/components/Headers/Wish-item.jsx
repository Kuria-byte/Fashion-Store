import React from 'react'

const WishItem = ({item}) => {
    return (
        <li class="compare-product">
        <a href="/" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
        <h4 class="compare-product-title"><a href="/shop">{item.name}</a> </h4>
    </li>
    )
}
export default WishItem
