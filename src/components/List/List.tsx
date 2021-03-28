import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCharacterList,getMoreCharacters} from '../../redux/actions/characterDispatch'
import ItemList from '../ItemList/ItemList'
import {ICharacter} from '../../redux/reducers/CharacterReducer'

import './list.css'

export const List: React.FunctionComponent = () => {

    const dispatch = useDispatch();
    const characters = useSelector((state:any) => state.characters);
    const isFetched = useSelector((state:any) => state.isFetching);
    const [pageNumber, setStates] = useState({page:2, counter:1});

    interface IPageNumber {
        page :number,
        counter: number,
      };


    useEffect(() => {
        dispatch(getCharacterList());
        console.log("Succesfully get characters");
      }, [getCharacterList]);
    
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

    return (
        <div className="list">
            <ul>
                {
                characters.map((character:ICharacter) =>
                    <li key={character.name}>
                        <ItemList name = {character.name} 
                        gender={character.gender} 
                        birth_year={character.birth_year}
                        mass={character.mass}
                        height={character.height} />
                        
                    </li>

                    )
                }   
            </ul>
            <button className="more-button" onClick={() => loadMore(pageNumber)}>Load more</button>
        </div>
    )
}