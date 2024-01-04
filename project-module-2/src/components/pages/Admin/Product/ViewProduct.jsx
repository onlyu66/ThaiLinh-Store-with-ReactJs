import React from "react";

function ViewProduct({selectProduct}) {
  return (
    <div>
      <pre>Name: {selectProduct.model}</pre>
      <pre>Price: {selectProduct.price}</pre>
      <pre>Image: <img width="50px" src={selectProduct.image}/></pre>
      <pre>Quantity: {selectProduct.quantity}</pre>
    </div>
  );
}

export default ViewProduct;
