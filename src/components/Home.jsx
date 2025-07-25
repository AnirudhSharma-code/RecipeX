import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import NavBar from "./Navbar";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import Card from "./Card";

function Home(){
    const {loading,meal,loading2,randomMeal,fetchIdMeal}=useContext(AppContext);

    
    return(
        <div className="w-full h-full ">
            <NavBar></NavBar>
            <div className="w-full max-h-full flex flex-row items-center justify-center h-full md:p-8">
            {
            loading?<Spinner className="w-fit h-fit"/>:
            randomMeal.length==0?<span>Data not found </span>:
            <div className="w-4/5 h-4/5 my-3 md:m-5 flex justify-center items-center gap-12 lg:flex-row flex-col">
                <div className="w-4/5 flex justify-center items-center"><img src={randomMeal[0].strMealThumb} alt="" className="w-4/5  rounded-lg"/></div>
                <div className="w-4/5 flex flex-col  items-start gap-6">
                    <div className="flex flex-col justify-between items-center gap-6 w-full">
                        <span className="text-3xl font-semibold">A random meal for you !!</span>
                        <span className="text-2xl font-bold">{randomMeal[0].strMeal}</span>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <div className="flex justify-start items-center gap-1">
                            <span className=" border-2 border-[#905228] rounded-xl bg-[#905228] text-white p-0.5 text-base">{randomMeal[0].strCategory}</span><br />
                            <span className="border-2 border-[#905228] rounded-xl bg-[#905228] text-white p-0.5 text-base">{randomMeal[0].strArea}</span><br />
                        </div>
                        <span className=" tracking-wide">{`${randomMeal[0].strInstructions.slice(0,400)}...`}</span>
                        <span><Link to={randomMeal[0].strYoutube} className="text-blue-600 ">Click here for video..</Link></span>
                        <div className="w-full flex justify-center items-center">
                            <button className="bg-[#905228] hover:bg-[#5e361b] border-none rounded-lg" onClick={()=>fetchIdMeal(randomMeal[0].idMeal)}>
                                <Link to={`/recipe/${randomMeal[0].idMeal}`} className="text-white text-lg px-4 py-3 ">Recipe</Link></button></div>
                    </div>
                </div>
            </div>

            }
            </div>
            <div className="w-full flex justify-center items-center md:m-10"><div className="w-4/5 bg-[#edad81] rounded-full h-1"></div></div>
            <div className="w-full h-full flex justify-center items-center">
                {
                    loading2?<Spinner/>:
                    <div className="flex justify-center items-center p-4 flex-col">
                    <span className="text-3xl font-semibold text-[#452611]">More Recipes</span>
                    <div className="w-full  h-full  flex justify-center items-center flex-wrap md:gap-10 gap-5 md:p-10 p-5">
                        {meal.map((recipe)=>(<Card recipe={recipe} key={recipe.idMeal}/>))}
                    </div>
                    
                    </div>
                }
            </div>
        </div>
    )

}
export default Home;