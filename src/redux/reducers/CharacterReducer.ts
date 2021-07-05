import { Reducer } from "redux";
import { ICharacterState } from "../../interfaces/interfaces";

const initialCharacterState: ICharacterState = {
  characters: [],
  isFetching: true,
  isFetchingMore: false,
};

const CharacterReducer: Reducer<ICharacterState> = (
  state = initialCharacterState,
  action
) => {
  switch (action.type) {
    case "GET_CHARACTERS_SUCCESS": {
      return {
        ...state,
        characters: action.characters,
        isFetching: action.isFetching,
      };
    }
    case "LOADING_MORE_CHARACTERS": {
      return {
        ...state,
        isFetchingMore: action.isFetching,
      };
    }
    case "LOAD_MORE_CHARACTERS_SUCCESS": {
      let temp_array = [...state.characters];
      temp_array.push(...action.characters);
      return {
        ...state,
        characters: temp_array,
        isFetchingMore: action.isFetching,
      };
    }
    case "GET_CHARACTERS_FAILURE": {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    default:
      return state;
  }
};

export default CharacterReducer;
