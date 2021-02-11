import { addItemToWishList } from './wish.utils'

const INITIAL_STATE = {
    wishItems: []
}

const wishReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case 'ADD_WISH_ITEM':
            return {
                ...state,
                wishItems: addItemToWishList(state.wishItems, action.payload)
            }

        default:
            return state;
    }

}

export default wishReducer;