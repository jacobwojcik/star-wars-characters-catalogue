import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCharacterList,getMoreCharacters,loadingMoreCharacters} from '../../redux/actions/characterDispatch'
import {getMoviesList} from '../../redux/actions/moviesDispatch'
import ItemList from '../ItemList/ItemList'
import {ICharacter} from '../../redux/reducers/CharacterReducer'

import './list.css'

export const List: React.FunctionComponent = () => {

    const dispatch = useDispatch();
    const characters = useSelector((state:any) => state.charactersState.characters);
    const isFetched = useSelector((state:any) => state.charactersState.isFetching);
    let isFetchingMore = useSelector((state:any) => state.charactersState.isFetchingMore);
    const [pageNumber, setStates] = useState({page:2, counter:1});

    interface IPageNumber {
        page :number,
        counter: number,
      };


    useEffect(() => {
        
        dispatch(getMoviesList());
        dispatch(getCharacterList());
        console.log("Succesfully get characters");
      }, [dispatch]);


    const loadMore:any = (page_number:IPageNumber) =>{
        dispatch(loadingMoreCharacters());
        
        dispatch(getMoreCharacters(page_number.page, page_number.counter));
        console.log(`Load 5 more page ${page_number}`);

        if(page_number.counter % 2 === 1){
            setStates(prevState =>{
                return{
                     ...prevState,
                     page : prevState.page +1
                }
             });
        }
        setStates(prevState =>{
            return{
                 ...prevState,
                 counter : prevState.counter +1
            }
         });
    }

    

    return (
        <div className="list">
            
            <ul>

                {
                    !isFetched ?
                    
                    
                        characters.map((character:ICharacter) =>
                            <li key={character.name} 
                            >
                                <ItemList name = {character.name} 
                                gender={character.gender} 
                                birth_year={character.birth_year}
                                mass={character.mass}
                                height={character.height} 
                                movies={character.films}
                               
                                />
                                
                            </li>
        
                            )

                    :
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                }
                
            </ul>
            {
                isFetchingMore ?
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                :
                null
            }
            <button className="more-button" onClick={() => loadMore(pageNumber)}>Load more</button>
            

        </div>
    )
}