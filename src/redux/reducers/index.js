import CharacterReducer from './CharacterReducer'
import MoviesReducer from './MoviesReducer'
import {combineReducers} from 'redux'

export default combineReducers({
    charactersState:CharacterReducer,
    moviesState:MoviesReducer
  })
