import React, { useState } from 'react';
import FormPropsTextFields from '../components/textField';
import Buttons from '../components/button';
import { z } from 'zod';



//step01 create a new schema

const addSchema = z.object({
    title: z.string().regex(/^[^\d]*$/, { message: "Must not contain numbers" }).min(1),
    description: z.string().regex(/^[^\d]*$/, { message: "Must not contain numbers" }).min(1),
    ingredients:z.string().min(1)
})

const AddRecipe = () => {

    const[title,setTitle] = useState()
    const[description,setDescription] = useState()
    const[ingredients,setIngridients] = useState()
    const [fieldErrors, setFieldErrors] = useState({})


    const handleSubmit = (e) =>{

        //stop the page from refreshing
        e.preventDefault()

        //validate the form

       const result =  addSchema.safeParse({title,description,ingredients});

       if(!result.success){
              const fieldErrors = result.error.flatten().fieldErrors;
                setFieldErrors(fieldErrors)
       }else{
        //data send to backend
        console.log(result.data)
       }
    }

    const handleClear = () =>{
        setTitle('')
        setDescription('')
        setIngridients('')
    }
    return ( 
        <div className='flex justify-center items-center h-screen'>
            <div className="bg-slate-300 w-fit h-fit p-5 rounded-3xl">
            <div>
                <h1 className="text-2xl font-bold text-center">Add Recipe</h1>
            </div>
            
            <div className="flex flex-col  items-center justify-end mt-4 ">
            <FormPropsTextFields name="title" value={title} id="tile" label="Title" type="text" variant="filled" onChange={(e)=>setTitle(e.target.value)}/>
                {fieldErrors.title && <p className="text-red-500 text-sm">{fieldErrors.title}</p>}
            <FormPropsTextFields name="description" value={description} id="description" label="Description" type="text" variant="filled" onChange={(e)=>setDescription(e.target.value)}/>
                {fieldErrors.description && <p className="text-red-500 text-sm">{fieldErrors.description}</p>}
            <FormPropsTextFields name = "ingridients" value={ingredients} id="ingredients" label="Ingredients" type="text" variant="filled" onChange={(e)=>setIngridients(e.target.value)}/>
                {fieldErrors.ingredients && <p className="text-red-500 text-sm">{fieldErrors.ingredients}</p>}
            </div>


            <div className="flex justify-center space-x-10 mt-5">
            <Buttons onClick={handleClear} name="Clear"/>
            <Buttons onClick={handleSubmit} name="Add recipe"/>
            </div>
            
            </div>
        </div>
     );
}
 
export default AddRecipe;