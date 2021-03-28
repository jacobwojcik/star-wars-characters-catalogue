import { Reducer } from 'redux';

export interface IMovie {
    title:string,
    episode_id:number,
    opening_crawl:string,
    director:string,
    producer:string,
    release_date:string,
    characters:string[],
    planets:string[],
    starships:string[]
    vehicles:string[],
    species:string[],
    created:string,
    editied:string,
    url:string,
  }

interface IMoviesState {
    movies: IMovie[],
    isFetching: Boolean,
  }

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
