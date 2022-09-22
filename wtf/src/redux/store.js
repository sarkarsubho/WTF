import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { appReduser } from "./app/reduser";
import thunk from "redux-thunk";

const rootReduser = combineReducers({
  app: appReduser,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReduser,
  composeEnhancers(applyMiddleware(thunk))
);
