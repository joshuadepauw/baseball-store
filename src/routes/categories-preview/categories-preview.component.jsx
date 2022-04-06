import { useContext } from "react";
import { Link } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return ( 
                <Link className='nav-link' to={'/shop/bags'}>     
           {Object.keys(categoriesMap).map((title) => {
               const products = categoriesMap[title];
               return(
                   <CategoryPreview key={title} title={title} products={products}/>
                   );
                })} 
                </Link>
       
    );
};

export default CategoriesPreview; 