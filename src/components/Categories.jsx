import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


function Categories(){
    const {categories}=useContext(AppContext);
    const navigate=useNavigate();
    
    return(

             <div className="w-full h-full">
                {
                    categories.length==0?<Spinner/>:
                    <div className="flex justify-center items-center p-4 flex-col">
                        <span className="flex w-full justify-start p-2">
                            <span className="border-2 border-[#452611] p-1 rounded-md" onClick={()=>navigate(-1)}><FaArrowLeftLong className="w-5" ></FaArrowLeftLong></span></span>
                    
                        <span className="text-3xl font-semibold text-[#452611]">Categories</span>
                    <div className="w-full  h-full  flex justify-center items-center flex-wrap gap-10 p-10">
                        {categories.map((recipe)=>(<Card recipe={recipe} key={recipe.idMeal}/>))}
                    </div>
                    
                    </div>
                }
            </div>

    )
}
export default Categories;