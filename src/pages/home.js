import { useState } from "react";
import MediaCard from "../components/card";




  //useState,props(function)
  //when the delete is clicked card shoukd be deleted

  const Home = () => {

    const [data, setData] = useState([
      {
        "topic": "Pizza",
        "description": "To make a delicious homemade pizza, start by preheating on a lightly floured surface to your desired thickness."
      },
      {
        "topic": "Burger",
        "description": "A kaweesha is a sandwich dsadsa of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun."
      }, 
      {
          "topic": "Burger",
          "description": "A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun."
        } 
    ])

    const handleDelete = (id) => {
      //console.log("Card is deleted");
      const newData = data.filter((blog,index) =>index !== id)
      setData(newData);

  
      
    };

    


    return (
        <div className="grid grid-cols-4 gap-3 m-5 ">
            {data.map((item, index) => (
              
                <MediaCard id={index} topic={item.topic} description={item.description} handleDelete={handleDelete}/>
            ))}
        </div>
    );
}

export default Home;