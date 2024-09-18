import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['BLACKPINK']);

    const onAddCategory = (newCategory) => {
        // console.log("Left 4 Dead 2");
        // setCategories( cat => [ ...categories, 'Left 4 Dead 2' ] );

        if(categories.includes(newCategory)) return;

        console.log(newCategory);
        setCategories( [ newCategory, ...categories] );
    }
    
    console.log(categories);

    return(
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ onAddCategory }
            />

            {/* Listado de Gif */}
            { 
                categories.map( category => 
                    (
                        <GifGrid 
                            key={ category } 
                            category={category} 
                        />
                    )
                ) 
            }

        </>
    );
}
