import { combineReducers } from "redux";
import userReducer from "./userReducer"

const rootReducer = combineReducers({
    users: userReducer,
    // task:taskReduser
})

export default rootReducer;