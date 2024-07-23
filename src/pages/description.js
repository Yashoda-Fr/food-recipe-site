import { useEffect, useState } from 'react';
import Buttons from '../components/button';
import { getRecipeById } from '../service';
import { Link, useParams } from 'react-router-dom';

const Description = () => {
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getRecipeById(id);
                setTitle(response.title);
                setDescription(response.description);
                setIngredients(response.ingredients.split(',')); // Ensure this is an array

            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]); // Added id as a dependency

    return (
        <div className="flex justify-center mt-6 ">
            <div className="mt-5 bg-slate-300 w-[50rem] h-fit p-5 rounded-3xl">
                <h3 className="text-2xl font-bold text-center mb-3">{title}</h3>
                <h1 className="font-bold text-center mb-3">Description</h1>

                <div className='flex justify-center pr-4 pl-4 ' style={{ overflowWrap: 'break-word', maxWidth: '100%' }}>
                    <p className="text-justify w-96">{description}</p>
                </div>

                <h1 className="font-bold text-center mb-3">Ingredients</h1>
                <ul className="list-disc list-inside  text-sm text-center">
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.trim()}</li>
                    ))}
                </ul>
                
                <div className="flex justify-center" >
                    <Link to="/">
                        <Buttons name="Back to Recipes" />
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Description;