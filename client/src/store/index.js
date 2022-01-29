import { configureStore, combineReducers } from "@reduxjs/toolkit";
import testSlice from "./testSlice";


const rootReducer = combineReducers({
   testReducer: testSlice
})

export const store = configureStore({
   reducer: rootReducer,
})




























// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";

// const initialState = {
//    test: 0
// }

// const reducer = (state = initialState, action) => {
//    switch (action.type) {
//       case "TEST":
//          return { ...state, test: action.payload }
//       default:
//          return state
//    }
// }

// const rootReducer = combineReducers({
//    reducer: reducer,
// })

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// export default store