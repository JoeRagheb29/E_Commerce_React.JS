import { Link } from "react-router";

function Product({myObj,showButton}) {   
  //destructuring of object as all properties is big object called props and 'myObj' subObject | property from it
  return (
    <>
      <div className="card">
        <img src={myObj.image} className="card-img-top" alt='...'/>
        <div className="card-body">
          <h5 className="card-title">{myObj.title}</h5>
          <p className="card-text">{myObj.description}</p>
          <small>Price = {myObj.price}</small>
          {showButton ?
            <Link className="btn btn-primary" to={'/ProductDetails/'+myObj.id}>Show Details</Link>
          : null}
        </div>
      </div>
    </>
  );
}

export default Product;