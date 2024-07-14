import React, { useEffect, useState } from 'react';
import FormPropsTextFields from '../components/textField';
import Buttons from '../components/button';
import { z } from 'zod';
import { useParams } from 'react-router-dom';
import { getRecipeById, updateRecipe } from '../service';


const UpdateSchema = z.object({
    title: z.string().regex(/^[^\d]*$/, { message: "Must not contain numbers" }).min(1),
    description: z.string().regex(/^[^\d]*$/, { message: "Must not contain numbers" }).min(1),
    ingredients:z.string().min(1)
})

const UpdateRecipe = () => {

    const[title,setTitle] = useState()
    const[description,setDescription] = useState()
    const[ingredients,setIngridients] = useState()
    const [fieldErrors, setFieldErrors] = useState({})

    const{id}=useParams();


    useEffect(()=>{
        //fetch the data from backend
        const fetchData = async () => {
            try{
                const response = await getRecipeById(id);
                console.log(response)
                setTitle(response.title)
                setDescription(response.description)
                setIngridients(response.ingredients)


                

            }catch(error){
                console.log(error)

            }
        }
        fetchData();

    },[])

    const handleUpdate = (e) =>{
        //stop the page refreshing
        e.preventDefault()

        //valid the form
        const result= UpdateSchema.safeParse({title,description,ingredients})

        if(!result.success){
            const fieldErrors = result.error.flatten().fieldErrors;
              setFieldErrors(fieldErrors)
        }else{
           //data add to backend(update it)
           updateRecipe(id,{title,description,ingredients})

        //redirect to home page
        window.location.href = '/'
        

        }

    }

    const handleCancel = () =>{
        setTitle('')
        setDescription('')
        setIngridients('')
    }

    return (  
        <div className='flex justify-center items-center h-screen'>
            <div className="bg-slate-300 w-fit h-fit p-5 rounded-3xl">
            <div>
                <h1 className="text-2xl font-bold text-center">Update Recipe</h1>
            </div>
            
            <div className="flex flex-col  items-center justify-end mt-4 ">
            <FormPropsTextFields name="title" id="tile" label="Title" type="text" variant="filled" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            {fieldErrors.title && <p className="text-red-500 text-sm">{fieldErrors.title}</p>}
            <FormPropsTextFields name="description" id="description" label="Description" type="text" variant="filled" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            {fieldErrors.title && <p className="text-red-500 text-sm">{fieldErrors.description}</p>}
            <FormPropsTextFields name="ingredients" id="ingredients" label="Ingredients" type="text" variant="filled" value={ingredients} onChange={(e)=>setIngridients(e.target.value)}/>
            {fieldErrors.title && <p className="text-red-500 text-sm">{fieldErrors.ingredients}</p>}
            </div>
            <div className="flex justify-center space-x-10 mt-5">
            <Buttons name="Cancel" onClick={handleCancel}/>

            
            <Buttons name="Update" onClick={handleUpdate}/>
            
            </div>
            
            </div>
        </div>
    );
}
 
export default UpdateRecipe;