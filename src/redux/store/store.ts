import { createStore } from "redux";
import characterReducer from "../reducers/CharacterReducer";

const store = createStore(characterReducer);

export default store;