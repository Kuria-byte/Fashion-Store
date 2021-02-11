import { createSelector } from 'reselect'


const shopSelector = state => state.shop


export const selectShopCollections = createSelector(
    [shopSelector],
    shop => shop.collections

)

export const selectCollectioinForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []

)

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => (collections ? collections[collectionUrlParam] : null)

)

export const selectIsCollectionFetching = createSelector(
    [shopSelector],
    shop => shop.isFetching
)

export const selectCollectionsLoaded = createSelector(
    [shopSelector],
    // !! this enables us to convert our shop object to boolean value
    shop => !!shop.collections
)