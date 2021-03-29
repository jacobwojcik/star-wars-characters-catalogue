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

    const isFetched = useSelector((state:any) => state.moviesState.isFetching);
    const [active, setActive] = useState("");
    const [contentHeight, setHeight] = useState("0px");
    const moviesList = useSelector((state:any) => state.moviesState.movies);

    const expandInfo = (event:MouseEvent) =>{
        event.preventDefault();
        setActive(active === "" ? "active" : "");
        setHeight(active === "active" ? "0px" : `500px`)
    }
    

    return (
        <div onClick={expandInfo}>
            <h3>{name}</h3>  
            <p>Gender: {gender}</p>  
            <p>Birth year: {birth_year}</p>   
                <div className={`extended-content${active}`} style={{maxHeight:`${contentHeight}`}}>
                    <p>Mass: {mass} kg</p>
                    <p>Height: {height} cm</p>
                    <p>Movies:</p>
                    { !isFetched ?
                        
                        movies.map((movie:string)=>
                        <p key = {movie}>{moviesList[(parseInt(movie.charAt(movie.length-2))-1)].title}</p>
                        )
                        :
                        null
                    }
                </div>
        
        </div>
    )
}

export default ItemList
