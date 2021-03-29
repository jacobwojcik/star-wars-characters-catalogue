import { Reducer } from 'redux';
import {IMoviesState} from '../../interfaces/interfaces'

const initialMoviesState: IMoviesState = {
  movies:[],
  isFetching: true,
};

const MoviesReducer: Reducer<IMoviesState> =(
  state = initialMoviesState,
  action
) => {
  switch (action.type) {
    
    case "GET_MOVIES_SUCCESS": {
      return {
        movies: action.movies,
        isFetching: action.isFetching,
      };
    }
    case "GET_MOVIES_FAILURE": {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    default:
      return state;
  }
};

export default MoviesReducer;
