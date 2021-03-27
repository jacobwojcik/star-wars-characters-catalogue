import React from 'react'
import ItemList from '../ItemList/ItemList'
import './list.css'

export const List:React.FC = () => {
    const list_of_chatracters = [
        {
            name: "Luke Skywalker", 
            height: "172", 
            mass: "77", 
            hair_color: "blond", 
            skin_color: "fair", 
            eye_color: "blue", 
            birth_year: "19BBY", 
            gender: "male", 
            homeworld: "http://swapi.dev/api/planets/1/", 
        }, 
        {
            name: "C-3PO", 
            height: "167", 
            mass: "75", 
            hair_color: "n/a", 
            skin_color: "gold", 
            eye_color: "yellow", 
            birth_year: "112BBY", 
            gender: "n/a", 
            homeworld: "http://swapi.dev/api/planets/1/", 
            
        }, 
        
          
    ] 
    return (
        <div className="list">
            <ul>
                {
                    list_of_chatracters.map(({name,gender,birth_year,mass,height}) =>
                    <li key={name}>
                        <ItemList name = {name} 
                        gender={gender} 
                        birth_year={birth_year}
                        mass={mass}
                        height={height} />
                        
                    </li>
                    )
                }   
            </ul>
            <button>Load more</button>
        </div>
    )
}


