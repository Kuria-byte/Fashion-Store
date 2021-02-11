import { createSelector } from 'reselect'

// selector- returns a piece of state
const selectWish = (state) => state.wish


export const selectWishItems = createSelector(
  [selectWish],
  wish => wish.wishItems
)