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
    readonly character?: ICharacter,
    readonly characters: ICharacter[],
    readonly isFetching: Boolean,
  }

const initialCharacterState: ICharacterState = {
  character: undefined,
  characters: [{
    name: "Luke Skywalker", 
    height: "172", 
    mass: "77", 
    hair_color: "blond", 
    skin_color: "fair", 
    eye_color: "blue", 
    birth_year: "19BBY", 
    gender: "male", 
    homeworld: "http://swapi.dev/api/planets/1/", 
    films: [
        "http://swapi.dev/api/films/1/", 
        "http://swapi.dev/api/films/2/", 
        "http://swapi.dev/api/films/3/", 
        "http://swapi.dev/api/films/6/"
    ], 
    species: [], 
    vehicles: [
        "http://swapi.dev/api/vehicles/14/", 
        "http://swapi.dev/api/vehicles/30/"
    ], 
    starships: [
        "http://swapi.dev/api/starships/12/", 
        "http://swapi.dev/api/starships/22/"
    ], 
    created: "2014-12-09T13:50:51.644000Z", 
    edited: "2014-12-20T21:17:56.891000Z", 
    url: "http://swapi.dev/api/people/1/"
  }],
  isFetching: false,
};

const CharacterReducer: Reducer<ICharacterState> =(
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
