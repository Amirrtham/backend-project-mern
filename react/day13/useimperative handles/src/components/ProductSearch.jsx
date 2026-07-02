import { useRef, useState } from "react";
import SearchBox from "./SearchBox";

function ProductSearch() {
  const searchRef = useRef();

  const products = [
    "Laptop",
    "Laptop Stand",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Mobile",
    "Headphone",
  ];

  const [result, setResult] = useState(products);

  const handleSearch = (value) => {
    const filteredProducts = products.filter((product) =>
      product.toLowerCase().includes(value.toLowerCase())
    );

    setResult(filteredProducts);
  };

  return (
    <div>
      <h2>Product Search</h2>

      <SearchBox
        ref={searchRef}
        placeholder="Search Product Name"
        onSearch={handleSearch}
      />

      <button
        onClick={() => searchRef.current.focusInput()}
      >
        Focus Search Box
      </button>

      <button
        onClick={() => searchRef.current.clearInput()}
      >
        Clear Search Box
      </button>

      <h3>Products</h3>

      {result.map((product, index) => (
        <div key={index} className="card">
          {product}
        </div>
      ))}
    </div>
  );
}

export default ProductSearch;