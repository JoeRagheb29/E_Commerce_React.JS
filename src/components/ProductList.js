import { useState, useEffect } from "react";
import Product from "./Product.js";
function ProductList() {
  // for Storing the Products and Categories in states
  let [productList, setproductList] = useState([]);
  let [CategoriesList, setCategoriesList] = useState([]);
  let API_URL = "https://fakestoreapi.com/products";

  // Fetch all products from API and set them in variable.
  function getALlProductsFromAPI() {
    fetch(API_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setproductList(data);
      });
  }

  // Fetch all categories from API and set them in their state.
  function getCategoriesFromAPI() {
    fetch(`${API_URL}/categories`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategoriesList(data);
      });
  }

  // Fetch some products based by category API and set them in their state.
  function getsomeProductsFromAPI(myCategory) {
    fetch(`${API_URL}/category/${myCategory}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setproductList(data));
  }

  // call the APIs and get return the results in stateHooks only once
  useEffect(() => {
    getALlProductsFromAPI();
    getCategoriesFromAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <h2 className="text-center p-5">Our Products</h2>
      <button
        className="btn btn-secondary btn-xs"
        onClick={() => getALlProductsFromAPI()}
      >
        All
      </button>
      {CategoriesList.map((cate) => {
        return (
          <button
            key={cate}
            className="btn btn-secondary btn-xs"
            onClick={() => {
              getsomeProductsFromAPI(cate);
            }}
          >
            {cate}
          </button>
        );
      })}
      <div
        className="container d-grid gap-3"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}
      >
        {productList.map((product) => {
          return <Product key={product.id} myObj={product} showButton={true} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;
