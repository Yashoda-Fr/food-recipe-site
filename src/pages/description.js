import { useEffect, useState } from 'react';
import Buttons from '../components/button';
import { getRecipeById } from '../service';
import { useParams } from 'react-router-dom';

const Description = () => {
    const{id}=useParams(); 

    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [ingredients, setIngridients] = useState([]);

    useEffect( ()=>{
        const fetchData = async () => {
        try{
          const response =await getRecipeById(id);
          setTitle(response.title)
          setDescription(response.description)
          setIngridients(response.ingredients)
         
        }catch(error){
          console.log(error)
        }
      }
      fetchData();
    },[])


    return ( 
        <div className="flex justify-center mt-6 ">
        <div className="mt-5 bg-slate-300 w-[50rem] h-fit p-5 rounded-3xl">
            <h3 className="text-2xl font-bold text-center mb-3">{title}</h3>
            <h1 className="font-bold text-center mb-3">Description</h1>

            <div className='flex justify-center pr-4 pl-4'>
            <p className="text-justify" >{description} </p>
            </div>
            <h2 className="font-bold text-center mb-3 p-3" >{ingredients}</h2>

            <div className="flex justify-center" >
            <Buttons name="Back to Recipes"/>
            </div>

        </div>
        </div>
     );
}
 
export default Description;