import React from "react";
import Info from "./Info";
import AnimatedPage from "../../Components/Effect/AnimatedPage";

const MainPage = () => {
  return (
    <AnimatedPage className="no-scrollbar">
      <div className="pt-20 bg-gray-900 text-white p-6 no-scrollbar">
        <div className="flex flex-col space-y-4 flex-grow overflow-y-scroll no-scrollbar p-4 bg-gray-800 rounded-lg w-full max-w-2xl mx-auto pb-20 no-scrollbar">
          <Info />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default MainPage;
