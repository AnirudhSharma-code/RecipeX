import { createContext, useState } from "react";

export const AppContext=createContext();

function AppContextProvider({children}){
    const [loading,setLoading]=useState();
    const [loading2,setLoading2]=useState();
    const [category,setCategory]=useState([]);
    const [meal,setMeal]=useState([]);
    const [randomMeal,setRandomMeal]=useState([]);
    const [categories,setCategories]=useState([]);
    const [idData,setIdData]=useState([]);
    const [nameData,setNameData]=useState([]);
    async function mealData() {
        setLoading2(true);
        try {
            const mealUrl=import.meta.env.VITE_MEAL_URL;
            const response=await fetch(mealUrl);
            const data = await response.json();
            setMeal(data.meals); 
        } catch (error) {
            setMeal([]);
            console.log(error);
        }
        setLoading2(false);
    }

    async function randomMealData() {
        setLoading(true);
        try {
            const url=import.meta.env.VITE_RANDOM_MEAL_URL
            const data=await fetch(url);
            const response=await data.json();
            setRandomMeal(response.meals);
        } catch (error) {
            console.log(error);
        }
                setLoading(false);
    }

    async function categoryData() {
        try {
            const url=import.meta.env.VITE_CATEGORY_URL;
            const response=await fetch(url);
            const data=await response.json();
            setCategory(data.categories);
        } catch (error) {
            console.log(error);           
        }
    }
    
  
    async function categoriesData(categorie) {
        try {
            const url=import.meta.env.VITE_CATEGORIES_URL+categorie;
            console.log(url);
            
            const response=await fetch(url);
            const data=await response.json();
            setCategories(data.meals);
        } catch (error) {
            console.log(error);
            setCategories([]);
        }
    }
    
    async function fetchIdMeal(id) {
        try {
            const url=import.meta.env.VITE_ID_URL+id;
            console.log(url);
            
            const response=await fetch(url);
            const data=await response.json();
            setIdData(data.meals); 
        } catch (error) {
            console.log(error);
            setIdData([]);
            
        }
    }
    
    const [loading3,setLoading3]=useState(false);
    async function fetchNameData(name) {
        setLoading3(true);
        try {
            const url=import.meta.env.VITE_NAME_URL+name;
            console.log(url);
            const response=await fetch(url);
            const data=await response.json();
            setNameData(data.meals);
        } catch (error) {
            console.log(error);
            setNameData([]);
        }
        setLoading3(false);
    }    

    const value={
        loading3,meal,loading,loading2,mealData,randomMeal,randomMealData,category,categoryData,categories,categoriesData,idData,fetchIdMeal,fetchNameData,nameData
    }
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;