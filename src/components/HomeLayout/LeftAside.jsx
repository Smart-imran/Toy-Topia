import React, { Suspense } from "react";
import Categories from "../Categories";

function LeftAside() {
  return (
    <Suspense
      fallback={<span className="loading loading-dots loading-xl"></span>}
    >
      <Categories></Categories>
    </Suspense>
  );
}

export default LeftAside;
