import { Route,Routes } from "react-router-dom"
import Categories from "./components/Categories"
import Category from "./components/Category"
import Home from "./components/Home"
import Recipe from "./components/Recipe"
import { useContext, useEffect } from "react"
import {AppContext} from "./Context/AppContext"
import Name from "./components/Name"

function App() {
  const {mealData,randomMealData,categoryData}=useContext(AppContext);
  useEffect(()=>{
    mealData();
    randomMealData();
    categoryData();
  },[]);

  return (
    <div className="m-0 p-0 ">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/category" element={<Category/>}></Route>
        <Route path="/category/:categorie" element={<Categories/>}></Route>
        <Route path="/Recipe/:Id" element={<Recipe/>}></Route>
        <Route path="/Name/:name" element={<Name/>}></Route>
      </Routes>
    </div>
  )
}

export default App
