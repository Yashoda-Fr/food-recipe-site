import React from 'react';
import FormPropsTextFields from '../components/textField';
import Buttons from '../components/button';

const UpdateRecipe = () => {
    return (  
        <div className='flex justify-center items-center h-screen'>
            <div className="bg-slate-300 w-fit h-fit p-5 rounded-3xl">
            <div>
                <h1 className="text-2xl font-bold text-center">Update Recipe</h1>
            </div>
            
            <div className="flex flex-col  items-center justify-end mt-4 ">
            <FormPropsTextFields id="tile" label="Title" type="text" variant="filled"/>
            <FormPropsTextFields id="description" label="Description" type="text" variant="filled"/>
            <FormPropsTextFields id="ingredients" label="Ingredients" type="text" variant="filled"/>
            </div>
            <div className="flex justify-center space-x-10 mt-5">
            <Buttons name="Cancel"/>
            <Buttons name="Update"/>
            </div>
            
            </div>
        </div>
    );
}
 
export default UpdateRecipe;