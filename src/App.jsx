import "./App.css";

import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import MainPage from "./Page/MainPage/MainPage";
import Loading from "./Page/Loading/Loading";
import Result from "./Page/Result/Result";


function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/result",
        element: <Result />,
      },
      {
        path: "/loading",
        element: <Loading />,
      },
    ],
  },
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;
