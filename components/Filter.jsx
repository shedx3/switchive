"use client";
import React from "react";

const Filter = ({
  searchTerm,
  setSearchTerm,
  sortOrder,
  setSortOrder,
  category,
  setCategory,
  categories,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-end gap-8 mb-6">
      <div className="flex items-center border border-[#B9B8B8] rounded-lg overflow-hidden md:w-[47%] sm:w-full">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border-r border-[#B9B8B8] outline-none flex-2 text-gray-400 "
        >
          <option value="" >All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 outline-none flex-1 "
        />
      </div>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="p-2 border rounded-lg w-full md:w-1/6 border-[#B9B8B8] outline-none text-gray-400"
      >
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="title-asc">Title: A to Z</option>
        <option value="title-desc">Title: Z to A</option>
      </select>
    </div>
  );
};


export default Filter;
