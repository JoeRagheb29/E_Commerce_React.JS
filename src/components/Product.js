import { Link } from "react-router";
import './product.css';

function Product({myObj,showButton,ClassNameImg,children}) {  
  //destructuring of object as all properties is big object called props and 'myObj' subObject | property from it
  return (
    <div className={`card p-3 shadow ${showButton ? "hoover h-600 " : "container flex-lg-row flex-md-column mt-4 gap-3"}`}>
      <div className={`h-50 ${showButton? "" : "col-md-12 col-lg-6 violetLight d-flex flex-column rounded-3 gap-4 align-items-center"}`}>
        {myObj.isFromAPI1 === true ?
          <img src={myObj.images[0]} className={`w-100 ${showButton ?"h-100":""}`} alt='...'/>: 
          <img src={myObj.image} className={`w-100 ${showButton ?"h-100":""}`} alt='...'/>}
        {!showButton && <h5>Price = {myObj.price}$</h5>}
      </div>
      <div className={`card-body d-flex flex-column align-center ${showButton ? "" : "col-md-12 col-lg-6 justify-content-start"}`}>
        {showButton ? (<><h5 className="card-title">{myObj.title}</h5>
                         <p className="card-text">{myObj.description}</p>
                      </>)
        : (<><h2 className="card-title">{myObj.title}</h2>
            <h5 className="card-text">{myObj.description}</h5>
          </>)}
        {children}
        {showButton &&
          <Link className="btn blue text-light" to={`/ProductDetails/${myObj.isFromAPI1?"1":"2"}/${myObj.id}`}>
          Show Details</Link>}
      </div> 
    </div>
  );
}

export default Product;