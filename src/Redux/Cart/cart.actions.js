// Passing the payload is optional
export const toggleCartHidden = () => ({
    type: 'TOGGLE_CART_HIDDEN'
});

export const addCartItems = (item) => ({
    type: 'ADD_CART_ITEM',
    payload: item
});

// Clear out cart item - regardless of quantity
export const clearCartItem = (item) => ({
    type: 'CLEAR_CART_ITEM',
    payload: item
});

// 
export const removeItem = (item) => ({
    type: 'REMOVE_ITEM',
    payload: item
});

export const removeAllItems = () => ({
    type: 'REMOVE_ALL_ITEMS',
    
});



