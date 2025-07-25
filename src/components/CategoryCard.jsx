import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function CategoryCard({data}){
    const {categoriesData}=useContext(AppContext);
    const [read,setRead]=useState(false);

    function clickHandler(){
        setRead(!read);
    }
    return (
        <div className="w-96 h-96 overflow-auto flex flex-col gap-2">
            <div><img src={data.strCategoryThumb} alt="" className="rounded-lg"/></div>
            <div className="flex flex-col gap-2">
                <span><Link to={`/category/${data.strCategory}`} className="bg-[#905228]  hover:bg-[#5e361b] border-none rounded-lg px-2 text-white"
                onClick={()=>categoriesData(data.strCategory)}>
                {data.strCategory}</Link></span>
                <div>{
                    data.strCategoryDescription.length<=200?<span>{data.strCategoryDescription}</span>:
                    read?<div>
                        <span>{data.strCategoryDescription}</span>
                        <button onClick={clickHandler}>Read less</button>
                    </div>:<div>
                        <span>{`${data.strCategoryDescription.slice(0,200)}...  `}</span>
                        <button onClick={clickHandler} className="text-blue-500 text-sm">Read more</button>
                    </div>
}</div>
            </div>
        </div>
    )
}
export default CategoryCard;