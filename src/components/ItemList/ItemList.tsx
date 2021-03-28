import React,{MouseEvent, useState} from 'react'
import {useSelector} from 'react-redux'

//import {useSelector} from 'react-redux'
import "./itemlist.css"

type CharProps = {
    name:string,
    gender:string,
    birth_year:string,
    mass:string,
    height:string,
    movies:string[],
  }
const ItemList = ({name,gender,birth_year,mass,height,movies}:CharProps) => {
    
    const [isOpen, setState] = useState(false);
    const moviesList = useSelector((state:any) => state.moviesState.movies);

    const expandInfo = (event:MouseEvent) =>{
        event.preventDefault();
        setState(!isOpen)
    }

    return (
        <div onClick={expandInfo}className="item-div"> 
        <h3>{name}</h3>  
        <p>Gender: {gender}</p>  
        <p>Birth year: {birth_year}</p>  
        {isOpen ? 
            <div>
                <p>Mass: {mass}</p>
                <p>Height: {height}</p>
                {
                    movies.map((movie:string)=>
                    <p key = {movie}>{moviesList[(parseInt(movie.charAt(movie.length-2))-1)].title}</p>
                    )
                }
            </div>
            :
            null
        }

        
        </div>
    )
}

export default ItemList
