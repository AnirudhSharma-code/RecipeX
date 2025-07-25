import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
function Card({recipe}){
    const {fetchIdMeal}=useContext(AppContext);



    return(
        <div className=" flex flex-col justify-center items-center h-96 w-80 gap-2">
            <img src={recipe.strMealThumb} alt="meal photo" className="w-72 rounded-xl"  />
            <span className="text-lg ">{recipe.strMeal}</span>
            <button className="bg-[#905228] hover:bg-[#5e361b] border-none rounded-lg" onClick={()=>fetchIdMeal(recipe.idMeal)}>
                <Link to={`/recipe/${recipe.idMeal}`} className="text-white text-lg px-4 py-3 " >Recipe</Link></button>
        </div>
    )
}
export default Card;