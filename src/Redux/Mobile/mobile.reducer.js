const INITIAL_STATE ={
    hidden : true
};

export const mobileReducer =( state=INITIAL_STATE , action) =>{
switch (action.type){
    case 'TOGGLE_MOBILE_MENU' :
        return{
            ...state,
            hidden: !state.hidden
        };
        default:
            return state;
}

}

export default mobileReducer