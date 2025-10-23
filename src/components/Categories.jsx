import React, { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoriesPromise);
  return (
    <div>
      <h2 className="font-bold">All Categories({categories.length})</h2>

      <div  className="flex flex-col mt-5 gap-3">
        {
            categories.map(cat =><NavLink
            key={cat.id}
            className={"btn border-0 bg-base-100 hover:bg-base-200 font-semibold text-accent"}
            to={`/category/${cat.id}`}
            >
                {cat.name}
            </NavLink>)
        }
      </div>
    </div>
  );
};

export default Categories;
