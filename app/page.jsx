
import FilterSortAndList from "../components/FilterSortAndList";


export default async function Home() {
  const res = await fetch("https://dummyjson.com/products");

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
  const data = await res.json();

  const products = Array.isArray(data.products) ? data.products : [];


  return (
    <div className="max-w-6xl mx-auto p-4">
      <FilterSortAndList products={products} />
    </div>
  );
}
