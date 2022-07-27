/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import image from "./jeans3.jpg";

function Home(props) {
  console.log("Props", props)
  return (
    <div>
      <h1>Home Component</h1>
      <div className="card">
        <img src={image} alt="Denim Jeans" style={{ width: 100 }} />
        <h1>Tailored Jeans</h1>
        <p className="price">$19.99</p>
        <p>
          Some text about the jeans. Super slim and comfy lorem ipsum lorem
          jeansum. Lorem jeamsun denim lorem jeansum.
        </p>
        <p>
          <button onClick={()=>{props.addToCartHandler({price :10000, name: "Cloth"})}}>Add to Cart</button>
          <button className="remove-cart-btn" onClick={()=>{props.removeToCartHandler()}}>Remove to Cart</button>
        </p>
      </div>
    </div>
  );
}

export default Home;
