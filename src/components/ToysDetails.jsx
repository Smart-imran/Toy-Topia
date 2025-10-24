import React, { useEffect, useState } from "react";
import Header from "./Header";
import RightAside from "./HomeLayout/RightAside";
import { useLoaderData, useParams } from "react-router";
import ToysDetailsCard from "./ToysDetailsCard";

const ToysDetails = () => {
  const data = useLoaderData();
  const { toyId } = useParams();
  const [toys, setToys] = useState({});

  useEffect(() => {
    
    const allToys = data.flatMap(category => category.toys);
    const toyDetails = allToys.find(toy => String(toy.toyId) === String(toyId));

    setToys(toyDetails || {}); 
  }, [data, toyId]);

  return (
    <div>
      <header className="py-5">
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
        <section className="col-span-9">
          <h2 className="font-bold mb-5">Toy Details</h2>
          <ToysDetailsCard toys={toys} />
        </section>

        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default ToysDetails;
