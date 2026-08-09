import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

const DefaultLayouts = () => {
  return (
    <div>
      {/* navbar  */}

      <Header />
      {/* main body  */}
      <main className="main">
        <Outlet />
      </main>

      {/* footer  */}
      <Footer />
    </div>
  );
};

export default DefaultLayouts;
