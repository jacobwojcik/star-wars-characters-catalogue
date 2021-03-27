import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCharacterList} from '../../redux/actions/characterDispatch'
import ItemList from '../ItemList/ItemList'

import './list.css'

export const List: React.FunctionComponent = () => {

    const dispatch = useDispatch();
    const state = useSelector((state:any) => state.characters)

    useEffect(() => {
        dispatch(getCharacterList());
        console.log("test");
      }, [getCharacterList]);
    
    const get_load:any = () =>{
        dispatch(getCharacterList());
        console.log("DISPATCH");
    }

    return (
        <div className="list">
            <ul>
                {
                state.map((character:any) =>
                    <li key={character.name}>
                        <ItemList name = {character.name} 
                        gender={character.name} 
                        birth_year={character.name}
                        mass={character.name}
                        height={character.name} />
                        
                    </li>

                    )
                }   
            </ul>
            <button onClick={get_load}>Load more</button>
        </div>
    )
}


// const mapStateToProps = (store: any) => {
//     return {
//       characters: store.characterState.characters,
//     };
//   };

//   export default connect(mapStateToProps)(List);
