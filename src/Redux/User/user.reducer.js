

const INITIAL_STATE = {
    currentUser: null,
    error: null
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'EMAIL_SIGNUP_SUCCESS':
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }

        case 'GOOGLE_SIGNIN_SUCCESS':
        case 'EMAIL_SIGNIN_SUCCESS':
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case 'EMAIL_SIGNUP_FAILURE':
        case 'GOOGLE_SIGNIN_FAILURE':
        case 'EMAIL_SIGNIN_FAILURE':
            return {
                ...state,
                error: action.payload
            }

        case 'LOG_OUT_USER':
            return {
                ...state,
                currentUser: null
            }

        default:
            return state;
    }

};

export default userReducer;