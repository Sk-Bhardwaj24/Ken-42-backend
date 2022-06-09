import { createStore, combineReducers } from "redux";
import { IsAuthReducer } from "./isAuth/reducer";

// const rootReducer = combineReducers({
//   IsAuth: IsAuthReducer,
//
// });

export const store = createStore(
  IsAuthReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
