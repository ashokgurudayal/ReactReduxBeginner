const loggedInReducer = (state = false,action) => {
    switch(action.type){
        case "LOGGEDIN" : return true;
        default: return state;
    }
}

export default loggedInReducer;