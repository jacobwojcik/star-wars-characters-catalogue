import axios from 'axios'
const api_url = "https://swapi.dev/api/films/"

export const getMoviesList = () => async (dispatch: any) => {
        try{

            const res  = await axios.get(api_url);

            dispatch({
                type:"GET_MOVIES_SUCCESS",
                movies:res.data.results,
                isFetching: false,
                });
        }catch(e){
            console.log(e);
        }
}

