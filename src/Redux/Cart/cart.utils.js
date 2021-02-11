export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === cartItemToAdd.id ? {
            ...cartItem, quantity: cartItem.quantity + 1
        } : cartItem)
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    // If the existing cart item quantity == 1 , remove it by returning new array.
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)

    }
   // Else reduce the quantiy
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
};



