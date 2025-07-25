import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import NavBar from "./Navbar";
import CategoryCard from "./CategoryCard";
import Spinner from "./Spinner";


function Category(){
    const {category}=useContext(AppContext);
    
    return <div className="w-full h-full">
        <NavBar></NavBar>
        <div className="w-full h-full">
            {
                category.length==0?<Spinner/>:
                
                <div className="w-full h-full flex flex-wrap justify-center items-center p-10 gap-5">
                    {category.map((data)=>(<CategoryCard data={data} key={data.idCategory} />))}</div>
            
            }
        </div>
    </div>
}
export default Category;