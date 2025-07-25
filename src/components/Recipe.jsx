import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function Recipe(){
    const {idData}=useContext(AppContext);
    const navigate=useNavigate();
    let ingredient;
    let  measure;
    function ingredientsList(idData){
        ingredient=Object.keys(idData[0]).filter((key)=>key.startsWith("strIngredient") && idData[0][key] && idData[0][key].trim()!=="");
        console.log(ingredient);
    }
    function measureList(idData){
        measure=Object.keys(idData[0]).filter((key)=>key.startsWith("strMeasure") && idData[0][key] && idData[0][key].trim()!="");
    }
    if(idData.length!=0){
        ingredientsList(idData);
        measureList(idData);
    }
    
    return (
        <div className="w-full h-full ">
            {idData.length==0?<Spinner/>:
            
            <div className="flex  gap-3 flex-col p-4">
                <div className="flex justify-start px-5">
                    <span className="border-2 border-[#452611] p-1 rounded-md" onClick={()=>navigate(-1)}><FaArrowLeftLong className="w-5" ></FaArrowLeftLong></span>
                </div>
            <div className="flex w-full h-[80vh] lg:flex-row flex-col overflow-auto">
                <div className="w-full h-full p-5">
                <div className="w-full h-full"><img src={idData[0].strMealThumb} alt="recipe image" className="w-full h-full rounded-lg"/></div>
            </div>
            <div className="w-full h-[80vh] p-5 lg:overflow-auto flex flex-col gap-2 items-start">
                <div className="flex flex-col justify-between items-center gap-6 w-full">
                    <span className="text-2xl font-bold">{idData[0].strMeal}</span>
                </div>
                <div className="flex justify-start items-center gap-1">
                        <span className=" border-2 border-[#905228] rounded-xl bg-[#905228] text-white p-0.5 text-base">{idData[0].strCategory}</span><br />
                        <span className="border-2 border-[#905228] rounded-xl bg-[#905228] text-white p-0.5 text-base">{idData[0].strArea}</span><br />
                </div>
                <div>
                    <span className="font-semibold">Video:-</span>
                    <Link className="text-blue-600 hover:underline">{idData[0].strYoutube}</Link></div>
                <div>
                    <span>Ingredients</span>
                    <div className="flex ">
                        <span >{ingredient.map((key,index)=>(<li key={index} >{`${idData[0][key]} :- `}</li>))}</span>
                        <span>{measure.map((key,index)=>(<li key={index} className="list-none">{idData[0][key]}</li>))}</span>
                    </div>
                </div>
                <div>
                    <span className="overflow-auto">{idData[0].strInstructions}</span>
                </div>
                
            </div>
            </div>
            </div>
            
}
        </div>
    )
}
export default Recipe;