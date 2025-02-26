import React from "react";
import Hero from "./Hero";
import Forum from "./Forum";
import Contact from "./Contact";

const MainPage = () => {
  return (
    <div>
      <Hero />
      <div className="p-10"></div>
      <Forum />
      <Contact />
    </div>
  );
};


export default MainPage;
