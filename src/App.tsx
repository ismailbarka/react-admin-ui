import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import NavBar from "./Components/navBar/NavBar";
import Footer from "./Components/footer/Footer";
import Menu from "./Components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss"
import Product from "./pages/product/Product";
import User from "./pages/user/User";

function App() {



  const Layout = () =>{
    return(
      <div className="main">
        <NavBar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="ContentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element: <Home/>,
        },
        {
          path:"/users",
          element: <Users/>,
        },
        {
          path:"/products",
          element: <Products/>,
        },
        {
          path:"/users/:id",
          element: <User/>,
        },
        {
          path:"/Products/:id",
          element: <Product/>,
        },
      ]
    },
    {
      path:"login",
      element:<Login/>
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
