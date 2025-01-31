import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Product from "./Product.js";
function ProductDetails() {
  // 
  let params = useParams();
  let API_Product_URL = `https://fakestoreapi.com/products/${params.ProductId}`;
  let [myProduct, setMyProduct] = useState({});

  useEffect(() => {
    fetch(API_Product_URL)
      .then((res) => {
        return res.json();
      }).then((data) => {
        setMyProduct(data);
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <Product myObj={myProduct} showButton={false} />
  );
}

export default ProductDetails;