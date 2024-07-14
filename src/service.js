
import axios from 'axios';

//axios are used for connecting frontend to backend

const API_BASE_URL = 'http://localhost:3002/api/recipes'


//backend api calls

export const Addrecipe = async (recipie) => {
    const response = await axios.post(`${API_BASE_URL}/`,recipie);
    console.log(response)

}


export const getallRecipes = async () => {
    const response= await axios.get(`${API_BASE_URL}/`);
    return response.data;
}

export const getRecipeById = async (id) => {

    const response=await axios.get(`${API_BASE_URL}/${id}`)
    return response.data;
}

export const updateRecipe = async (id,recipie) => {
    const response = await axios.put(`${API_BASE_URL}/${id}`,recipie);
    console.log(response)
}

export const deleteRecipe = async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    console.log(response)
}