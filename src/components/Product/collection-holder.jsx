import React from 'react'
import ShopProduct from './shop-product'


const CollectionHolder = ({ id, title, items, stateTitle }) => {
    return (

        items.filter((item, index) => title === stateTitle).map((item) => (
            <ShopProduct key={item.id} item={item} title={stateTitle}/>
        ))
    )
}

export default CollectionHolder;
