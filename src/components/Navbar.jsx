import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { FiAlignCenter } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

function NavBar(){
    const [name,setName]=useState("");
    const {fetchNameData}=useContext(AppContext);
    const navigate=useNavigate();
    const [sideBar,setSideBar]=useState(false);
    const [searchBar,setSearchBar]=useState(false);

    
    function handleChange(event){
        setName(event.target.value);
    }
    console.log(name);
    
function clickHandler() {
    const trimmedName = name.trim();
    if (trimmedName === ""){
        setSearchBar(!searchBar);
        return;
    }
    navigate(`/Name/${trimmedName}`);
    setName("");  
    setSearchBar(!searchBar);
}



    return(
        <div className="flex justify-between items-center w-full h-[15%] shadow-xl rounded-2xl px-3 relative">
            <div className="w-full relative">
                <NavLink to='/'><img src="https://www.creativefabrica.com/wp-content/uploads/2022/12/19/knife-and-spoon-logo-illustration-restau-Graphics-53344747-1.jpg" 
                alt="Logo" className="lg:w-30 h-20 w-fit"/></NavLink>
            </div>
            <div className="flex justify-center items-center  relative gap-5">
                <NavLink to="/" className={({isActive})=>`lg:flex hidden px-2 py-1 hover:bg-[#e9c5ac] hover:rounded-2xl ${isActive?"underline":""} `}>Home</NavLink>
                <NavLink to="/category" className={({isActive})=>`lg:flex hidden px-2 py-1 hover:bg-[#e9c5ac] hover:rounded-2xl ${isActive?"underline":""} `}>Category</NavLink>
                <div className="flex items-center gap-1">
                    <input type="text" value={name} onChange={handleChange} placeholder="Enter Dish Name" 
                className={` transition-all ease-linear duration-200 bg-[#905228] focus:outline-none text-white placeholder:text-white shadow-xl px-3 py-2 rounded-xl hover:bg-[#e29c6c] ${searchBar?"scale-100 opacity-100 ":"opacity-0 scale-0 "} lg:opacity-100 lg:scale-100`}/>
               <div className="p-2 rounded-full bg-white shadow-md hover:shadow-lg active:scale-95 
             transition-all duration-200 cursor-pointer text-gray-700 hover:text-black" onClick={clickHandler}>
                 <CiSearch className="h-6 w-6 "/></div></div>

                <div onClick={()=>setSideBar(!sideBar)} className="lg:hidden border-2 p-1">
                    {
                        !sideBar?<FiAlignCenter/>:<RxCross2/>
                    }
                </div>
                    
                    <div className={` lg:hidden transition-all ease-out duration-200 ${"bg-[#905228]"}  absolute flex flex-col justify-center items-center right-0 top-11 gap-1 rounded-md p-2 ${sideBar?"opacity-100 scale-100":"opacity-0 scale-0"}`}>
                             <NavLink to="/" className="  text-white ">Home</NavLink>
                            <NavLink to="/category" className="text-white">Category</NavLink>
                        </div>
                    
            
            </div>
        </div>
    )
}
export default NavBar;


