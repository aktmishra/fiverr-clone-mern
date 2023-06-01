import Navbar from "./component/navbar/Navbar";
import "./App.scss";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from './pages/home/Home';
import Footer from './component/footer/Footer'
 

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
      children: [{ 
        path: "/",
        element: <Home />,}
      ]
    }
  ]);

return(<RouterProvider router={router}/> )
}

export default App;
