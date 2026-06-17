import { useState } from "react";

function ObjectState() {
  const [user, setUser] = useState(null);

  const [product, setProduct] = useState();

  return (
    <>
      <h2>User Data</h2>

      <button
        onClick={() =>
          setUser({
            name: "Sudhan",
            city: "Chennai",
          })
        }
      >
        Load User
      </button>

      {user && (
        <>
          <p>Name : {user.name}</p>
          <p>City : {user.city}</p>
        </>
      )}

      <hr />

      <h2>Product Details</h2>

      <button
        onClick={() =>
          setProduct({
            id: 101,
            name: "Laptop",
            price: 50000,
          })
        }
      >
        Load Product
      </button>

      {product && (
        <>
          <p>ID : {product.id}</p>
          <p>Name : {product.name}</p>
          <p>Price : ₹{product.price}</p>
        </>
      )}

      <hr />
    </>
  );
}

export default ObjectState;