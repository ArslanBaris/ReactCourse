import React from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {
  return (
    <div>
      <Navi />
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default App;
