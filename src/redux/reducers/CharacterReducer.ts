import { Reducer } from 'redux';

export interface ICharacter {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
  }

interface ICharacterState {
    characters: ICharacter[],
    isFetching: Boolean,
  }

const initialCharacterState: ICharacterState = {

  characters:[],
  isFetching: true,
};

const CharacterReducer: Reducer<ICharacterState> =(
  state = initialCharacterState,
  action
) => {
  switch (action.type) {
    
    case "GET_CHARACTERS_SUCCESS": {
      return {
        characters: action.characters,
        isFetching: action.isFetching,
      };
    }
    case "LOAD_MORE_CHARACTERS_SUCCESS":{
      let temp_array = [...state.characters];
      temp_array.push(...action.characters);
      return {
        characters: temp_array,
        isFetching: action.isFetching,
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