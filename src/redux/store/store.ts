import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CharacterReducer from "../reducers/CharacterReducer";
import thunk from 'redux-thunk'

const store = createStore(CharacterReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;