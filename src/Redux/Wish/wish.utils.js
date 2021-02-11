export const addItemToWishList = (wishItems, ItemToAdd) => {
    const existingWishItem = wishItems.find(
        wishItem => wishItem.id === ItemToAdd.id
    );

    if (existingWishItem) {
        return wishItems.map((wishItem) => wishItem.id === ItemToAdd.id ? {
            ...wishItem, quantity: wishItem.quantity + 1
        } : wishItem)
    }

    return [...wishItems, { ...ItemToAdd, quantity: 1 }]
};