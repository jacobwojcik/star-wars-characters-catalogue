import React,{MouseEvent, useState} from 'react'
import "./itemlist.css"

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
        <div onClick={expandInfo}className="item-div"> 
        <h3>{name}</h3>  
        <p>Gender: {gender}</p>  
        <p>Birth year: {birth_year}</p>  
        {isOpen ? 
            <div>
                <p>Mass:{mass}</p>
                <p>Height{height}</p>
            </div>
            :
            null
        }

        
        </div>
    )
}

export default ItemList
