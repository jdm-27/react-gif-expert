import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    //Manejo de estado, inicializado con una categoria - Hooks
    const [categories, setCategories] = useState( ['One Punch'] );

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory)) return;
        
        //console.log(newCategory);
        setCategories([ newCategory,...categories ]); 
    }

    return ( 
        <>
          
            <h1>GifExpertApp</h1>

            <AddCategory 
            /* setCategories={ setCategories }  */
                onNewCategory={ (event) => onAddCategory (event) }                       
            />  

            { 
            categories.map( (category) =>(
                    <GifGrid 
                    key={ category } 
                    category= { category } />                        
                ))
            }              
           
        
        </>
    );
}
 
export default GifExpertApp;