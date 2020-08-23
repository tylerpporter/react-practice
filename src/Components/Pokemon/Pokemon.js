import React from 'react' 
import { useForm } from 'react-hook-form' 



const Pokemon = ({name, link}) => {
    function capitalizeName(string) {
        return string.charAt(0).toUpperCase() + string.slice(1); 
    }
    return(
        <div className='Pokemon'>
            <h1>{capitalizeName(name)}</h1>
            <a href={link}>More info from Pokemon API</a>
        </div>  
    );
}

export default Pokemon 