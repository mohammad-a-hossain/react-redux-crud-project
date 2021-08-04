import { createStore } from "redux";
import rootReducer from "../redux";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;






// import { combineReducers } from "redux";
// import { userReducer } from "./reducer";

// export default combineReducers({
//   users: userReducer,
// });

// import { combineReducers, createStore } from "redux"
// import { useReducer } from "react"
// import rootReducer from './reducer'
   
// export default combineReducers({
//   users:rootReducer
// })
// const store = createStore(useReducer,)
// export default store