
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Description from './pages/description';
import AddRecipe from './pages/addRecipe';
import UpdateRecipe from './pages/updateRecipe';
import NavBar from './components/Navigation';
import MediaCard from './components/card';


function App() {
  return (
    <div >
      <NavBar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/description" element={<Description/>}></Route>
        <Route path="/addRecipe" element={<AddRecipe/>}></Route>
        <Route path="/updateRecipe" element={<UpdateRecipe/>}></Route>
      </Routes>
      </BrowserRouter>
      <MediaCard topic="Pizza" description="To make a delicious homemade pizza, start by preheating
        your oven to 475°F (245°C). Roll out your pizza dough 
        on a lightly floured surface to your desired thickness.
        Spread a generous layer of pizza sauce over the dough, 
        leaving a small border for the crust. Sprinkle a cup and
        a half of shredded mozzarella cheese evenly over the sauce.
        Add your favorite toppings, such as pepperoni, bell peppers, and
        mushrooms. Place the pizza on a baking sheet or pizza stone and bake
        in the preheated oven for 10-15 minutes, or until the crust is golden and 
        the cheese is bubbly and slightly browned. Once baked, remove from the oven, drizzle 
        with olive oil, and sprinkle with dried oregano and basil. Let it cool slightly, then slice
        and serve your homemade pizza. Enjoy!"/>
      
      
    

      
    </div>
  );
}

export default App;
