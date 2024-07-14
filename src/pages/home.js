import { useEffect, useState } from "react";
import MediaCard from "../components/card";
import Buttons from "../components/button";
import { Link } from "react-router-dom";
import { deleteRecipe, getallRecipes } from "../service";



//useState,props(function)
//when the delete is clicked card should be deleted

const Home = () => {

  const [data, setData] = useState([]);


  useEffect( ()=>{

    const fetchData = async () => {
    try{
      const response =await getallRecipes();
      console.log(response)
      setData(response)
     
    }catch(error){
      console.log(error)
    }
  }

  fetchData();

},[])








  const handleDelete = async (id) => {
    //console.log("Card is deleted");
    await deleteRecipe(id);

    //refresh page after thos
    window.location.href = '/';

  };




  return (

    <>
      <div className="flex justify-end m-4 ">
        <Link to="/addRecipe">
        <Buttons name="Add Recipe" />
        </Link>
        
      </div>

      <div className="grid grid-cols-4 gap-3 m-5 ">
        {data.map((item) => (

          <MediaCard  id={item._id} topic={item.title} description={item.description} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );


}

export default Home;