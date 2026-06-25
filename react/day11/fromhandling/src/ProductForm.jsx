import { useState } from "react";

function ProductForm() {
  const [product, setProduct] = useState({
    productName: "",
    price: "",
    category: "",
    brand: "",
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setProducts((prev) => [...prev, product]);

    setProduct({
      productName: "",
      price: "",
      category: "",
      brand: "",
    });
  };

  return (
    <div>
      <h1>Product Management Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={product.productName}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={product.brand}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <h2>Products</h2>

      {products.map((item, index) => (
        <div key={index}>
          <p>Product: {item.productName}</p>
          <p>Price: {item.price}</p>
          <p>Category: {item.category}</p>
          <p>Brand: {item.brand}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProductForm;