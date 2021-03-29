import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCharacterList,getMoreCharacters} from '../../redux/actions/characterDispatch'
import {getMoviesList} from '../../redux/actions/moviesDispatch'
import ItemList from '../ItemList/ItemList'
import {ICharacter} from '../../redux/reducers/CharacterReducer'

import './list.css'

type ListProps = {
    searchedCharacter:string,
}

export const List: React.FunctionComponent<ListProps> = ({searchedCharacter}) => {

    const dispatch = useDispatch();
    const characters = useSelector((state:any) => state.charactersState.characters);
    const isFetched = useSelector((state:any) => state.charactersState.isFetching);
    
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

    const filteredCharacters = characters.filter((character:any) => {
        return (
          character.name
            .toLowerCase()
            .trim()
            .indexOf(searchedCharacter.toLowerCase().trim()) !== -1
        );
      });
    

    return (
        <div className="list">
            
            <ul>

                {
                    !isFetched ?
                    
                    
                        filteredCharacters.map((character:ICharacter) =>
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
            {filteredCharacters.length === 0 && !isFetched ? (
        <div
          style={{ textAlign: "center", padding: "5em", marginBottom: "10em" }}
        >
          <h1>Search for someone else!</h1>
        </div>
      ) : null}
            <button className="more-button" onClick={() => loadMore(pageNumber)}>Load more</button>
            

        </div>
    )
}