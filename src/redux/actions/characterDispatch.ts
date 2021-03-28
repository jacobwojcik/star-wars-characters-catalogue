import axios from 'axios'
const api_url = "https://swapi.dev/api/people"

export const getCharacterList = () => async (dispatch: any) => {
        try{

            const res  = await axios.get(api_url);

            dispatch({
                type:"GET_CHARACTERS_SUCCESS",
                characters:res.data.results,
                isFetching: false,
                });
        }catch(e){
            console.log(e);
        }
}

export const getMoreCharacters = (page_number:number, counter:number) => async (dispatch: any) => {
    try{

        const res  = await axios.get(api_url+`?page=${page_number}`);
        let a,b;
        if(counter % 2 === 1){
            a = 0;
            b = 5;
        }
        else{
            a = 5;
            b = 10;
        }
        dispatch({
            type:"LOAD_MORE_CHARACTERS_SUCCESS",
            characters:res.data.results.slice(a,b),//6,10
            isFetching: false,
            });
    }catch(e){
        console.log(e);
    }
}
