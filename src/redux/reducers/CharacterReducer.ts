interface CharactersState {
    data:string[]
}


const initialState = {
    loading: false,
    data:[],
    error_message:"",
};
  
  const characterReducer = (state:CharactersState = initialState, action:any) => {
    switch (action.type) {
        case "CHARACTERS_LIST_LOADING":
            return{
                ...state,
                loading:true,
                error_message:"",
            };
        
        case "CHARACTERS_LIST_FAIL":
            return{
                ...state,
                loading:false,
                error_message:"Something went wrong",
                
            };

        case "CHARACTERS_LIST_SUCCESS":
            return{
                ...state,
                loading:false,
                data: action.payload,
                error_message:"",
            };

        default:
            return state;
    }
  };
  export default characterReducer;