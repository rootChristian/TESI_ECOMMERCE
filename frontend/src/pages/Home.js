/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************             Linda Rodiere TCHOUFFONG METOU ****************
************ Version:    1.0.0 *****************************************
***********************************************************************/

import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

const Home = () => {

    const categoriesData = useSelector((state) => state.categoriesReducer)
    
    /*
    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }*/

    return (
        <div className="container-fluid">
            <div>
                <h1>LISTS OF PRODUCTS</h1>
            </div>
        </div>
        
    )
}

  /*  <ul>{categoriesData.map(category => (<li key={category._id}>Name: {category.name}</li>))} </ul>
   *  <div>
            <div>
                <span>Filters: </span>
                {categoriesData.length > 0 ? (
                       categoriesData.map(category => (
                        <select name="category" value={"category=" + category._id} key={category._id}>
                                <option value={category._id}> {category.name} </option>
                        </select>
                    ))
                  ) : (<h1>EMPTY CATEGORY!!!</h1>)
                }

            </div>

            <input type="text" value='' placeholder="Enter your search!"/>
        </div>
   *  
  return (
    <div className="home">
        <LeftNav />
        <div className="main">
              <div className="home-header">
                  <h1>LISTS CATEGORIES</h1>
                  <div>
                      {categoriesData.length > 0 ? (
                          <ul>{categoriesData.map(category => (<li key={category._id}>Name: {category.name}</li>))} </ul>
                      ) : (<h1>error</h1>)}
                  </div>
                  <h1>LISTS OF PRODUCTS</h1>
                  <div>
                      {productsData.length > 0 ? (
                          <ul>{productsData.map(product => (<li key={product._id}>Name: {product.name}, description: {product.description}, price: {product.price}</li>))} </ul>
                      ) : (<h1>error</h1>)}
                  </div>

              </div>
        </div>
    </div>
  );
};
*/
export default Home;

