import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const DefaultLayouts = ({ children }) => {
  return (
    <div>
      {/* navbar  */}

      <Header />
      {/* main body  */}
      <main className="main"></main>

      {/* footer  */}
      <Footer />
    </div>
  );
};

export default DefaultLayouts;
