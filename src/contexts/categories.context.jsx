import { createContext ,useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.js";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// import {  addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";


export const CategoriesContext = createContext({
    categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    useEffect(() => {
        //uncomment below to update products in db
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, []);

    //comment below when updating db
        const getCategoriesMap = async () => {
          const categoryMap = await getCategoriesAndDocuments();
          console.log(categoryMap)    
          setCategoriesMap(categoryMap);      
        };
        getCategoriesMap();
    }, []);
  
    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}> 
        {children} 
        </CategoriesContext.Provider>
    );
};