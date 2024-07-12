
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Description from './pages/description';
import AddRecipe from './pages/addRecipe';
import UpdateRecipe from './pages/updateRecipe';
import NavBar from './components/Navigation';



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

      
      
    

      
    </div>
  );
}

export default App;
