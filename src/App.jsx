import Navbar from "./component/navbar/Navbar";
import "./App.scss";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Children } from "react";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: {
        path: "/",
        element: <Home />,
      },
    },
  ]);

return(<RouterProvider router={router}></RouterProvider>)
}

export default App;
