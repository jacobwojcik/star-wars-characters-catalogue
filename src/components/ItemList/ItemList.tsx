import React,{MouseEvent, useState} from 'react'

type CharProps = {
    name:string,
    gender:string,
    birth_year:string,
    mass:string,
    height:string,
  }
const ItemList = ({name,gender,birth_year,mass,height}:CharProps) => {
    
    const [isOpen, setState] = useState(false)
    const expandInfo = (event:MouseEvent) =>{
        event.preventDefault();
        setState(!isOpen)
    }

    return (
        <>
        <h2>{name}</h2>  
        <p>Gender: {gender}</p>  
        <p>Birth year: {birth_year}</p>  
        <button onClick={expandInfo}>More</button>
        {isOpen ? 
            <div>
                <p>Mass:{mass}</p>
                <p>Height{height}</p>
            </div>
            :
            null
        }

        
        </>
    )
}

export default ItemList
