import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ToysCard from "../ToysCard";

const CategoryToys = () => {
  const { id } = useParams();
  const data = useLoaderData(); // প্রতিটা ক্যাটাগরি + toys list

  const [categoryToys, setCategoryToys] = useState([]);

  useEffect(() => {
    // সব toys একত্র করা (nested array flatten করা)
    const allToys = data.flatMap((cat) => cat.toys);

    if (id === "0") {
      // সব toys দেখাও
      setCategoryToys(allToys);
    } 
    else if (id === "1") {
      // শুধু Today's Pick toys
      const filterToys = allToys.filter((toy) => toy.is_today_pick === true);
      setCategoryToys(filterToys);
    } 
    else {
      // নির্দিষ্ট category অনুযায়ী filter
      const category = data.find((cat) => cat.id == id);
      if (category) {
        setCategoryToys(category.toys);
      } else {
        setCategoryToys([]); // কিছু না পেলে খালি array
      }
    }
  }, [data, id]);

  return (
    <div>
      <h2 className="font-bold mb-5">
        Category <span className="text-red-500 text-xl">{categoryToys.length}</span> Toys Found
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categoryToys.map((toys) => (
          <ToysCard key={toys.toyId} toys={toys} />
        ))}
      </div>
    </div>
  );
};

export default CategoryToys;
