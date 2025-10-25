import React from "react";
import Header from "../components/Header";
import Container from "../components/Container/Container";
import LatestDiscount from "../components/LatestDiscount";
import DiscountSwiper from "../components/DiscountSwiper";
import Discount2 from "../components/Discount2";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";
import Footer from "../components/Footer";
import Loading from "../components/pages/Loading";

function HomeLayout() {
  const {state} = useNavigation();
  return (
    <div>
      {/* ----------------------Head Section-------------------- */}
      <header>
        <Header></Header>
        <Container>
          <DiscountSwiper></DiscountSwiper>
          {/* <LatestDiscount></LatestDiscount> */}
          <Discount2></Discount2>
        </Container>
      </header>

      {/* ------------------------Nav Section--------------------------- */}

      <nav className="w-11/12 mx-auto my-3">
        <Navbar></Navbar>
      </nav>

      <main className="w-11/12 mx-auto my-3 gap-5 grid grid-cols-12">
        {/* ------------------------Left Side------------------ */}
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>

        {/* ---------------------Main Side---------------------------- */}

        <section className="main col-span-6">

          {state === "loading" ? <Loading /> : <Outlet />}
          
        </section>
        {/* -------------------------Right side--------------------------------- */}
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default HomeLayout;
