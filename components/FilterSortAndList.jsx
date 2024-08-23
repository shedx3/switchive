"use client"; 

import { useState, useEffect } from "react";
import Filter from "./Filter";
import ProductList from "./ProductList";

const FilterSortAndList = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState("none");
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

   
  useEffect(() => {
    const uniqueCategories = [...new Set(products.map((p) => p.category))];
    setCategories(uniqueCategories);
  }, [products]);

  useEffect(() => {
    let filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    const sorted = filtered.sort((a, b) => {
      switch (sortOrder) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    setFilteredProducts(sorted);
  }, [searchTerm, sortOrder, category, products]);

  return (
    <div>
      <div >
        <Filter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
      </div>
    <div>
          <ProductList products={filteredProducts} />
    </div>
    </div>
  );
};

export default FilterSortAndList;
