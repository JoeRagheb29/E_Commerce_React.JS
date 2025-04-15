import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Product from "./Product.js";
import RecursiveDisplay from "./RecursiveDisplay.js";

function ProductDetails() {
  let params = useParams();
  // params = the variables in the path of route who product details in product component
  let API_Product_URL = `${
    params.APInum === "1" ? "https://dummyjson.com" : "https://fakestoreapi.com"
  }/products/${params.ProductId}`;
  let [myProduct, setMyProduct] = useState({});

  useEffect(() => {
    fetch(API_Product_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let bol = params.APInum === "1" ? true : false;
        setMyProduct({ ...data, isFromAPI1: bol });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(myProduct);

  return (
    <Product myObj={myProduct} showButton={false}>
        <ul><RecursiveDisplay myObj={myProduct} /></ul>
    </Product>
  );
}

export default ProductDetails;