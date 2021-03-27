import axios from 'axios'
const api_url = "https://swapi.dev/api/people"

export const getCharacterList = () => async (dispatch: any) => {
        console.log("wqdqwd");
        try{

            const res  = await axios.get(api_url);

            dispatch({
                type:"GET_CHARACTERS_SUCCESS",
                characters:res.data.results,
                isFetching: true,
                });
        }catch(e){
            console.log(e);
        }
}

