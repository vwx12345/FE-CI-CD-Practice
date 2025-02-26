import React from "react";
import Info from "./Info";
import AnimatedPage from "../../Components/Effect/AnimatedPage";

const MainPage = () => {
  return (
    <AnimatedPage>
      <div className="pt-20 bg-gray-900 text-white p-6">
        <Info />
      </div>
    </AnimatedPage>
  );
};

export default MainPage;
