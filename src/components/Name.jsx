import { useContext, useEffect } from "react";
import Card from "./Card";
import Spinner from "./Spinner";
import { AppContext } from "../Context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function Name() {
  const { nameData, loading3, fetchNameData } = useContext(AppContext);
  const { name } = useParams();
  useEffect(() => {
    if (name) {
      fetchNameData(name);
    }
  }, [name]);
  const navigate=useNavigate();

  console.log("Hello");
  console.log(nameData);
  
  
  return (
    <div>
      {loading3 ? (
        <Spinner/>
      ) : nameData && nameData.length > 0 ? (
        <div className="flex w-full h-full justify-center items-center flex-wrap p-10 flex-col gap-15">
             <div className="flex justify-start items-start px-5 h-full w-full">
                <span className="border-2 border-[#452611] p-1 rounded-md" onClick={()=>navigate(-1)}><FaArrowLeftLong className="w-5" ></FaArrowLeftLong></span>
             </div>
          <div className="flex w-full h-full flex-wrap justify-center">
            {nameData.map((recipe) => (
            <Card key={recipe.idMeal} recipe={recipe} />
          ))}
          </div>
        </div>
      ) : (
        <div>
            <div className="flex justify-center items-center p-10 h-full  flex-col">
                <div className="w-full flex justify-start gap-10">
                    <span className="border-2 border-[#452611] p-1 rounded-md" onClick={()=>navigate(-1)}><FaArrowLeftLong className="w-5" ></FaArrowLeftLong></span>
                </div>
             <div className="flex justify-center items-center h-[80vh]"> 
                <p className="w-full flex justify-center text-gray-600 ">No results found.</p>
             </div>
             </div>
        </div>
      )}
    </div>
  );
}

export default Name;
