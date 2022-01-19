const initialState = {
    user: 'someone'
};

const MainReducer = (state=initialState, action)=>{
    switch(action.type){
        case "updateName":
            return {...state, user: action.payload.name}
        default:
            return state;
    }
};

export default MainReducer;